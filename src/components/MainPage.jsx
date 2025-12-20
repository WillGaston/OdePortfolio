import { useNavigate } from 'react-router-dom';
import mainImageH from '../assets/images/katong.jpeg';
import odeImage from '../assets/images/odemain.jpg';
import { MousePointer2 } from 'lucide-react';

export default function MainPage(props) {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full pt-8 md:pt-12 bg-gradient-to-b from-gray-100 to-white relative">
      <div className="flex flex-col lg:flex-row w-full h-full max-w-7xl mx-auto">
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center text-center px-6 z-10 lg:ml-[5%] mt-[30px] lg:mt-0">
          <img
            src={odeImage}
            className="rounded-full h-[300px] w-[500px] object-cover mb-6 border-4 border-black shadow-lg"
            alt="Odelia Lim"
          />
          <div className='bg-white flex flex-col justify-center items-center text-center p-6 mb-[20px] rounded-4xl'>
            <h1 className="text-5xl font-serif font-bold text-gray-800">
              Odelia Lim
            </h1>
            <a
              className="font-serif hover:underline transition-all inline-flex items-center gap-1 mt-2 text-[#D78D93]"
              href="https://instagram.com/avosfilm"
              target="_blank"
              rel="noopener noreferrer"
            >
              @avosfilm
            </a>
            <div className="flex items-center gap-3 mt-4 w-full max-w-sm">
              <div className="h-0.5 flex-grow rounded-full bg-[#D78D93]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#D78D93]"></div>
              <h3 className="text-gray-600 font-serif text-sm whitespace-nowrap">
                Freelance Photographer
              </h3>
              <div className="w-1.5 h-1.5 rounded-full bg-[#D78D93]"></div>
              <div className="h-0.5 flex-grow rounded-full bg-[#D78D93]"></div>
            </div>
            <p className="text-gray-500 font-serif text-xs mt-2">Sydney & Singapore</p>
            <p className="mt-6 text-gray-700 font-serif text-sm leading-relaxed max-w-md">
              For over 2 years I have been capturing moments and emotions through my film. I am also a medical student and director of photography for my university medical society.
            </p>
            <button 
              className="px-6 py-3 font-serif rounded-full text-white hover:shadow-xl hover:scale-105 transition-all shadow-lg mt-[30px]"
              style={{ backgroundColor: '#4CB3C2' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A8C98'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CB3C2'}
              onClick={() => {
                navigate('/portfolio');
                props.setCurrPage('portfolio');
              }}
            >
              <span className="flex items-center gap-2">
                View Portfolio
                <MousePointer2 className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-3/5 flex justify-center items-center mt-8 md:mt-0 z-10 md:mr-[5%] pb-[100px] md:mb-0">
          <img
            className="hidden lg:inline h-[800px] w-[500px] lg:w-[600px] object-cover rounded-lg shadow-lg border border-white border-8"
            src={mainImageH}
            alt="Horizontal view"
          />
          <img
            className="inline lg:hidden h-[500px] md:h-[600px] w-[350px] md:w-[500px] object-cover rounded-lg shadow-lg border border-white border-8"
            src={mainImageH}
            alt="Vertical view"
          />
        </div>
      </div>
      <svg 
        className="hidden lg:block fixed bottom-0 right-0 w-[1000px] h-[1000px] pointer-events-none"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="900" cy="900" r="500" fill="#D79D8C" />
      </svg>
      <svg 
        className="block fixed bottom-0 right-0 w-[700px] h-[700px] pointer-events-none"
        viewBox="0 0 700 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="700" cy="900" r="450" fill="#D79D8C" />
      </svg>
      <svg 
        className="hidden lg:block fixed bottom-0 right-0 w-[1000px] h-[1000px] pointer-events-none"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="1000" r="200" fill="#D24846" />
      </svg>
      <svg 
        className="fixed lg:hidden bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="550" r="150" fill="#D24846" />
      </svg>
      <svg 
        className="fixed top-0 left-0 w-[1000px] h-[1000px] pointer-events-none"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="" cy="" r="400" fill="#D4A490" />
      </svg>
    </div>
  );
}