export default function GalleryGrid(props) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => props.setSelectedCategory(category)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl border-2 border-black bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              {/* Preview grid - 328x328px container for 2x2 grid */}
              <div className="relative h-82 w-82 mx-auto grid grid-cols-2 gap-2 p-3 bg-gray-100">
                {category.preview.map((img, i) => (
                  <div
                    key={i}
                    className="bg-gray-200 rounded-lg border border-gray-300 overflow-hidden group-hover:scale-105 transition-transform"
                  >
                    {typeof img === 'string' && (img.startsWith('http') || img.includes('/')) ? (
                      <img src={img} alt={`${category.name} preview ${i + 1}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center text-6xl h-full">{img}</div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="relative p-8">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.image}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
              </div>
              
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-black rounded-2xl transition-all pointer-events-none`} />
              {/* <div className={`${category.color} border border-black rounded-xl m-2 py-3 text-center font-semibold`}>
                View More
              </div> */}
              <div className="flex items-center justify-between mx-4 mb-2">
                <span className="text-sm font-medium text-gray-500">
                  {category.count} photos
                </span>
                <div className={`${category.color} border border-black rounded-xl mx-2 p-2 text-center font-semibold`}>
                  View More
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}