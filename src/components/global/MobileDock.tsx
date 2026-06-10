import { useState } from 'react';
import { BsGithub, BsTelegram } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoDocumentText, IoClose, IoOpenOutline, IoFolderOutline, IoLogoPython, IoCodeSlash } from 'react-icons/io5'; 
import { RiAwardLine } from 'react-icons/ri';

export default function MobileDock() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); 
  const [isFinderOpen, setIsFinderOpen] = useState(false); 
  const [activeDoc, setActiveDoc] = useState<'cv' | 'johandeere'>('cv'); 

  const handleEmailClick = () => {
    window.location.href = 'mailto:ortegadorado1@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/david-rtd', '_blank');
  };

  // --- MATRIZ DE PROYECTOS SINCRONIZADA CON ESCRITORIO (CON IMÁGENES) ---
  const projects = [
    {
      name: "HoneyDog",
      description: "SSH Honeypot interactivo con arquitectura multihilo. Captura intentos de intrusión por fuerza bruta, simula un entorno GNU/Linux controlado y audita comandos enviando alertas push en tiempo real vía Telegram API.",
      tag: 'Cybersecurity',
      url: "https://github.com/david-rtd/honeydog",
      icon: <IoLogoPython size={22} className="text-yellow-500" />,
      image: "/images/honeydog-banner.png" 
    },
    {
      name: 'DogLog',
      description: 'Linux Log Watchdog & Incident Response (IDS) en Python con alertas de Telegram.',
      tag: 'Cybersecurity',
      url: 'https://github.com/david-rtd/doglog',
      icon: <IoLogoPython size={22} className="text-yellow-500" />,
      image: "/images/doglog-banner.png"
    },
    {
      name: 'Portfolio',
      description: 'Portfolio web interactivo con diseño e interfaz de entorno de escritorio macOS.',
      tag: 'Full-Stack',
      url: 'https://github.com/david-rtd/portfolio', 
      icon: <IoCodeSlash size={22} className="text-blue-400" />,
      image: "/images/favi.png"
    }
  ];

  return (
    <>
      {/* --- DOCK MÓVIL --- */}
      <div className='fixed bottom-0 left-0 right-0 md:hidden z-40'>
        <div className='mx-4 mb-4 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-xl rounded-3xl flex justify-around items-center max-w-[400px] mx-auto shadow-2xl border border-white/10'>
          {/* Telegram */}
          <a 
            href='https://t.me/davidrtd' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='flex flex-col items-center'
          >
            <div className='w-14 h-14 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-md'>
              <BsTelegram size={36} className='text-white' />
            </div>
          </a>

          {/* Email */}
          <button
            onClick={handleEmailClick}
            className='flex flex-col items-center cursor-pointer'
          >
            <div className='w-14 h-14 bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-md'>
              <IoIosMail size={40} className='text-white' />
            </div>
          </button>

          {/* GitHub */}
          <button
            onClick={handleGithubClick}
            className='flex flex-col items-center cursor-pointer'
          >
            <div className='w-14 h-14 bg-gradient-to-t from-black to-black/60 rounded-2xl flex items-center justify-center shadow-md'>
              <BsGithub size={36} className='text-white' />
            </div>
          </button>

          {/* Finder */}
          <button
            onClick={() => setIsFinderOpen(true)}
            className='flex flex-col items-center cursor-pointer'
          >
            <div className='w-14 h-14 bg-gradient-to-t from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center shadow-md border border-white/5'>
              <IoFolderOutline size={36} className='text-blue-600' />
            </div>
          </button>

          {/* Visor de Documentos */}
          <button
            onClick={() => setIsPreviewOpen(true)}
            className='flex flex-col items-center cursor-pointer'
          >
            <div className='w-14 h-14 bg-gradient-to-t from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center shadow-md'>
              <IoDocumentText size={34} className='text-white' />
            </div>
          </button>
        </div>
      </div>

      {/* --- MODAL MÓVIL: FINDER / PROYECTOS --- */}
      {isFinderOpen && (
        <div className='fixed inset-0 bg-[#121212] z-50 flex flex-col font-sans text-white'>
          
          {/* Cabecera Finder Móvil */}
          <div className='bg-[#1e1e1e] h-14 flex items-center justify-between px-4 border-b border-gray-800 shrink-0'>
            <button 
              onClick={() => setIsFinderOpen(false)} 
              className='p-2 rounded-full bg-gray-800 hover:bg-gray-700 active:scale-95 transition-all text-gray-400 hover:text-white'
            >
              <IoClose size={20} />
            </button>
            
            <span className='text-sm font-semibold tracking-wide'>Finder — Proyectos</span>
            
            <button 
              onClick={handleGithubClick}
              className='p-2 rounded-full bg-gray-800 text-gray-300 active:scale-95 transition-all'
              title="Open GitHub"
            >
              <BsGithub size={18} />
            </button>
          </div>

          {/* Lista de repositorios táctil */}
          <div className='flex-1 overflow-y-auto p-4 space-y-4 bg-[#121212] pb-24'>
            <div className='text-xs font-bold text-gray-500 uppercase tracking-wider pl-1 select-none'>
              Repositorios ({projects.length})
            </div>
            
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => window.open(project.url, '_blank')}
                className='bg-[#1e1e1e] border border-gray-800 rounded-2xl active:bg-[#252526] active:border-gray-700 transition-all shadow-md flex flex-col justify-between overflow-hidden'
              >
                <div>
                  {/* Cabecera de la tarjeta con padding interno */}
                  <div className='p-4 pb-2'>
                    <div className='flex items-center justify-between mb-2.5'>
                      <div className='flex items-center gap-2 font-mono text-base font-bold text-blue-400 min-h-[24px]'>
                        {project.icon ? project.icon : <span>🐾</span>}
                        {project.name}
                      </div>
                      <span className='text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#2a2a2b] text-gray-400 border border-gray-800 shrink-0'>
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* --- BLOQUE DE IMAGEN AJUSTADO PARA MÓVIL --- */}
                  {project.image && (
                    <div className="w-full h-28 bg-[#252526]/40 flex items-center justify-center border-y border-gray-800/60 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-contain scale-[1.5] active:scale-[1.6] transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Descripción con padding interno */}
                  <div className='p-4 pt-3'>
                    <p className='text-xs text-gray-400 leading-relaxed font-sans'>
                      {project.description}
                    </p>
                  </div>
                </div>
                
                {/* Enlace inferior */}
                <div className='text-xs text-blue-500 font-medium px-4 pb-4 flex items-center gap-1 font-sans mt-auto select-none'>
                  Abrir en GitHub <IoOpenOutline size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- MODAL MÓVIL PANTALLA COMPLETA: PREVIEW --- */}
      {isPreviewOpen && (
        <div className='fixed inset-0 bg-[#121212] z-50 flex flex-col font-sans text-white'>
          <div className='bg-[#1e1e1e] h-14 flex items-center justify-between px-4 border-b border-gray-800 shrink-0'>
            <button 
              onClick={() => setIsPreviewOpen(false)} 
              className='p-2 rounded-full bg-gray-800 hover:bg-gray-700 active:scale-95 transition-all text-gray-400 hover:text-white'
            >
              <IoClose size={20} />
            </button>
            
            <span className='text-sm font-semibold tracking-wide'>Preview.app</span>
            
            <button 
              onClick={() => window.open(activeDoc === 'cv' ? '/cv-david.pdf' : '/carta-john-deere.pdf', '_blank')}
              className='p-2 rounded-full bg-blue-600/20 text-blue-400 active:scale-95 transition-all'
              title="Open full PDF"
            >
              <IoOpenOutline size={18} />
            </button>
          </div>

          <div className='bg-[#1a1a1a] p-2 flex border-b border-gray-900 shrink-0 gap-2'>
            <button
              onClick={() => setActiveDoc('cv')}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border ${activeDoc === 'cv' ? 'bg-[#3c3c3e] border-gray-600 text-white shadow' : 'bg-transparent border-transparent text-gray-500'}`}
            >
              <IoDocumentText size={16} className={activeDoc === 'cv' ? 'text-orange-400' : ''} />
              Curriculum
            </button>
            <button
              onClick={() => setActiveDoc('johandeere')}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border ${activeDoc === 'johandeere' ? 'bg-[#3c3c3e] border-gray-600 text-white shadow' : 'bg-transparent border-transparent text-gray-500'}`}
            >
              <RiAwardLine size={16} className={activeDoc === 'johandeere' ? 'text-yellow-400' : ''} />
              John Deere
            </button>
          </div>

          <div className='flex-1 bg-[#121212] overflow-hidden relative'>
            {activeDoc === 'cv' ? (
              <iframe 
                src="/cv-david.pdf#toolbar=0&navpanes=0" 
                className='w-full h-full border-0 bg-[#121212]'
                title="David CV Mobile"
              />
            ) : (
              <iframe 
                src="/carta-john-deere.pdf#toolbar=0&navpanes=0" 
                className='w-full h-full border-0 bg-[#121212]'
                title="John Deere Letter Mobile"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
