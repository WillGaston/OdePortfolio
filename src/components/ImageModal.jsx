import { X } from "lucide-react"

export default function ImageModal(props) {
  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
        onClick={() => props.setSelectedCategory(null)}
      >
        <div className="min-h-screen flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl border-2 border-black max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-white border-b-2 border-black p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h2 className="text-3xl font-bold mb-1">{props.selectedCategory.name}</h2>
                <p className="text-gray-600">{props.selectedCategory.description}</p>
              </div>
              <button
                onClick={() => props.setSelectedCategory(null)}
                className="p-2 hover:bg-gray-100 rounded-lg border border-black transition-colors flex-shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Modal Content */}
            <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(props.selectedCategory.images || [...Array(props.selectedCategory.count)]).map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gray-200 rounded-lg border-2 border-black overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                    >
                      {typeof img === 'string' && img.startsWith('http') || (typeof img === 'string' && img.includes('/')) ? (
                        <img src={img} alt={`${props.selectedCategory.name} ${i + 1}`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="flex items-center justify-center text-4xl h-full">{props.selectedCategory.image}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}