import { useState } from "react";
import GalleryGrid from "./GalleryGrid";
import ImageModal from "./ImageModal";

const mhedicImages = import.meta.glob('../assets/images/portfolioImages/mhedic/mhedicImages/*.{jpg,png,jpeg}', { eager: true });
const coupleChristmas = import.meta.glob('../assets/images/portfolioImages/coupleChristmas/*.{jpg,png,jpeg}', { eager: true });
const londonFilmImages = import.meta.glob('../assets/images/portfolioImages/londonFilm/londonFilmImages/*.{jpg,png,jpeg}', { eager: true });
const ntuPerfImages = import.meta.glob('../assets/images/portfolioImages/ntuPerformance/ntuPerfImages/*.{jpg,png,jpeg}', { eager: true });
const podiumImages = import.meta.glob('../assets/images/portfolioImages/podiumParty/podiumImages/*.{jpg,png,jpeg}', { eager: true });
const scrubcrawlImages = import.meta.glob('../assets/images/portfolioImages/scrubcrawl25/scrubcrawlImages/*.{jpg,png,jpeg}', { eager: true });
const spitToManlyImages = import.meta.glob('../assets/images/portfolioImages/spitToManly/spitToManlyImages/*.{jpg,png,jpeg}', { eager: true });
const sydneyFilmImages = import.meta.glob('../assets/images/portfolioImages/sydneyFilm/sydFilmImages/*.{jpg,png,jpeg}', { eager: true });
const sydneyStreetImages = import.meta.glob('../assets/images/portfolioImages/sydneyStreet/sydStrImages/*.{jpg,png,jpeg}', { eager: true });
const sgStreetImages = import.meta.glob('../assets/images/portfolioImages/singaporeStreet/sgStreetImages/*.{jpg,png,jpeg}', { eager: true });
const wsocImages = import.meta.glob('../assets/images/portfolioImages/wsoc/wsocImages/*.{jpg,png,jpeg}', { eager: true });
const rom = import.meta.glob('../assets/images/portfolioImages/rom/*.{jpg,png,jpeg}', { eager: true });


const getImageUrls = (imageModules) => {
  console.log(imageModules)
  return Object.values(imageModules).map(module => module.default);
};

export default function PortfolioPage() {
  const [selectedPhotoshoot, setSelectedPhotoshoot] = useState(null);

  const photoshoots = [
    { id: 1, photos: getImageUrls(mhedicImages), title: "MHEDIC Event", tags: ['events'] },
    { id: 3, photos: getImageUrls(mhedicImages), title: "MEDSOC Plant & Paint", tags: ['conferences'] },
    { id: 5, photos: getImageUrls(podiumImages), title: "Podium Society Party", tags: ['parties'] },
    { id: 6, photos: getImageUrls(sgStreetImages), title: "Street Photography in Singapore", tags: ['street'] },
    { id: 9, photos: getImageUrls(sydneyStreetImages), title: "Street Photography in Sydney", tags: ['street'] },
    { id: 2, photos: getImageUrls(sydneyFilmImages), title: "Sydney on Film", tags: ['street'] },
    { id: 4, photos: getImageUrls(londonFilmImages), title: "London on Film", tags: ['street'] },
    { id: 7, photos: getImageUrls(scrubcrawlImages), title: "MEDSOC Srubcrawl 2025", tags: ['parties'] },
    { id: 8, photos: getImageUrls(wsocImages), title: "WSOC Events", tags: ['conferences'] },
    { id: 10, photos: getImageUrls(spitToManlyImages), title: "Spit Bridge to Manly Hike", tags: ['street'] },
    { id: 11, photos: getImageUrls(ntuPerfImages), title: "NTU Performance", tags: ['conferences'] },
    { id: 13, photos: getImageUrls(rom), title: "ROM", tags: ['couples'] },
    { id: 12, photos: getImageUrls(coupleChristmas), title: "Couple Christmas Shoot", tags: ['couples'] },
  ];

  const categories = [
    { id: 'conferences', label: 'Conferences', color: '#000000' },
    { id: 'parties', label: 'Parties', color: '#3357ff' },
    { id: 'couples', label: 'Couples', color: '#33ff57' },
    { id: 'street', label: 'Street', color: '#ff5733' },
  ];

  return (
    <>
      <GalleryGrid photoshoots={photoshoots} setSelectedPhotoshoot={setSelectedPhotoshoot} categories={categories} />
      {selectedPhotoshoot && <ImageModal selectedPhotoshoot={selectedPhotoshoot} setSelectedPhotoshoot={setSelectedPhotoshoot} />}
    </>
  )
}