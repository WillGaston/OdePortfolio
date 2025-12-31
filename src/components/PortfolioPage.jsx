import { useState } from "react";
import GalleryGrid from "./GalleryGrid";
import ImageModal from "./ImageModal";

const mhedicImages = import.meta.glob('../assets/images/portfolioImages/mhedic/mhedicImages/*.{jpg,png,jpeg}', { eager: true });
const mhedicPreview = import.meta.glob('../assets/images/portfolioImages/mhedic/mhedicPreview/*.{jpg,png,jpeg}', { eager: true });

const botanicImages = import.meta.glob('../assets/images/portfolioImages/botanics/botanicImages/*.{jpg,png,jpeg}', { eager: true });
const botanicPreview = import.meta.glob('../assets/images/portfolioImages/botanics/botanicPreviews/*.{jpg,png,jpeg}', { eager: true });

const londonFilmImages = import.meta.glob('../assets/images/portfolioImages/londonFilm/londonFilmImages/*.{jpg,png,jpeg}', { eager: true });
const londonFilmPreview = import.meta.glob('../assets/images/portfolioImages/londonFilm/londonFilmPreview/*.{jpg,png,jpeg}', { eager: true });

const ntuPerfImages = import.meta.glob('../assets/images/portfolioImages/ntuPerformance/ntuPerfImages/*.{jpg,png,jpeg}', { eager: true });
const ntuPerfPreview = import.meta.glob('../assets/images/portfolioImages/ntuPerformance/ntuPerfPreviews/*.{jpg,png,jpeg}', { eager: true });

const otherFilmImages = import.meta.glob('../assets/images/portfolioImages/otherFilm/otherFilm/*.{jpg,png,jpeg}', { eager: true });
const otherFilmPreview = import.meta.glob('../assets/images/portfolioImages/otherFilm/otherFilmPreview/*.{jpg,png,jpeg}', { eager: true });

const podiumImages = import.meta.glob('../assets/images/portfolioImages/podiumParty/podiumImages/*.{jpg,png,jpeg}', { eager: true });
const podiumPreview = import.meta.glob('../assets/images/portfolioImages/podiumParty/podiumPreview/*.{jpg,png,jpeg}', { eager: true });

const scrubcrawlImages = import.meta.glob('../assets/images/portfolioImages/scrubcrawl25/scrubcrawlImages/*.{jpg,png,jpeg}', { eager: true });
const scrubcrawlPreview = import.meta.glob('../assets/images/portfolioImages/scrubcrawl25/scrubcrawlPreview/*.{jpg,png,jpeg}', { eager: true });

const spitToManlyImages = import.meta.glob('../assets/images/portfolioImages/spitToManly/spitToManlyImages/*.{jpg,png,jpeg}', { eager: true });
const spitToManlyPreview = import.meta.glob('../assets/images/portfolioImages/spitToManly/spitToManlyPreview/*.{jpg,png,jpeg}', { eager: true });

const sydneyFilmImages = import.meta.glob('../assets/images/portfolioImages/sydneyFilm/sydFilmImages/*.{jpg,png,jpeg}', { eager: true });
const sydneyFilmPreview = import.meta.glob('../assets/images/portfolioImages/sydneyFilm/sydFilmPreview/*.{jpg,png,jpeg}', { eager: true });

const sydneyStreetImages = import.meta.glob('../assets/images/portfolioImages/sydneyStreet/sydStrImages/*.{jpg,png,jpeg}', { eager: true });
const sydneyStreetPreview = import.meta.glob('../assets/images/portfolioImages/sydneyStreet/sydStrPreview/*.{jpg,png,jpeg}', { eager: true });

const sgStreetImages = import.meta.glob('../assets/images/portfolioImages/singaporeStreet/sgStreetImages/*.{jpg,png,jpeg}', { eager: true });
const sgStreetPreview = import.meta.glob('../assets/images/portfolioImages/singaporeStreet/sgStreetPreview/*.{jpg,png,jpeg}', { eager: true });

const wsocImages = import.meta.glob('../assets/images/portfolioImages/wsoc/wsocImages/*.{jpg,png,jpeg}', { eager: true });
const wsocPreview = import.meta.glob('../assets/images/portfolioImages/wsoc/wsocPreview/*.{jpg,png,jpeg}', { eager: true });

const getImageUrls = (imageModules) => {
  console.log(imageModules)
  return Object.values(imageModules).map(module => module.default);
};

export default function PortfolioPage() {
  const [selectedPhotoshoot, setSelectedPhotoshoot] = useState(null);

  const photoshoots = [
    {id: 1, photos: getImageUrls(mhedicImages), preview: getImageUrls(mhedicPreview), title: "MHEDIC Event", tags: ['events']},
    {id: 10, photos: getImageUrls(sydneyFilmImages), preview: getImageUrls(sydneyFilmPreview), title: "Sydney on Film", tags: ['film']},
    /* {id: 4, photos: getImageUrls(mhedicImages), preview: getImageUrls(mhedicImages), title: "MEDSOC Plant & Paint", tags: ['events']}, */
    {id: 9, photos: getImageUrls(londonFilmImages), preview: getImageUrls(londonFilmPreview), title: "London on Film", tags: ['film']},
    {id: 5, photos: getImageUrls(podiumImages), preview: getImageUrls(podiumPreview), title: "Podium Society Party", tags: ['events, parties']},
    {id: 7, photos: getImageUrls(sgStreetImages), preview: getImageUrls(sgStreetPreview), title: "Street Photography in Singapore", tags: ['street']},
    {id: 3, photos: getImageUrls(scrubcrawlImages), preview: getImageUrls(scrubcrawlPreview), title: "MEDSOC Srubcrawl 2025", tags: ['parties']},
    {id: 2, photos: getImageUrls(wsocImages), preview: getImageUrls(wsocPreview), title: "WSOC Events", tags: ['events']},
    {id: 7, photos: getImageUrls(sydneyStreetImages), preview: getImageUrls(sydneyStreetPreview), title: "Street Photography in Sydney", tags: ['street']},
    {id: 8, photos: getImageUrls(spitToManlyImages), preview: getImageUrls(spitToManlyPreview), title: "Spit Bridge to Manly Hike", tags: ['nature']},
    {id: 11, photos: getImageUrls(otherFilmImages), preview: getImageUrls(otherFilmPreview), title: "Film", tags: ['film']},
    {id: 12, photos: getImageUrls(botanicImages), preview: getImageUrls(botanicPreview), title: "Botanics and Flora", tags: ['nature']},
    {id: 6, photos: getImageUrls(ntuPerfImages), preview: getImageUrls(ntuPerfPreview), title: "NTU Performance", tags: ['events']},
  ]

  return (
    <>
      <GalleryGrid photoshoots={photoshoots} setSelectedPhotoshoot={setSelectedPhotoshoot}/>
      {selectedPhotoshoot && <ImageModal selectedPhotoshoot={selectedPhotoshoot} setSelectedPhotoshoot={setSelectedPhotoshoot}/>}
    </>
  )
}