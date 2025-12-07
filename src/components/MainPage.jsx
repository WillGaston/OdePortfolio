import mainImageH from '../assets/images/mainhorizontal.jpg'
import mainImageV from '../assets/images/mainvertical.jpg'

export default function MainPage() {

  return (
    <div className="flex h-full w-full pt-[30px] md:p-[50px]">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center">
          <h1 className='text-4xl font-serif'>Odelia Lim</h1>
          <h3 className="text-gray-600 font-serif">Freelance Photographer</h3>
          <p className="m-4 px-3 text-center font-serif text-sm">For over 2 years I have been capturing moments and emotions through my film. I have a deep interest in finding the brink between stillness and energy and am eager to expand my skills.</p>
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
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