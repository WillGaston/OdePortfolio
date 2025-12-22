import { useEffect, useState, useRef } from "react";
import { X, ArrowRight } from 'lucide-react';

export default function GalleryGrid(props) {
  const filterButtons = [
    { id: 'all', label: 'All', color: '#B2C6C9' },
    { id: 'events', label: 'Events', color: '#C1121F' },
    { id: 'parties', label: 'Parties', color: '#DF817A' },
    { id: 'street', label: 'Street', color: '#EEB9A8' },
    { id: 'film', label: 'Film', color: '#669BBC' },
    { id: 'nature', label: 'Nature', color: '#003049' },
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const buttonRefs = useRef({});
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const activeButton = buttonRefs.current[activeFilter];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeFilter]);

  const activeColor = filterButtons.find(f => f.id === activeFilter)?.color;

  const filteredPhotoshoots = activeFilter === 'all' 
    ? props.photoshoots 
    : props.photoshoots.filter(shoot => shoot.tags.includes(activeFilter));

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-center mb-12 mt-16">
          <div className="relative inline-flex bg-white/60 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-white/60">
            <div
              className="absolute rounded-full transition-all duration-500 ease-out shadow-xl"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                top: '6px',
                bottom: '6px',
                backgroundColor: activeColor,
                transform: 'translateZ(0)',
              }}
            />
            {filterButtons.map((filter) => {
              const isActive = activeFilter === filter.id;
              
              return (
                <button
                  key={filter.id}
                  ref={(el) => (buttonRefs.current[filter.id] = el)}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-2 sm:px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPhotoshoots.map((photoshoot) => {
            
            return (
              <div
                key={photoshoot.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onMouseEnter={() => setHoveredId(photoshoot.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => props.setSelectedPhotoshoot(photoshoot)}
              >
                <div className="aspect-square overflow-hidden">
                  {console.log(photoshoot.photos)}
                  <img
                    src={Array.isArray(photoshoot.preview) ? photoshoot.preview[0] : photoshoot.preview}
                    alt={photoshoot.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div
                  className={`absolute h-[125px] w-full bottom-0 backdrop-blur-md bg-white/30 border border-white/20 transition-opacity duration-300 flex flex-col justify-end p-4 ${
                    hoveredId === photoshoot.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="transform transition-transform duration-300"
                    style={{
                      transform: hoveredId === photoshoot.id ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                      {photoshoot.title}
                    </h3>
                    <p className="text-xs font-serif text-gray-700 mb-3">
                      {photoshoot.subtitle}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif text-gray-600">
                        {photoshoot.numPhotos} photos
                      </span>
                      <button
                        onClick={() => props.setSelectedPhotoshoot(photoshoot)}
                        className="px-3 py-1.5 rounded-full text-black text-xs border border-black bg-gray-200 font-serif font-medium hover:shadow-lg transition-all flex items-center gap-1"
                      >
                        View More
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}