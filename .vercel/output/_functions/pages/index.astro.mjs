import { c as createAstro, a as createComponent, r as renderComponent, b as addAttribute, d as renderTemplate, e as renderHead, f as renderSlot } from '../chunks/astro/server_BDP7g7JS.mjs';
import 'piccolore';
import { a as getImage } from '../chunks/_astro_assets_CgYCaAa_.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { MdWifi } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';
import { IoCellular, IoBatteryHalfOutline, IoSearchSharp, IoFolderOutline, IoDocumentText, IoClose, IoOpenOutline, IoLogoPython, IoCodeSlash } from 'react-icons/io5';
import { VscVscode, VscFolderActive, VscFiles, VscSourceControl, VscSettingsGear } from 'react-icons/vsc';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { BsTelegram, BsGithub } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { RiAwardLine, RiTerminalFill } from 'react-icons/ri';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  return renderTemplate`import '../../styles/global.css';
import ${AstroSeo} from '@astrolib/seo';

// Definimos el array estático una sola vez
const backgrounds = [
  '/images/mac-background1.jpg',
  '/images/mac-background2.jpg',
  '/images/mac-background3.jpg'
];
<!-- Core meta tags --> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> <meta name="author" content="David Ortega Dorado"> <!-- SEO Configuration --> ${renderComponent($$result, "AstroSeo", AstroSeo, { "title": Astro2.props.title || "David Ortega Dorado", "description": Astro2.props.description || "Full Stack Developer based in Austin, TX specializing in React, Node.js, and modern web technologies", "canonical": Astro2.props.canonical || "https://ortegadorado.com", "openGraph": {
    url: Astro2.props.openGraph?.url || "https://ortegadorado.com",
    title: Astro2.props.openGraph?.title || "David Ortega Dorado",
    description: Astro2.props.openGraph?.description || "I am a Full Stack developer with experience in React, Next.js, Fastify Node.js, SupaBase, Prisma ORM, Railways among other tools...",
    images: [
      {
        url: ""
      }
    ],
    site_name: Astro2.props.openGraph?.site_name || "David Ortega Dorado"
  } })} <!-- Favicon files --> <link rel="apple-touch-icon" sizes="180x180" href="/images/favi.png"> <link rel="icon" type="image/png" sizes="32x32" href="/images/favi.png"> <link rel="icon" type="image/png" sizes="16x16" href="/images/favi.png"> <!-- Theme colors for browsers --> <meta name="msapplication-TileColor" content="YOUR_COLOR_HEX"> <meta name="theme-color" content="YOUR_COLOR_HEX"> <!-- Auto-generated sitemap --> <link rel="sitemap" href="/sitemap-index.xml"> <!-- Preload background images for performance --> ${backgrounds.map((src) => renderTemplate`<link rel="preload"${addAttribute(src, "href")} as="image" fetchpriority="high">`)}`;
}, "/home/fedora-david/Portfolio/macos-terminal-portfolio/src/components/global/BaseHead.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="scroll-smooth selection:bg-gray-900 selection:text-white overflow-x-hidden"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": Astro2.props.title, "description": Astro2.props.description, "canonical": Astro2.props.canonical, "openGraph": Astro2.props.openGraph })}${renderHead()}</head> <body class="overflow-x-hidden bg-gray-900"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/fedora-david/Portfolio/macos-terminal-portfolio/src/layouts/Layout.astro", void 0);

