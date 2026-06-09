import { BsGithub, BsSpotify } from 'react-icons/bs';
import { IoIosMail, IoIosCall } from 'react-icons/io';
import { BsTelegram } from 'react-icons/bs';
import { IoDocumentText } from 'react-icons/io5'; 

export default function MobileDock() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ortegadorado1@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/david-rtd', '_blank');
  };

  const handleSpotifyClick = () => {
    window.open('https://open.spotify.com', '_blank');
  };

  // Nueva función para el click en móviles
  const handleCVClick = () => {
    window.open('/cv-david.pdf', '_blank');
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 md:hidden z-50'>
      <div className='mx-4 mb-4 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-xl rounded-3xl flex justify-around items-center max-w-[400px] mx-auto'>
        {/* Telegram Instantáneo */}
	<a 
	  href='https://t.me/davidrtd' 
	  target='_blank' 
	  rel='noopener noreferrer' 
	  className='flex flex-col items-center'>
	  <div className='w-18 h-18 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center'>
	    <BsTelegram size={55} className='text-white' />
	  </div>
	</a>

        {/* Email */}
        <button
          onClick={handleEmailClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center'>
            <IoIosMail size={60} className='text-white' />
          </div>
        </button>

        {/* GitHub */}
        <button
          onClick={handleGithubClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-gradient-to-t from-black to-black/60 rounded-2xl flex items-center justify-center'>
            <BsGithub size={55} className='text-white' />
          </div>
        </button>

        {/* Currículum (CV) */}
        <button
          onClick={handleCVClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-gradient-to-t from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center'>
            <IoDocumentText size={52} className='text-white' />
          </div>
        </button>

        {/* Spotify */}
        <button
          onClick={handleSpotifyClick}
          className='flex flex-col items-center cursor-pointer'
        >
          <div className='w-18 h-18 bg-gradient-to-t from-black to-black/60 rounded-2xl flex items-center justify-center'>
            <BsSpotify size={55} className='text-[#1ED760]' />
          </div>
        </button>
      </div>
    </div>
  );
}
