import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoDocumentText, IoClose, IoFolderOutline, IoLogoPython, IoCodeSlash } from 'react-icons/io5';
import { VscVscode, VscFiles, VscSettingsGear, VscSourceControl, VscFolderActive } from 'react-icons/vsc'; 
import { RiTerminalFill, RiAwardLine } from 'react-icons/ri'; 

export default function DesktopDock() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isVSCodeOpen, setIsVSCodeOpen] = useState(false); 
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); 
  const [isFinderOpen, setIsFinderOpen] = useState(false); 
  const [activeDoc, setActiveDoc] = useState<'cv' | 'johndeere'>('cv'); 

  const handleEmailClick = () => {
    window.location.href = 'mailto:ortegadorado1@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/david-rtd', '_blank');
  };

  // --- MATRIZ DE PROYECTOS ACTUALIZADA CON IMÁGENES ---
  const projects = [
    {
      name: "HoneyDog",
      description: "SSH Honeypot interactivo con arquitectura multihilo. Captura intentos de intrusión por fuerza bruta, simula un entorno GNU/Linux controlado y audita comandos enviando alertas push en tiempo real vía Telegram API.",
      tag: 'Cybersecurity',
      url: "https://github.com/david-rtd/honeydog",
      icon: <IoLogoPython size={20} className="text-yellow-500" />,
      image: "/images/honeydog-banner.png" 
    },
    {
      name: 'DogLog',
      description: 'Linux Log Watchdog & Incident Response (IDS) en Python con alertas de Telegram.',
      tag: 'Cybersecurity',
      url: 'https://github.com/david-rtd/doglog', 
      icon: <IoLogoPython size={20} className="text-yellow-500" />,
      image: "/images/doglog-banner.png" // Añade aquí tu PNG para doglog
    },
    {
      name: 'Portfolio',
      description: 'Portfolio web interactivo con diseño e interfaz de entorno de escritorio macOS.',
      tag: 'Full-Stack',
      url: 'https://github.com/david-rtd/portfolio', 
      icon: <IoCodeSlash size={20} className="text-blue-400" />,
      image: "/images/favi.png" // Añade aquí tu PNG para el portfolio
    }
  ];

  const routine = [
    { time: '08:00 - 10:00', activity: '☕ Cyber Threat Intelligence / Coffee', color: 'bg-amber-500/20 border-amber-500 text-amber-300' },
    { time: '10:00 - 13:30', activity: '💻 Full Stack Dev (Astro / Node.js)', color: 'bg-blue-500/20 border-blue-500 text-blue-300' },
    { time: '13:30 - 15:00', activity: '🍱 Lunch & AFK', color: 'bg-gray-500/20 border-gray-500 text-gray-400' },
    { time: '15:00 - 18:00', activity: '🛡️ Pentesting & OWASP Audits (Burp Suite)', color: 'bg-red-500/20 border-red-500 text-red-300' },
    { time: '18:00 - 20:00', activity: '🏋️ Workout / Open Source Contributions', color: 'bg-green-500/20 border-green-500 text-green-300' },
  ];

  const Tooltip = ({ text }: { text: string }) => (
    <div className='absolute -top-14 left-1/2 -translate-x-1/2 z-50'>
      <div className='relative px-3 py-1 bg-[#1d1d1f]/80 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap border border-px border-gray-600'>
        {text}
        <div className='absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3 h-3 bg-[#1d1d1f]/80 backdrop-blur-sm rotate-45 border-b border-r border-gray-600' />
      </div>
    </div>
  );

  return (
    <>
      {/* --- DOCK PRINCIPAL --- */}
      <div className='fixed bottom-0 left-1/2 -translate-x-1/2 hidden md:block z-50'>
        <div className='relative mb-2 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-2xl rounded-2xl'>
          <div className='flex items-end space-x-4'>
            {/* VSCode */}
            <button
              onClick={() => setIsVSCodeOpen(true)}
              onMouseEnter={() => setHoveredIcon('vscode')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg'>
                <VscVscode size={45} className='text-blue-500' />
              </div>
              {hoveredIcon === 'vscode' && <Tooltip text='Open Project Code' />}
            </button>

            {/* Email */}
            <button
              onClick={handleEmailClick}
              onMouseEnter={() => setHoveredIcon('email')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg'>
                <IoIosMail size={45} className='text-white' />
              </div>
              {hoveredIcon === 'email' && <Tooltip text='Email Me' />}
            </button>

            {/* Github */}
            <button
              onClick={handleGithubClick}
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg'>
                <BsGithub size={45} className='text-gray-100' />
              </div>
              {hoveredIcon === 'github' && <Tooltip text='My GitHub Profile' />}
            </button>

            {/* Finder */}
            <button
              onClick={() => setIsFinderOpen(true)}
              onMouseEnter={() => setHoveredIcon('finder')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-gradient-to-t from-gray-200 to-gray-400 rounded-xl flex items-center justify-center shadow-lg border border-white/10'>
                <IoFolderOutline size={45} className='text-blue-600' />
              </div>
              {hoveredIcon === 'finder' && <Tooltip text='Projects Explorer' />}
            </button>

            {/* Visor de Documentos */}
            <button
              onClick={() => setIsPreviewOpen(true)}
              onMouseEnter={() => setHoveredIcon('cv')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 bg-gradient-to-t from-orange-500 to-amber-400 rounded-xl flex items-center justify-center shadow-lg'>
                <IoDocumentText size={42} className='text-white' />
              </div>
              {hoveredIcon === 'cv' && <Tooltip text='Credentials & Experience' />}
            </button>

            {/* Calendar */}
            <button
              onClick={() => setIsCalendarOpen(true)}
              onMouseEnter={() => setHoveredIcon('calendar')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 overflow-hidden shadow-lg relative rounded-xl'>
                <div className='absolute inset-0 bg-gradient-to-b from-white to-gray-200 rounded-xl'></div>
                <div className='absolute top-0 inset-x-0 h-5 bg-red-500 flex items-center justify-center rounded-t-xl'>
                  <span className='text-xs font-semibold text-white uppercase'>
                    {new Date().toLocaleString('en-US', { month: 'short' })}
                  </span>
                </div>
                <div className='absolute inset-0 flex items-end justify-center'>
                  <span className='text-3xl font-light text-black'>
                    {new Date().getDate()}
                  </span>
                </div>
              </div>
              {hoveredIcon === 'calendar' && <Tooltip text='View My Routine' />}
            </button>

            {/* Divider */}
            <div className='flex items-center'>
              <div className='w-px h-14 bg-white/20' />
            </div>

            {/* Terminal */}
            <button
              onMouseEnter={() => setHoveredIcon('terminal')}
              onMouseLeave={() => setHoveredIcon(null)}
              className='relative'
            >
              <div className='w-14 h-14 rounded-2xl overflow-hidden shadow-lg relative'>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-500 rounded-xl'></div>
                <div className='absolute inset-[2px] rounded-xl bg-black'>
                  <div className='absolute top-1 left-2'>
                    <RiTerminalFill size={20} className='text-white' />
                  </div>
                </div>
              </div>
              {hoveredIcon === 'terminal' && <Tooltip text='Terminal' />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL: FINDER --- */}
      {isFinderOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-200'>
          <div className='bg-[#1e1e1e] border border-gray-700 w-full max-w-4xl h-[520px] rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-white transform-gpu transition-transform duration-200'>
            
            {/* Barra superior de la ventana */}
            <div className='bg-[#2d2d2d] h-10 flex items-center justify-between px-4 border-b border-gray-800 select-none shrink-0'>
              <div className='flex items-center space-x-2'>
                <button 
                  onClick={() => setIsFinderOpen(false)} 
                  className='w-3 h-3 rounded-full bg-red-500 flex items-center justify-center group hover:bg-red-600 transition-colors'
                >
                  <IoClose size={8} className='text-black/70 opacity-0 group-hover:opacity-100' />
                </button>
                <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
              </div>
              <span className='text-xs font-medium text-gray-400'>Finder.app — Proyectos GitHub</span>
              <div className='w-14'></div>
            </div>

            <div className='flex flex-1 overflow-hidden w-full'>
              {/* Barra lateral izquierda */}
              <div className='w-40 bg-[#252526] p-3 hidden sm:flex flex-col shrink-0 border-r border-gray-800 select-none text-gray-400'>
                <span className='text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3'>Favoritos</span>
                <div className='text-gray-200 font-medium text-xs px-2 py-1.5 bg-[#37373d]/50 rounded-lg flex items-center gap-2'>
                  <VscFolderActive className="text-blue-500" size={16} /> Proyectos
                </div>
                <div onClick={handleGithubClick} className='text-gray-400 font-medium text-xs px-2 py-1.5 hover:bg-[#37373d]/30 rounded-lg flex items-center gap-2 mt-1 cursor-pointer transition-colors'>
                  <BsGithub size={14} /> Ir a GitHub
                </div>
              </div>

              {/* Contenedor Grid Principal */}
              <div className='flex-1 bg-[#1e1e1e] p-5 overflow-y-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 h-full content-start'>
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      onClick={() => window.open(project.url, '_blank')}
                      className='bg-[#2d2d2d] border border-gray-700/60 rounded-xl hover:border-blue-500/70 hover:bg-[#333334] transition-all cursor-pointer group flex flex-col justify-between shadow-sm overflow-hidden h-full'
                    >
                      <div className="flex flex-col h-full">
                        {/* Cabecera del proyecto */}
                        <div className="p-4 pb-2">
                          <div className='flex items-center justify-between mb-2'>
                            <div className='flex items-center gap-2 font-mono text-sm font-semibold text-blue-400 group-hover:text-blue-300 min-h-[24px]'>
                              {project.icon ? project.icon : <span>🐾</span>}
                              {project.name}
                            </div>
                            <span className='text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1a1a1a] text-gray-400 border border-gray-700 shrink-0'>
                              {project.tag}
                            </span>
                          </div>
                        </div>

                        {/* Contenedor visual integrado */}
			{project.image && (
			  // 1. Dejamos el contenedor base con una altura fija controlada (ej. h-32)
			  <div className="w-full h-23 bg-[#252526]/40 flex items-center justify-center border-y border-gray-700/30 overflow-hidden relative">
			    
			    {/* 2. Escalamos la imagen directamente (ej. scale-150 para un 50% más grande o scale-[1.8] para más) */}
			    <img 
			      src={project.image} 
			      alt={project.name} 
			      className="w-full h-full object-contain scale-[1.4] group-hover:scale-[1.55] transition-transform duration-300"
			    />

			  </div>
			)}

                        {/* Descripción corta */}
                        <div className="p-4 pt-2 flex-1">
                          <p className='text-xs text-gray-400 font-sans leading-relaxed line-clamp-5'>
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Enlace inferior */}
                      <div className='text-[10px] text-blue-500 font-medium px-4 pb-4 pt-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-sans mt-auto select-none'>
                        Ver repositorio externo {'➔'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* --- MODAL: CALENDARIO DE RUTINA --- */}
      {isCalendarOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-200'>
          <div className='bg-[#1e1e1e] border border-gray-700 w-full max-w-lg rounded-xl overflow-hidden shadow-2xl text-white font-sans transform-gpu scale-100 transition-transform duration-200'>
            <div className='bg-[#2d2d2d] h-9 flex items-center justify-between px-4 border-b border-gray-800'>
              <div className='flex items-center space-x-2'>
                <button onClick={() => setIsCalendarOpen(false)} className='w-3 h-3 rounded-full bg-red-500 flex items-center justify-center group hover:bg-red-600 transition-colors'>
                  <IoClose size={8} className='text-black/70 opacity-0 group-hover:opacity-100' />
                </button>
                <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
              </div>
              <span className='text-xs font-medium text-gray-400 select-none'>Calendar.app — Routine</span>
              <div className='w-14'></div>
            </div>
            <div className='p-5 font-sans'>
              <div className='flex items-center justify-between mb-4 border-b border-gray-800 pb-2 select-none'>
                <h3 className='text-lg font-bold tracking-wide text-red-400 uppercase'>
                  {new Date().toLocaleString('es-ES', { weekday: 'long', month: 'long', day: 'numeric' })}
                </h3>
                <span className='text-xs px-2 py-0.5 bg-gray-800 text-gray-400 rounded-md border border-gray-700'>📍 Local Time</span>
              </div>
              <div className='space-y-3 max-h-[280px] overflow-y-auto pr-1'>
                {routine.map((item, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 border shadow-sm ${item.color}`}>
                    <div className='text-[11px] font-semibold opacity-80 uppercase tracking-wider mb-0.5 select-none'>{item.time}</div>
                    <div className='text-sm font-medium tracking-wide select-none'>{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL: PREVIEW.APP --- */}
      {isPreviewOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-200'>
          <div className='bg-[#1e1e1e] border border-gray-700 w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans text-white transform-gpu transition-transform duration-200'>
            <div className='bg-[#2d2d2d] h-10 flex items-center justify-between px-4 border-b border-gray-800 select-none shrink-0'>
              <div className='flex items-center space-x-2'>
                <button 
                  onClick={() => setIsPreviewOpen(false)} 
                  className='w-3 h-3 rounded-full bg-red-500 flex items-center justify-center group hover:bg-red-600 transition-colors'
                >
                  <IoClose size={8} className='text-black/70 opacity-0 group-hover:opacity-100' />
                </button>
                <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
              </div>
              
              <div className='flex space-x-1 bg-[#1a1a1a] p-1 rounded-lg border border-gray-800'>
                <button
                  onClick={() => setActiveDoc('cv')}
                  className={`px-4 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${activeDoc === 'cv' ? 'bg-[#3c3c3e] text-white shadow' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  <IoDocumentText size={14} className={activeDoc === 'cv' ? 'text-orange-400' : ''} />
                  Curriculum Vitae
                </button>
                <button
                  onClick={() => setActiveDoc('johndeere')}
                  className={`px-4 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${activeDoc === 'johndeere' ? 'bg-[#3c3c3e] text-white shadow' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  <RiAwardLine size={14} className={activeDoc === 'johndeere' ? 'text-yellow-400' : ''} />
                  Letter of Recommendation (John Deere)
                </button>
              </div>

              <span className='text-xs text-gray-500 font-normal hidden sm:inline'>Preview.app</span>
            </div>

            <div className='flex-1 bg-[#121212] p-2 relative'>
              {activeDoc === 'cv' ? (
                <iframe 
                  src="/cv-david.pdf#toolbar=0&navpanes=0" 
                  className='w-full h-full rounded-lg border-0 bg-[#121212]'
                  title="David CV"
                />
              ) : (
                <iframe 
                  src="/carta-john-deere.pdf#toolbar=0&navpanes=0" 
                  className='w-full h-full rounded-lg border-0 bg-[#121212]'
                  title="John Deere Recommendation Letter"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL: SIMULADOR DE VS CODE --- */}
      {isVSCodeOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-200'>
          <div className='bg-[#1e1e1e] border border-gray-700 w-full max-w-2xl h-[450px] rounded-xl overflow-hidden shadow-2xl flex flex-col font-mono text-xs text-gray-300 transform-gpu transition-transform duration-200'>
            <div className='bg-[#323233] h-9 flex items-center justify-between px-4 border-b border-[#252526] select-none shrink-0'>
              <div className='flex items-center space-x-2'>
                <button 
                  onClick={() => setIsVSCodeOpen(false)} 
                  className='w-3 h-3 rounded-full bg-red-500 flex items-center justify-center group hover:bg-red-600 transition-colors'>
                  <IoClose size={8} className='text-black/70 opacity-0 group-hover:opacity-100' />
                </button>
                <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
              </div>
              <span className='text-xs text-gray-400 font-sans'>portfolio-david — profile.ts — Visual Studio Code</span>
              <div className='w-14'></div>
            </div>

            <div className='flex flex-1 overflow-hidden w-full'>
              <div className='w-12 bg-[#333333] border-r border-[#252526] flex flex-col items-center justify-between py-4 text-gray-400 shrink-0 select-none'>
                <div className='flex flex-col items-center space-y-6 w-full'>
                  <div className='text-white border-l-2 border-blue-500 w-full flex justify-center py-0.5 cursor-pointer'><VscFiles size={22} /></div>
                  <div className='hover:text-white transition-colors cursor-pointer'><VscSourceControl size={22} /></div>
                </div>
                <div className='hover:text-white transition-colors cursor-pointer'><VscSettingsGear size={20} /></div>
              </div>

              <div className='w-44 bg-[#252526] border-r border-[#1e1e1e] p-3 hidden sm:flex flex-col shrink-0 select-none text-gray-400 font-sans'>
                <span className='text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3'>Explorer</span>
                <div className='text-gray-200 font-semibold text-xs mb-1 truncate'>📁 PORTFOLIO-DAVID</div>
                <div className='pl-3 space-y-1.5 text-xs'>
                  <div className='text-gray-400 truncate'>📁 src/components</div>
                  <div className='text-gray-400 truncate'>📁 src/pages/api</div>
                  <div className='text-blue-400 font-medium bg-[#37373d]/50 px-1.5 py-0.5 rounded flex items-center gap-1 cursor-pointer truncate'>
                    <span>🔵</span> profile.ts
                  </div>
                  <div className='text-gray-500 truncate'>⚙️ astro.config.mjs</div>
                  <div className='text-gray-500 truncate'>📦 package.json</div>
                </div>
              </div>

              <div className='flex-1 bg-[#1e1e1e] flex flex-col overflow-hidden'>
                <div className='bg-[#2d2d2d] h-8 flex items-center px-3 border-b border-[#1e1e1e] shrink-0 select-none'>
                  <div className='bg-[#1e1e1e] text-gray-200 h-full px-4 flex items-center border-t border-blue-500 text-xs font-sans gap-2'>
                    <span className='text-blue-400 font-bold'>TS</span> profile.ts
                  </div>
                </div>

                <div className='p-4 overflow-y-auto flex-1 font-mono text-xs leading-relaxed text-gray-300 antialiased selection:bg-blue-500/30'>
                  <div className='flex space-x-4'>
                    <div className='text-gray-600 text-right select-none pr-1 space-y-0.5 font-sans text-[11px]'>
                      <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div>
                    </div>
                    <div className='whitespace-pre font-mono tracking-wide overflow-x-auto w-full space-y-0.5'>
                      <div><span className='text-purple-400'>export const</span> <span className='text-blue-300'>developer</span> = {'{'}</div>
                      <div>  name: <span className='text-orange-300'>'David'</span>,</div>
                      <div>  role: <span className='text-orange-300'>'Cybersecurity & Full Stack'</span>,</div>
                      <div>  tools: [<span className='text-orange-300'>'Astro'</span>, <span className='text-orange-300'>'React'</span>, <span className='text-orange-300'>'Node'</span>, <span className='text-orange-300'>'Python'</span>],</div>
                      <div>  security: {'{'}</div>
                      <div>    testing: [<span className='text-orange-300'>'Pentesting'</span>, <span className='text-orange-300'>'OWASP'</span>, <span className='text-orange-300'>'Kali Linux'</span>],</div>
                      <div>    scanners: [<span className='text-orange-300'>'Nmap'</span>, <span className='text-orange-300'>'Burp Suite'</span>]</div>
                      <div>  {'}'},</div>
                      <div>  status: <span className='text-orange-300'>'Building secure systems'</span>,</div>
                      <div>  motto: () <span className='text-purple-400'>={'>'}</span> {'{'}</div>
                      <div>    <span className='text-purple-400'>return</span> <span className='text-green-300'>`Code fast, patch faster.`</span>;</div>
                      <div>  {'}'}</div>
                      <div>{'}'};</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