function MacToolbar() {
  const [currentDateTime, setCurrentDateTime] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(timer);
  }, []);
  const formatMacDate = (date) => {
    const weekday = date.toLocaleString("en-US", { weekday: "short" });
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const hour = date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true
    });
    const minute = date.getMinutes().toString().padStart(2, "0");
    const period = date.getHours() >= 12 ? "PM" : "AM";
    return `${weekday} ${month} ${day} ${hour.replace(
      /\s?[AP]M/,
      ""
    )}:${minute} ${period}`;
  };
  const formatIPhoneTime = (date) => {
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, "0");
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour}:${minute}`;
  };
  const handleVSCodeClick = () => {
    window.location.href = "vscode:/";
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 md:hidden bg-transparent text-white h-12 px-8 flex items-center justify-between text-base font-medium", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: formatIPhoneTime(currentDateTime) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx(IoCellular, { size: 20 }),
        /* @__PURE__ */ jsx(MdWifi, { size: 20 }),
        /* @__PURE__ */ jsx(IoBatteryHalfOutline, { size: 24 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 hidden md:flex bg-black/20 backdrop-blur-md text-white h-6 px-4 items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(FaApple, { size: 16 }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold cursor-default", children: "David OrtegaDorado" }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: "File" }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: "Edit" }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: "View" }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: "Go" }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: "Window" }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: "Help" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(
          VscVscode,
          {
            size: 16,
            className: "cursor-default hover:opacity-80 transition-opacity",
            onClick: handleVSCodeClick,
            title: "Open in VSCode"
          }
        ),
        /* @__PURE__ */ jsx(MdWifi, { size: 16 }),
        /* @__PURE__ */ jsx(IoSearchSharp, { size: 16 }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: formatMacDate(currentDateTime) })
      ] })
    ] })
  ] });
}

const PLACEHOLDER_MESSAGES = [
  "Type your question...",
  "How old are you?",
  "What are your skills?",
  "Where are you located?",
  "What projects have you worked on?",
  "Where have you worked?"
];
function MacTerminal() {
  const [chatHistory, setChatHistory] = useState({
    messages: [],
    input: ""
  });
  const [isTyping, setIsTyping] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    let timeout;
    const currentMessage = PLACEHOLDER_MESSAGES[currentPlaceholderIndex];
    const animatePlaceholder = () => {
      if (isDeleting) {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setCurrentPlaceholderIndex(
            (prev) => (prev + 1) % PLACEHOLDER_MESSAGES.length
          );
          timeout = setTimeout(animatePlaceholder, 400);
        } else {
          setPlaceholder((prev) => prev.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 80);
        }
      } else {
        if (placeholder.length === currentMessage.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setPlaceholder(currentMessage.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 120);
        }
      }
    };
    timeout = setTimeout(animatePlaceholder, 100);
    return () => clearTimeout(timeout);
  }, [placeholder, isDeleting, currentPlaceholderIndex]);
  const welcomeMessage = `Welcome to My Portfolio

Name: David OretgaDorado
Role: Full Stack Developer and cibersecurity analist
Location: Spain

Contact: ortegadorado1@gmail.com
GitHub: github.com/david-rtd

Ask me anything!
`;
  const currentDate = /* @__PURE__ */ new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const systemPrompt = `IMPORTANT: You ARE David Ortega Dorado himself. You must always speak in first-person ("I", "my", "me"). Never refer to "David" in third-person.
CURRENT DATE: ${formattedDate} - Always use this exact date when discussing the current date/year.

Example responses:
Q: "Where do you live?"
A: "I live in Getafe, Spain"

Q: "What's your background?"
A: "I am a Full Stack developer with experience in React, Next.js, Fastify Node.js, SupaBase, Prisma ORM, Railways among other tools. I am also certified in the IFCT0046 training specialty in cybersecurity and cyber intelligence, managing systems such as Kali Linux, SIEM, security regulations like ISO 27001 and MAGERIT, audits with Sguil, using BurpSuite to monitor endpoints..."

Q: "How old are you?"
A: "I'm 21 years old"

Core details about me:
- I'm 20 years old
- I live in Austin, TX
- I'm a Full Stack Developer and cibersecurity analist
- My email is ortegadorado1@gmail.com.com
- I was born in 2005
- I was born in Getafe, Spain

My technical expertise:
- Full Stack Development
- React, Express, Node, Astro, JavaScript, TypeScript
- Node.js/Express

Response rules:
1. ALWAYS use first-person (I, me, my)
2. Never say "David" or refer to myself in third-person
3. Keep responses concise and professional
4. Use markdown formatting when appropriate
5. Maintain a friendly, conversational tone

