# 🖥️ macOS Terminal & OS Portfolio

¡Bienvenido a mi portfolio interactivo! Esta aplicación simula la interfaz de un sistema operativo **macOS**, diseñado especialmente para reflejar mi perfil híbrido en **Desarrollo Full Stack** y **Ciberseguridad / Ethical Hacking**.

A diferencia de los portfolios estáticos tradicionales, este entorno cuenta con una terminal completamente funcional integrada con Inteligencia Artificial, un simulador de entorno de desarrollo (VS Code) y un visor de rutina dinámica.

---

## 🚀 Características del Sistema

* **🖥️ Dock de Escritorio Estilo Mac:** Navegación fluida y minimalista a través de botones interactivos con optimización de rendimiento por hardware (`transform-gpu`).
* **📟 Terminal Interactiva con IA:** Una consola integrada basada en Node.js que procesa comandos del sistema y responde a preguntas técnicas en tiempo real utilizando modelos avanzados de NLP (Cohere API).
* **📝 Simulador de VS Code:** Un clon interactivo incorporado del editor de código con árbol de archivos y resaltado de sintaxis estricto para mostrar la estructura interna del proyecto.
* **🗓️ Calendar.app:** Un modal nativo que expone mi rutina diaria de forma dinámica, dividida entre auditorías de seguridad y desarrollo de software.

---

## 🛠️ Stack Tecnológico

* **Framework Principal:** [Astro 5](https://astro.build/) (Configurado en modo Server-Side Rendering para la gestión segura de APIs).
* **Componentes Interactivos:** [React](https://react.dev/) & TypeScript.
* **Estilos y Animaciones:** [Tailwind CSS v4](https://tailwindcss.com/) (Optimizando transiciones sin impacto en la GPU mediante layouts fluidos).
* **Inteligencia Artificial:** SDK oficial de [Cohere](https://cohere.com/) (`command-r`).
* **Despliegue e Infraestructura:** Contenedores aislados en [Railway](https://railway.app/).

---

## 🛡️ Configuración de Seguridad y Variables de Entorno

Para desplegar este proyecto o probarlo en local de forma segura, el backend requiere que se declare la clave de la API de IA. **Nunca expongas tus credenciales en el código estático.**

Crea un archivo `.env` en la raíz del proyecto:

```env
COHERE_API_KEY=tu_clave_secreta_aquí
