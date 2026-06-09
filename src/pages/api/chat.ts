import type { APIRoute } from 'astro';
import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: import.meta.env.COHERE_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Falta el array de mensajes' }), { status: 400 });
    }

    const lastMessage = body.messages[body.messages.length - 1].content;

    const cohereHistory = body.messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === 'user' ? 'USER' : 'CHATBOT',
      message: msg.content
    }));

    // Hacemos la llamada configurando el comportamiento multilenguaje
    const response = await cohere.chat({
      model: 'command-r-08-2024',
      message: lastMessage,
      chatHistory: cohereHistory,
      temperature: 0.7,
      maxTokens: 500,
      preamble: `You are the AI assistant inside David's macOS terminal portfolio. 
      Your purpose is to answer questions from visitors about David.
      
      HERE IS YOUR CORE INFORMATION (Use this to answer questions):
      - Name: David Ortega Dorado
      - Age: 20 years old
      - Role: Full Stack Developer / Frontend Developer and cybersecurity and auditing expert
      - Location: España
      - Key Skills_Developer: React, Node JS,TypeScript, JavaScript, Prisma ORM, SupaBase, Fastify, frontend, backend, data base, APIs, Railways
      -Key Skills_Cibersecurity: Ethical Hacking (Nmap, Burp Suite), Web Security (OWASP Top 10), Linux Hardening, Wireshark, Wi-Fi Auditing, SIEM, Kali Linux, SGSI, ISO 27001, Magerit
      - About: Desde los 14 años siempre me han apasionado los temas de las tecnologías de la información, más exactamente la ciberseguridad y la programación, siempre me ponía a buscar información, a curiosear y a trastear. 

Por ello decidí cursar el Grado Medio de sistemas microinformáticos y redes, dónde realice las prácticas en John Deere y me brindaron un aprendizaje y unas cualidades muy buenas, desarrollando las tareas de forma precisa.

Posteriormente opte por el Grado Superior de Desarrollo Aplicaciones Web, donde aprendí todos los conceptos de la programación y el desarrollo tanto cliente y servidor, realizando las prácticas en Performance Time, realizando una web informativa y llevando la gestión de un Ecommerce. 

Ahora, en mi actualidad me licencie en un máster de ciberseguridad y ciberinteligencia en Cadel Formación, donde me adentro más al mundo de la auditoría y detección de amenazas que hoy en día es un criterio muy importante para la seguridad digital. Aparte estoy realizando proyectos propios, desarrollando software, y trabajando para impulsar mis ideas en realidad, pero esa es otra historia que hará cambiar esta descripción... 🚀🌐

      CRITICAL RULES:
      1. Always reply in the SAME language the user is using (Spanish or English).
      2. Never invent information about David that is not listed here. If you don't know something, say it politely.
      3. Keep answers concise and optimized for a terminal view (use short paragraphs or bullet points).`
    });

    return new Response(
      JSON.stringify({ message: response.text }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate response' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