If a question is unrelated to my work or portfolio, say: "That's outside my area of expertise. Feel free to email me at ortegadorado1@gmail.com.com and we can discuss further!"`;
  useEffect(() => {
    setChatHistory((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        { role: "assistant", content: welcomeMessage }
      ]
    }));
  }, []);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory.messages]);
  const handleInputChange = (e) => {
    setChatHistory((prev) => ({ ...prev, input: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = chatHistory.input.trim();
    if (!userInput) return;
    setChatHistory((prev) => ({
      messages: [...prev.messages, { role: "user", content: userInput }],
      input: ""
    }));
    setIsTyping(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...chatHistory.messages,
            { role: "user", content: userInput }
          ]
        })
      });
      if (!response.ok) throw new Error("Failed to get response");
      const data = await response.json();
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { role: "assistant", content: data.message }
        ]
      }));
    } catch (error) {
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: "assistant",
            content: "I'm having trouble processing that. Please email me at ortegadorado1@gmail.com"
          }
        ]
      }));
    } finally {
      setIsTyping(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-black/75 w-[600px] h-[400px] rounded-lg overflow-hidden shadow-lg mx-4 sm:mx-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 h-6 flex items-center space-x-2 px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500" }),
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-300 flex-grow text-center font-semibold flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx(FaRegFolderClosed, { size: 14, className: "text-gray-300" }),
        "ortegadorado.com ⸺ zsh"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 text-gray-200 font-mono text-xs h-[calc(400px-1.5rem)] flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto", children: [
        chatHistory.messages.map((msg, index) => /* @__PURE__ */ jsx("div", { className: "mb-2", children: msg.role === "user" ? /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: ">" }),
          /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: msg.content })
        ] }) : /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: msg.content }) }, index)),
        isTyping && /* @__PURE__ */ jsx("div", { className: "animate-pulse", children: "..." }),
        /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
      ] }),
      /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, className: "mt-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2", children: [
        /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: "david@ortegadorado.com root %" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: chatHistory.input,
            onChange: handleInputChange,
            className: "w-full sm:flex-1 bg-transparent outline-none text-white placeholder-gray-400",
            placeholder
          }
        )
      ] }) })
    ] })
  ] });
}

function MobileDock() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState("cv");
  const handleEmailClick = () => {
    window.location.href = "mailto:ortegadorado1@gmail.com";
  };
  const handleGithubClick = () => {
    window.open("https://github.com/david-rtd", "_blank");
  };
  const projects = [
    {
      name: "HoneyDog",
      description: "SSH Honeypot interactivo con arquitectura multihilo. Captura intentos de intrusión por fuerza bruta, simula un entorno GNU/Linux controlado y audita comandos enviando alertas push en tiempo real vía Telegram API.",
      tag: "Cybersecurity",
      url: "https://github.com/david-rtd/honeydog",
      icon: /* @__PURE__ */ jsx(IoLogoPython, { size: 22, className: "text-yellow-500" }),
      image: "/images/honeydog-banner.png"
    },
    {
      name: "DogLog",
      description: "Linux Log Watchdog & Incident Response (IDS) en Python con alertas de Telegram.",
      tag: "Cybersecurity",
      url: "https://github.com/david-rtd/doglog",
      icon: /* @__PURE__ */ jsx(IoLogoPython, { size: 22, className: "text-yellow-500" }),
      image: "/images/doglog-banner.png"
    },
    {
      name: "Portfolio",
      description: "Portfolio web interactivo con diseño e interfaz de entorno de escritorio macOS.",
      tag: "Full-Stack",
      url: "https://github.com/david-rtd/portfolio",
      icon: /* @__PURE__ */ jsx(IoCodeSlash, { size: 22, className: "text-blue-400" }),
      image: "/images/favi.png"
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 md:hidden z-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-4 mb-4 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-xl rounded-3xl flex justify-around items-center max-w-[400px] mx-auto shadow-2xl border border-white/10", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://t.me/davidrtd",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex flex-col items-center",
          children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx(BsTelegram, { size: 36, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleEmailClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx(IoIosMail, { size: 40, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleGithubClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-t from-black to-black/60 rounded-2xl flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx(BsGithub, { size: 36, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsFinderOpen(true),
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-t from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center shadow-md border border-white/5", children: /* @__PURE__ */ jsx(IoFolderOutline, { size: 36, className: "text-blue-600" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsPreviewOpen(true),
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-t from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsx(IoDocumentText, { size: 34, className: "text-white" }) })
        }
      )
    ] }) }),
    isFinderOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 bg-[#121212] z-50 flex flex-col font-sans text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#1e1e1e] h-14 flex items-center justify-between px-4 border-b border-gray-800 shrink-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsFinderOpen(false),
            className: "p-2 rounded-full bg-gray-800 hover:bg-gray-700 active:scale-95 transition-all text-gray-400 hover:text-white",
            children: /* @__PURE__ */ jsx(IoClose, { size: 20 })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold tracking-wide", children: "Finder — Proyectos" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleGithubClick,
            className: "p-2 rounded-full bg-gray-800 text-gray-300 active:scale-95 transition-all",
            title: "Open GitHub",
            children: /* @__PURE__ */ jsx(BsGithub, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 bg-[#121212] pb-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider pl-1 select-none", children: [
          "Repositorios (",
          projects.length,
          ")"
        ] }),
        projects.map((project, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => window.open(project.url, "_blank"),
            className: "bg-[#1e1e1e] border border-gray-800 rounded-2xl active:bg-[#252526] active:border-gray-700 transition-all shadow-md flex flex-col justify-between overflow-hidden",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "p-4 pb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-mono text-base font-bold text-blue-400 min-h-[24px]", children: [
                    project.icon ? project.icon : /* @__PURE__ */ jsx("span", { children: "🐾" }),
                    project.name
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#2a2a2b] text-gray-400 border border-gray-800 shrink-0", children: project.tag })
                ] }) }),
                project.image && /* @__PURE__ */ jsx("div", { className: "w-full h-28 bg-[#252526]/40 flex items-center justify-center border-y border-gray-800/60 overflow-hidden relative", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.name,
                    className: "w-full h-full object-contain scale-[1.5] active:scale-[1.6] transition-transform duration-300"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "p-4 pt-3", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 leading-relaxed font-sans", children: project.description }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-500 font-medium px-4 pb-4 flex items-center gap-1 font-sans mt-auto select-none", children: [
                "Abrir en GitHub ",
                /* @__PURE__ */ jsx(IoOpenOutline, { size: 12 })
              ] })
            ]
          },
          index
        ))
      ] })
    ] }),
    isPreviewOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 bg-[#121212] z-50 flex flex-col font-sans text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#1e1e1e] h-14 flex items-center justify-between px-4 border-b border-gray-800 shrink-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsPreviewOpen(false),
            className: "p-2 rounded-full bg-gray-800 hover:bg-gray-700 active:scale-95 transition-all text-gray-400 hover:text-white",
            children: /* @__PURE__ */ jsx(IoClose, { size: 20 })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold tracking-wide", children: "Preview.app" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => window.open(activeDoc === "cv" ? "/cv-david.pdf" : "/carta-john-deere.pdf", "_blank"),
            className: "p-2 rounded-full bg-blue-600/20 text-blue-400 active:scale-95 transition-all",
            title: "Open full PDF",
            children: /* @__PURE__ */ jsx(IoOpenOutline, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#1a1a1a] p-2 flex border-b border-gray-900 shrink-0 gap-2", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveDoc("cv"),
            className: `flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border ${activeDoc === "cv" ? "bg-[#3c3c3e] border-gray-600 text-white shadow" : "bg-transparent border-transparent text-gray-500"}`,
            children: [
              /* @__PURE__ */ jsx(IoDocumentText, { size: 16, className: activeDoc === "cv" ? "text-orange-400" : "" }),
              "Curriculum"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveDoc("johandeere"),
            className: `flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border ${activeDoc === "johandeere" ? "bg-[#3c3c3e] border-gray-600 text-white shadow" : "bg-transparent border-transparent text-gray-500"}`,
            children: [
              /* @__PURE__ */ jsx(RiAwardLine, { size: 16, className: activeDoc === "johandeere" ? "text-yellow-400" : "" }),
              "John Deere"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-[#121212] overflow-hidden relative", children: activeDoc === "cv" ? /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "/cv-david.pdf#toolbar=0&navpanes=0",
          className: "w-full h-full border-0 bg-[#121212]",
          title: "David CV Mobile"
        }
      ) : /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "/carta-john-deere.pdf#toolbar=0&navpanes=0",
          className: "w-full h-full border-0 bg-[#121212]",
          title: "John Deere Letter Mobile"
        }
      ) })
    ] })
  ] });
}

function DesktopDock() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isVSCodeOpen, setIsVSCodeOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState("cv");
  const handleEmailClick = () => {
    window.location.href = "mailto:ortegadorado1@gmail.com";
  };
  const handleGithubClick = () => {
    window.open("https://github.com/david-rtd", "_blank");
  };
  const projects = [
    {
      name: "HoneyDog",
      description: "SSH Honeypot interactivo con arquitectura multihilo. Captura intentos de intrusión por fuerza bruta, simula un entorno GNU/Linux controlado y audita comandos enviando alertas push en tiempo real vía Telegram API.",
      tag: "Cybersecurity",
      url: "https://github.com/david-rtd/honeydog",
      icon: /* @__PURE__ */ jsx(IoLogoPython, { size: 20, className: "text-yellow-500" }),
      image: "/images/honeydog-banner.png"
    },
    {
      name: "DogLog",
      description: "Linux Log Watchdog & Incident Response (IDS) en Python con alertas de Telegram.",
      tag: "Cybersecurity",
      url: "https://github.com/david-rtd/doglog",
      icon: /* @__PURE__ */ jsx(IoLogoPython, { size: 20, className: "text-yellow-500" }),
      image: "/images/doglog-banner.png"
      // Añade aquí tu PNG para doglog
    },
    {
      name: "Portfolio",
      description: "Portfolio web interactivo con diseño e interfaz de entorno de escritorio macOS.",
      tag: "Full-Stack",
      url: "https://github.com/david-rtd/portfolio",
      icon: /* @__PURE__ */ jsx(IoCodeSlash, { size: 20, className: "text-blue-400" }),
      image: "/images/favi.png"
      // Añade aquí tu PNG para el portfolio
    }
  ];
  const routine = [
    { time: "08:00 - 10:00", activity: "☕ Cyber Threat Intelligence / Coffee", color: "bg-amber-500/20 border-amber-500 text-amber-300" },
    { time: "10:00 - 13:30", activity: "💻 Full Stack Dev (Astro / Node.js)", color: "bg-blue-500/20 border-blue-500 text-blue-300" },
    { time: "13:30 - 15:00", activity: "🍱 Lunch & AFK", color: "bg-gray-500/20 border-gray-500 text-gray-400" },
    { time: "15:00 - 18:00", activity: "🛡️ Pentesting & OWASP Audits (Burp Suite)", color: "bg-red-500/20 border-red-500 text-red-300" },
    { time: "18:00 - 20:00", activity: "🏋️ Workout / Open Source Contributions", color: "bg-green-500/20 border-green-500 text-green-300" }
  ];
  const Tooltip = ({ text }) => /* @__PURE__ */ jsx("div", { className: "absolute -top-14 left-1/2 -translate-x-1/2 z-50", children: /* @__PURE__ */ jsxs("div", { className: "relative px-3 py-1 bg-[#1d1d1f]/80 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap border border-px border-gray-600", children: [
    text,
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3 h-3 bg-[#1d1d1f]/80 backdrop-blur-sm rotate-45 border-b border-r border-gray-600" })
  ] }) });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-1/2 -translate-x-1/2 hidden md:block z-50", children: /* @__PURE__ */ jsx("div", { className: "relative mb-2 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-2xl rounded-2xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end space-x-4", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsVSCodeOpen(true),
          onMouseEnter: () => setHoveredIcon("vscode"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(VscVscode, { size: 45, className: "text-blue-500" }) }),
            hoveredIcon === "vscode" && /* @__PURE__ */ jsx(Tooltip, { text: "Open Project Code" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleEmailClick,
          onMouseEnter: () => setHoveredIcon("email"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(IoIosMail, { size: 45, className: "text-white" }) }),
            hoveredIcon === "email" && /* @__PURE__ */ jsx(Tooltip, { text: "Email Me" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleGithubClick,
          onMouseEnter: () => setHoveredIcon("github"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(BsGithub, { size: 45, className: "text-gray-100" }) }),
            hoveredIcon === "github" && /* @__PURE__ */ jsx(Tooltip, { text: "My GitHub Profile" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsFinderOpen(true),
          onMouseEnter: () => setHoveredIcon("finder"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-t from-gray-200 to-gray-400 rounded-xl flex items-center justify-center shadow-lg border border-white/10", children: /* @__PURE__ */ jsx(IoFolderOutline, { size: 45, className: "text-blue-600" }) }),
            hoveredIcon === "finder" && /* @__PURE__ */ jsx(Tooltip, { text: "Projects Explorer" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsPreviewOpen(true),
          onMouseEnter: () => setHoveredIcon("cv"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-gradient-to-t from-orange-500 to-amber-400 rounded-xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(IoDocumentText, { size: 42, className: "text-white" }) }),
            hoveredIcon === "cv" && /* @__PURE__ */ jsx(Tooltip, { text: "Credentials & Experience" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsCalendarOpen(true),
          onMouseEnter: () => setHoveredIcon("calendar"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "w-14 h-14 overflow-hidden shadow-lg relative rounded-xl", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white to-gray-200 rounded-xl" }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 inset-x-0 h-5 bg-red-500 flex items-center justify-center rounded-t-xl", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-white uppercase", children: (/* @__PURE__ */ new Date()).toLocaleString("en-US", { month: "short" }) }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-end justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-3xl font-light text-black", children: (/* @__PURE__ */ new Date()).getDate() }) })
            ] }),
            hoveredIcon === "calendar" && /* @__PURE__ */ jsx(Tooltip, { text: "View My Routine" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("div", { className: "w-px h-14 bg-white/20" }) }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onMouseEnter: () => setHoveredIcon("terminal"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "w-14 h-14 rounded-2xl overflow-hidden shadow-lg relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-500 rounded-xl" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-[2px] rounded-xl bg-black", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1 left-2", children: /* @__PURE__ */ jsx(RiTerminalFill, { size: 20, className: "text-white" }) }) })
            ] }),
            hoveredIcon === "terminal" && /* @__PURE__ */ jsx(Tooltip, { text: "Terminal" })
          ]
        }
      )
    ] }) }) }),
    isFinderOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#1e1e1e] border border-gray-700 w-full max-w-4xl h-[520px] rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-white transform-gpu transition-transform duration-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#2d2d2d] h-10 flex items-center justify-between px-4 border-b border-gray-800 select-none shrink-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsFinderOpen(false),
              className: "w-3 h-3 rounded-full bg-red-500 flex items-center justify-center group hover:bg-red-600 transition-colors",
              children: /* @__PURE__ */ jsx(IoClose, { size: 8, className: "text-black/70 opacity-0 group-hover:opacity-100" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-gray-400", children: "Finder.app — Proyectos GitHub" }),
        /* @__PURE__ */ jsx("div", { className: "w-14" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 overflow-hidden w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-40 bg-[#252526] p-3 hidden sm:flex flex-col shrink-0 border-r border-gray-800 select-none text-gray-400", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3", children: "Favoritos" }),
          /* @__PURE__ */ jsxs("div", { className: "text-gray-200 font-medium text-xs px-2 py-1.5 bg-[#37373d]/50 rounded-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(VscFolderActive, { className: "text-blue-500", size: 16 }),
            " Proyectos"
          ] }),
          /* @__PURE__ */ jsxs("div", { onClick: handleGithubClick, className: "text-gray-400 font-medium text-xs px-2 py-1.5 hover:bg-[#37373d]/30 rounded-lg flex items-center gap-2 mt-1 cursor-pointer transition-colors", children: [
            /* @__PURE__ */ jsx(BsGithub, { size: 14 }),
            " Ir a GitHub"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 bg-[#1e1e1e] p-5 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 h-full content-start", children: projects.map((project, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => window.open(project.url, "_blank"),
            className: "bg-[#2d2d2d] border border-gray-700/60 rounded-xl hover:border-blue-500/70 hover:bg-[#333334] transition-all cursor-pointer group flex flex-col justify-between shadow-sm overflow-hidden h-full",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
                /* @__PURE__ */ jsx("div", { className: "p-4 pb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-mono text-sm font-semibold text-blue-400 group-hover:text-blue-300 min-h-[24px]", children: [
                    project.icon ? project.icon : /* @__PURE__ */ jsx("span", { children: "🐾" }),
                    project.name
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1a1a1a] text-gray-400 border border-gray-700 shrink-0", children: project.tag })
                ] }) }),
                project.image && // 1. Dejamos el contenedor base con una altura fija controlada (ej. h-32)
                /* @__PURE__ */ jsx("div", { className: "w-full h-23 bg-[#252526]/40 flex items-center justify-center border-y border-gray-700/30 overflow-hidden relative", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.name,
                    className: "w-full h-full object-contain scale-[1.4] group-hover:scale-[1.55] transition-transform duration-300"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "p-4 pt-2 flex-1", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 font-sans leading-relaxed line-clamp-5", children: project.description }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-[10px] text-blue-500 font-medium px-4 pb-4 pt-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-sans mt-auto select-none", children: [
                "Ver repositorio externo ",
                "➔"
              ] })
            ]
          },
          index
        )) }) })
      ] })
    ] }) }),
    isCalendarOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#1e1e1e] border border-gray-700 w-full max-w-lg rounded-xl overflow-hidden shadow-2xl text-white font-sans transform-gpu scale-100 transition-transform duration-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#2d2d2d] h-9 flex items-center justify-between px-4 border-b border-gray-800", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setIsCalendarOpen(false), className: "w-3 h-3 rounded-full bg-red-500 flex items-center justify-center group hover:bg-red-600 transition-colors", children: /* @__PURE__ */ jsx(IoClose, { size: 8, className: "text-black/70 opacity-0 group-hover:opacity-100" }) }),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-gray-400 select-none", children: "Calendar.app — Routine" }),
        /* @__PURE__ */ jsx("div", { className: "w-14" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 font-sans", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4 border-b border-gray-800 pb-2 select-none", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold tracking-wide text-red-400 uppercase", children: (/* @__PURE__ */ new Date()).toLocaleString("es-ES", { weekday: "long", month: "long", day: "numeric" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-0.5 bg-gray-800 text-gray-400 rounded-md border border-gray-700", children: "📍 Local Time" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 max-h-[280px] overflow-y-auto pr-1", children: routine.map((item, index) => /* @__PURE__ */ jsxs("div", { className: `p-3 rounded-lg border-l-4 border shadow-sm ${item.color}`, children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] font-semibold opacity-80 uppercase tracking-wider mb-0.5 select-none", children: item.time }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium tracking-wide select-none", children: item.activity })
        ] }, index)) })
      ] })
    ] }) }),
    isPreviewOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#1e1e1e] border border-gray-700 w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-white transform-gpu transition-transform duration-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#2d2d2d] h-10 flex items-center justify-between px-4 border-b border-gray-800 select-none shrink-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsPreviewOpen(false),
              className: "w-3 h-3 rounded-full bg-red-500 flex items-center justify-center group hover:bg-red-600 transition-colors",
              children: /* @__PURE__ */ jsx(IoClose, { size: 8, className: "text-black/70 opacity-0 group-hover:opacity-100" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-1 bg-[#1a1a1a] p-1 rounded-lg border border-gray-800", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setActiveDoc("cv"),
              className: `px-4 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${activeDoc === "cv" ? "bg-[#3c3c3e] text-white shadow" : "text-gray-400 hover:text-gray-200"}`,
              children: [
                /* @__PURE__ */ jsx(IoDocumentText, { size: 14, className: activeDoc === "cv" ? "text-orange-400" : "" }),
                "Curriculum Vitae"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setActiveDoc("johndeere"),
              className: `px-4 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${activeDoc === "johndeere" ? "bg-[#3c3c3e] text-white shadow" : "text-gray-400 hover:text-gray-200"}`,
              children: [
                /* @__PURE__ */ jsx(RiAwardLine, { size: 14, className: activeDoc === "johndeere" ? "text-yellow-400" : "" }),
                "Letter of Recommendation (John Deere)"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 font-normal hidden sm:inline", children: "Preview.app" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-[#121212] p-2 relative", children: activeDoc === "cv" ? /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "/cv-david.pdf#toolbar=0&navpanes=0",
          className: "w-full h-full rounded-lg border-0 bg-[#121212]",
          title: "David CV"
        }
      ) : /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "/carta-john-deere.pdf#toolbar=0&navpanes=0",
          className: "w-full h-full rounded-lg border-0 bg-[#121212]",
          title: "John Deere Recommendation Letter"
        }
      ) })
    ] }) }),
    isVSCodeOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#1e1e1e] border border-gray-700 w-full max-w-2xl h-[450px] rounded-xl overflow-hidden shadow-2xl flex flex-col font-mono text-xs text-gray-300 transform-gpu transition-transform duration-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#323233] h-9 flex items-center justify-between px-4 border-b border-[#252526] select-none shrink-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsVSCodeOpen(false),
              className: "w-3 h-3 rounded-full bg-red-500 flex items-center justify-center group hover:bg-red-600 transition-colors",
              children: /* @__PURE__ */ jsx(IoClose, { size: 8, className: "text-black/70 opacity-0 group-hover:opacity-100" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400 font-sans", children: "portfolio-david — profile.ts — Visual Studio Code" }),
        /* @__PURE__ */ jsx("div", { className: "w-14" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 overflow-hidden w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-12 bg-[#333333] border-r border-[#252526] flex flex-col items-center justify-between py-4 text-gray-400 shrink-0 select-none", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-6 w-full", children: [
            /* @__PURE__ */ jsx("div", { className: "text-white border-l-2 border-blue-500 w-full flex justify-center py-0.5 cursor-pointer", children: /* @__PURE__ */ jsx(VscFiles, { size: 22 }) }),
            /* @__PURE__ */ jsx("div", { className: "hover:text-white transition-colors cursor-pointer", children: /* @__PURE__ */ jsx(VscSourceControl, { size: 22 }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hover:text-white transition-colors cursor-pointer", children: /* @__PURE__ */ jsx(VscSettingsGear, { size: 20 }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-44 bg-[#252526] border-r border-[#1e1e1e] p-3 hidden sm:flex flex-col shrink-0 select-none text-gray-400 font-sans", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3", children: "Explorer" }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-200 font-semibold text-xs mb-1 truncate", children: "📁 PORTFOLIO-DAVID" }),
          /* @__PURE__ */ jsxs("div", { className: "pl-3 space-y-1.5 text-xs", children: [
            /* @__PURE__ */ jsx("div", { className: "text-gray-400 truncate", children: "📁 src/components" }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-400 truncate", children: "📁 src/pages/api" }),
            /* @__PURE__ */ jsxs("div", { className: "text-blue-400 font-medium bg-[#37373d]/50 px-1.5 py-0.5 rounded flex items-center gap-1 cursor-pointer truncate", children: [
              /* @__PURE__ */ jsx("span", { children: "🔵" }),
              " profile.ts"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-500 truncate", children: "⚙️ astro.config.mjs" }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-500 truncate", children: "📦 package.json" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-[#1e1e1e] flex flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-[#2d2d2d] h-8 flex items-center px-3 border-b border-[#1e1e1e] shrink-0 select-none", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#1e1e1e] text-gray-200 h-full px-4 flex items-center border-t border-blue-500 text-xs font-sans gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-bold", children: "TS" }),
            " profile.ts"
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 overflow-y-auto flex-1 font-mono text-xs leading-relaxed text-gray-300 antialiased selection:bg-blue-500/30", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-gray-600 text-right select-none pr-1 space-y-0.5 font-sans text-[11px]", children: [
              /* @__PURE__ */ jsx("div", { children: "1" }),
              /* @__PURE__ */ jsx("div", { children: "2" }),
              /* @__PURE__ */ jsx("div", { children: "3" }),
              /* @__PURE__ */ jsx("div", { children: "4" }),
              /* @__PURE__ */ jsx("div", { children: "5" }),
              /* @__PURE__ */ jsx("div", { children: "6" }),
              /* @__PURE__ */ jsx("div", { children: "7" }),
              /* @__PURE__ */ jsx("div", { children: "8" }),
              /* @__PURE__ */ jsx("div", { children: "9" }),
              /* @__PURE__ */ jsx("div", { children: "10" }),
              /* @__PURE__ */ jsx("div", { children: "11" }),
              /* @__PURE__ */ jsx("div", { children: "12" }),
              /* @__PURE__ */ jsx("div", { children: "13" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "whitespace-pre font-mono tracking-wide overflow-x-auto w-full space-y-0.5", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: "export const" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-blue-300", children: "developer" }),
                " = ",
                "{"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "  name: ",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'David'" }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "  role: ",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'Cybersecurity & Full Stack'" }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "  tools: [",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'Astro'" }),
                ", ",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'React'" }),
                ", ",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'Node'" }),
                ", ",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'Python'" }),
                "],"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "  security: ",
                "{"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "    testing: [",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'Pentesting'" }),
                ", ",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'OWASP'" }),
                ", ",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'Kali Linux'" }),
                "],"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "    scanners: [",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'Nmap'" }),
                ", ",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'Burp Suite'" }),
                "]"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "  ",
                "}",
                ","
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "  status: ",
                /* @__PURE__ */ jsx("span", { className: "text-orange-300", children: "'Building secure systems'" }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "  motto: () ",
                /* @__PURE__ */ jsxs("span", { className: "text-purple-400", children: [
                  "=",
                  ">"
                ] }),
                " ",
                "{"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "    ",
                /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: "return" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-green-300", children: "`Code fast, patch faster.`" }),
                ";"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "  ",
                "}"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "}",
                ";"
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
}

function Desktop({ initialBg, backgroundMap }) {
  const [currentBg, setCurrentBg] = useState(initialBg);
  useEffect(() => {
    const lastBg = localStorage.getItem("lastBackground");
    if (lastBg === initialBg) {
      const bgKeys = Object.keys(backgroundMap);
      const availableBgs = bgKeys.filter((bg) => bg !== lastBg);
      const newBg = availableBgs[Math.floor(Math.random() * availableBgs.length)];
      setCurrentBg(newBg);
    }
    localStorage.setItem("lastBackground", currentBg);
  }, [initialBg, backgroundMap]);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-screen h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center",
        style: { backgroundImage: `url(${backgroundMap[currentBg]})` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsx(MacToolbar, {}) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-0 flex items-center justify-center h-[calc(100vh-10rem)] md:h-[calc(100vh-1.5rem)] pt-6", children: /* @__PURE__ */ jsx(MacTerminal, {}) }),
    /* @__PURE__ */ jsx(MobileDock, {}),
    /* @__PURE__ */ jsx(DesktopDock, {})
  ] });
}

const $$LandingPage = createComponent(async ($$result, $$props, $$slots) => {
  const backgroundMap = {
    "bg-1": "/images/mac-background1.jpg",
    "bg-2": "/images/mac-background2.jpg",
    "bg-3": "/images/mac-background3.jpg"
  };
  await Promise.all(
    backgrounds.map(
      (bg) => getImage({
        src: bg,
        width: 3500
      })
    )
  );
  return renderTemplate`${renderComponent($$result, "AppLayout", Desktop, { "client:load": true, "initialBg": getRandomBackground(), "backgroundMap": backgroundMap, "client:component-hydration": "load", "client:component-path": "/home/fedora-david/Portfolio/macos-terminal-portfolio/src/layouts/AppLayout", "client:component-export": "default" })}`;
}, "/home/fedora-david/Portfolio/macos-terminal-portfolio/src/components/LandingPage.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 
  Customize these values for your portfolio:
  - title: Your name and role
  - description: Brief description of your expertise
  - canonical: Your website URL
  - openGraph: Social media sharing metadata
-->${renderComponent($$result, "Layout", $$Layout, { "title": "David OrtegaDorado", "description": "I am a Full Stack developer with experience in React, Next.js, Fastify Node.js, SupaBase, Prisma ORM, Railways among other tools. I am also certified in the IFCT0046 training specialty in cybersecurity and cyber intelligence, managing systems such as Kali Linux, SIEM, security regulations like ISO 27001 and MAGERIT, audits with Sguil, using BurpSuite to monitor endpoints...", "canonical": "https://ortegadorado.com", "openGraph": {
    url: "https://ortegadorado.com",
    title: "David OrtegaDorado",
    description: "I am a Full Stack developer with experience in React, Next.js, Fastify Node.js, SupaBase, Prisma ORM, Railways among other tools. I am also certified in the IFCT0046 training specialty in cybersecurity and cyber intelligence, managing systems such as Kali Linux, SIEM, security regulations like ISO 27001 and MAGERIT, audits with Sguil, using BurpSuite to monitor endpoints...",
    site_name: "David Ortega Dorado"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingPage", $$LandingPage, {})} ` })}`;
}, "/home/fedora-david/Portfolio/macos-terminal-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/fedora-david/Portfolio/macos-terminal-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
