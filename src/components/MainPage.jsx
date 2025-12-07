import { useNavigate } from 'react-router-dom'
import mainImageH from '../assets/images/mainhorizontal.jpg'
import mainImageV from '../assets/images/mainvertical.jpg'
import odeImage from '../assets/images/odemain.jpg'
import { MousePointer2 } from 'lucide-react'

export default function MainPage(props) {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full pt-[30px] md:p-[50px]">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center">
          <img 
            src={odeImage}
            className="rounded-full h-[150px] w-[150px] object-cover mb-4 border-black border-2"
          />
          <h1 className='text-4xl font-serif'>Odelia Lim</h1>
          <a className="text-gray-500 font-serif" href="https://instagram.com/avosfilm" target="_blank" rel="noopener noreferrer">@avosfilm</a>
          <h3 className="text-gray-600 font-serif">Freelance Photographer | Sydney & Singapore</h3>
          <p className="mt-4 mx-4 px-3 text-center font-serif text-sm">For over 2 years I have been capturing moments and emotions through my film.</p>
          <p className="px-3 mb-4 mx-4 text-center font-serif text-sm">I am also a medical student and director of photography for my university medical society with experience photographing in professional settings.</p>
          <button
            onClick={() => {
              navigate('/portfolio');
              props.setCurrPage('portfolio');
            }} 
            className="p-1 font-serif rounded-lg bg-gray-300 border border-black hover:bg-gray-400"
          >
            <span className="flex items-center gap-2">
              View Portfolio
              <MousePointer2 className="w-4 h-4" />
            </span>
          </button>
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center mt-8">
          <img 
            className="hidden lg:inline h-[600px] lg:w-[800px] object-cover" 
            src={mainImageH}
            alt="Horizontal view"
          />
          <img 
            className="inline lg:hidden h-[500px] md:h-[600px] w-[350px] md:w-[500px] object-cover rounded-lg" 
            src={mainImageV}
            alt="Vertical view"
          />
        </div>
      </div>
    </div>
  )
}