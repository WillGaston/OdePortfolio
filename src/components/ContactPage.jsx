import { MapPin, Mail, Instagram, MousePointer2 } from "lucide-react"
import flowerImage from '../assets/images/flowercontact.png';

export default function ContactPage() {
  return (
    <>
      <div className=" min-h-screen bg-purple-50 font-serif">
        <div className="relative overflow-hidden flex justify-center z-10">
          <img
            src={flowerImage}
            className="rounded-4xl h-[200px] md:h-[300px] w-[800px] object-cover mb-6 mt-24 mx-4 shadow-lg border-4 border-white"
            alt="Odelia Lim"
          />
          <div className="absolute top-36 md:top-46 flex items-center justify-center">
            <div className="text-center text-black px-6 bg-white border-4 border-[#BB58BC] opacity-90 rounded-2xl">
              <h1 className="text-3xl md:text-6xl z-10 font-serif font-medium mt-2 px-4">
                Let's Connect
              </h1>
              <div className="flex items-center gap-3 mt-2 w-full max-w-md mx-auto mb-4">
                <div className="h-0.5 flex-grow rounded-full bg-black opacity-70"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black opacity-70"></div>
                <h3 className="text-black font-serif text-sm whitespace-nowrap opacity-90">
                  Get in Touch
                </h3>
                <div className="w-1.5 h-1.5 rounded-full bg-black opacity-70"></div>
                <div className="h-0.5 flex-grow rounded-full bg-black opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-4xl mx-auto px-6 py-16 z-10">
          <div className="text-center mb-12 z-10 bg-white rounded-lg p-4 border-[#E6B2F1] border">
            <h2 className="text-3xl font-medium mb-4">Ready to Capture Memories?</h2>
            <p className="text-lg text-gray-700">
              I'm available for photoshoots and events in Sydney and Singapore.
            </p>
            <p className="text-lg text-gray-700">
              The best way to reach me is through Instagram DMs - @avosfilm.
            </p>
          </div>
          <div className="mb-12 z-10">
            <a
              href="https://instagram.com/avosfilm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#CA6FD8',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BB58BC'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#CA6FD8'}
              className="block w-full py-6 rounded-lg text-white text-center hover:shadow-xl hover:scale-105 transition-all shadow-lg border-2 border-white"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl font-semibold">DM me on Instagram</span>
                <MousePointer2 className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <Instagram className="h-4 w-4 mt-3" />
                <p className="text-sm mt-2 opacity-90">@avosfilm - Fastest response time</p>
              </div>
            </a>
          </div>
          <div className="border-t-2 border-[#E6B2F1] pt-12 z-10">
            <h3 className="text-2xl font-medium mb-8 text-center bg-white lg:bg-none rounded-lg p-3 border-[#E6B2F1] border">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-gray-50 border-[#E6B2F1] border-2 shadow-lg rounded-lg justify-center items-center flex-col">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <MapPin className="w-6 h-6 text-gray-700" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-gray-700">Singapore</p>
                  <p className="text-gray-700">Sydney, Australia</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gray-50 border-[#E6B2F1] border-2 shadow-lg rounded-lg justify-center items-center flex-col">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Instagram className="w-6 h-6 text-gray-700" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="font-semibold text-lg mb-1">Instagram</h4>
                  <a 
                    href="https://instagram.com/avosfilm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors hover:scale-105 hover:underline"
                  >
                    @avosfilm
                  </a>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gray-50 border-[#E6B2F1] border-2 shadow-lg rounded-lg justify-center items-center flex-col">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <Mail className="w-6 h-6 text-gray-700" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a 
                    href="mailto:odelialim04@gmail.com"
                    className="text-gray-700 hover:text-black transition-colors hover:scale-105 hover:underline"
                  >
                    odelialim04@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-600 bg-white z-10 rounded-lg p-3 border-[#E6B2F1] border">
            <p>Available for bookings - DM for enquiries</p>
            <p className="text-sm mt-2">Based in Sydney & Singapore</p>
          </div>
        </div>
        <svg 
          className="fixed top-0 left-0 w-[1000px] h-[1000px] pointer-events-none z-1"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="" cy="-100" r="500" fill="#84175C" />
        </svg>
        <svg 
          className="fixed top-0 left-0 w-[1000px] h-[1000px] pointer-events-none z-1"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="" r="200" fill="#BF63BB" />
        </svg>
        <svg 
          className="block fixed bottom-0 right-0 w-[700px] h-[700px] pointer-events-none"
          viewBox="0 0 700 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="700" cy="850" r="450" fill="#982C7E" />
        </svg>
      </div>
    </>
  )
}