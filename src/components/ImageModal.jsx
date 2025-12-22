import { X } from "lucide-react"
import { useState } from "react"

export default function ImageModal(props) {
  const [lightboxImage, setLightboxImage] = useState("")

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto"
        onClick={() => props.setSelectedPhotoshoot(null)}
      >
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
          <div 
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl max-w-[95vw] w-full my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="relative p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight font-serif">
                    {props.selectedPhotoshoot.title}
                  </h2>
                </div>
                <button
                  onClick={() => props.setSelectedPhotoshoot(null)}
                  className="p-2.5 hover:bg-black/5 rounded-full transition-all duration-200 group shrink-0"
                >
                  <X className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                </button>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {props.selectedPhotoshoot.photos.map((img, i) => {
                  return (
                    <div
                      key={i}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                      style={{ aspectRatio: '3/4' }}
                      onClick={() => setLightboxImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${props.selectedPhotoshoot.title} ${i + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 text-black"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60] flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 group"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Lightbox view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}