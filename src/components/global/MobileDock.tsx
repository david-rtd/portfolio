import { useState } from 'react';
import { BsGithub, BsSpotify, BsTelegram } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoDocumentText, IoClose, IoOpenOutline } from 'react-icons/io5'; 
import { RiAwardLine } from 'react-icons/ri';

export default function MobileDock() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); // <-- Estado para el modal móvil
  const [activeDoc, setActiveDoc] = useState<'cv' | 'johndeere'>('cv'); // <-- Alternador de documento activo

  const handleEmailClick = () => {
    window.location.href = 'mailto:ortegadorado1@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/david-rtd', '_blank');
  };

  const handleSpotifyClick = () => {
    window.open('https://open.spotify.com', '_blank');
  };

  return (
    <>
      {/* --- DOCK MÓVIL --- */}
      <div className='fixed bottom-0 left-0 right-0 md:hidden z-40'>
        <div className='mx-4 mb-4 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-xl rounded-3xl flex justify-around items-center max-w-[400px] mx-auto shadow-2xl'>
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

          {/* Visor de Documentos (Modificado para abrir el modal interno) */}
          <button
            onClick={() => setIsPreviewOpen(true)}
            className='flex flex-col items-center cursor-pointer'
          >
            <div className='w-14 h-14 bg-gradient-to-t from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center shadow-md'>
              <IoDocumentText size={34} className='text-white' />
            </div>
          </button>

          {/* Spotify */}
          <button
            onClick={handleSpotifyClick}
            className='flex flex-col items-center cursor-pointer'
          >
            <div className='w-14 h-14 bg-gradient-to-t from-black to-black/60 rounded-2xl flex items-center justify-center shadow-md'>
              <BsSpotify size={36} className='text-[#1ED760]' />
            </div>
          </button>
        </div>
      </div>

      {/* --- MODAL MÓVIL PANTALLA COMPLETA: PREVIEW --- */}
      {isPreviewOpen && (
        <div className='fixed inset-0 bg-[#121212] z-50 flex flex-col font-sans text-white animate-fade-in'>
          
          {/* Cabecera táctil estilo iOS/macOS */}
          <div className='bg-[#1e1e1e] h-14 flex items-center justify-between px-4 border-b border-gray-800 shrink-0'>
            <button 
              onClick={() => setIsPreviewOpen(false)} 
              className='p-2 rounded-full bg-gray-800 hover:bg-gray-700 active:scale-95 transition-all text-gray-400 hover:text-white'
            >
              <IoClose size={20} />
            </button>
            
            <span className='text-sm font-semibold tracking-wide'>Preview.app</span>
            
            {/* Botón para abrir el PDF nativo en el navegador móvil por si quieren descargarlo */}
            <button 
              onClick={() => window.open(activeDoc === 'cv' ? '/cv-david.pdf' : '/carta-john-deere.pdf', '_blank')}
              className='p-2 rounded-full bg-blue-600/20 text-blue-400 active:scale-95 transition-all'
              title="Open full PDF"
            >
              <IoOpenOutline size={18} />
            </button>
          </div>

          {/* Selector de pestañas optimizado para dedos */}
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

          {/* Contenedor del documento táctil */}
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
