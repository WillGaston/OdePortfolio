import { useState } from "react";
import GalleryGrid from "./GalleryGrid";
import ImageModal from "./ImageModal";

const conferenceImages = import.meta.glob('../assets/images/conferenceImages/*.{jpg,png,jpeg}', { eager: true });
const conferencePreviews = import.meta.glob('../assets/images/conferencePreviews/*.{jpg,png,jpeg}', { eager: true });

const partyImages = import.meta.glob('../assets/images/partyImages/*.{jpg,png,jpeg}', { eager: true });
const partyPreviews = import.meta.glob('../assets/images/partyPreviews/*.{jpg,png,jpeg}', { eager: true });

const performanceImages = import.meta.glob('../assets/images/performanceImages/*.{jpg,png,jpeg}', { eager: true });
const performancePreviews = import.meta.glob('../assets/images/performancePreviews/*.{jpg,png,jpeg}', { eager: true });

const streetImages = import.meta.glob('../assets/images/streetImages/*.{jpg,png,jpeg}', { eager: true });
const streetPreviews = import.meta.glob('../assets/images/streetPreviews/*.{jpg,png,jpeg}', { eager: true });

const travelImages = import.meta.glob('../assets/images/travelImages/*.{jpg,png,jpeg}', { eager: true });
const travelPreviews = import.meta.glob('../assets/images/travelPreviews/*.{jpg,png,jpeg}', { eager: true });

const botanicImages = import.meta.glob('../assets/images/botanicImages/*.{jpg,png,jpeg}', { eager: true });
const botanicPreviews = import.meta.glob('../assets/images/botanicPreviews/*.{jpg,png,jpeg}', { eager: true });

console.log(conferenceImages)

const getImageUrls = (imageModules) => {
  console.log(imageModules)
  return Object.values(imageModules).map(module => module.default);
};

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'conferences',
      name: 'Conferences',
      description: 'Corporate and professional events',
      images: getImageUrls(conferenceImages),
      count: getImageUrls(conferenceImages).length,
      color: 'from-blue-500 to-blue-700',
      preview: getImageUrls(conferencePreviews),
    },
    {
      id: 'parties',
      name: 'Parties',
      description: 'Celebrations and university society events',
      images: getImageUrls(partyImages),
      count: getImageUrls(partyImages).length,
      color: 'from-purple-500 to-pink-600',
      preview: getImageUrls(partyPreviews),
    },
    {
      id: 'performance',
      name: 'Performance',
      description: 'Informational and musical performances',
      images: getImageUrls(performanceImages),
      count: getImageUrls(performanceImages).length,
      color: 'from-yellow-500 to-yellow-700',
      preview: getImageUrls(performancePreviews),
    },
    {
      id: 'street',
      name: 'Street',
      description: 'Urban Life',
      images: getImageUrls(streetImages),
      count: getImageUrls(streetImages).length,
      color: 'from-gray-600 to-gray-800',
      preview: getImageUrls(streetPreviews),
    },
    {
      id: 'travel',
      name: 'Travel',
      description: 'Adventures captured on 35mm film',
      images: getImageUrls(travelImages),
      count: getImageUrls(travelImages).length,
      color: 'from-orange-500 to-red-600',
      preview: getImageUrls(travelPreviews),
    },
    {
      id: 'botanics',
      name: 'Botanics',
      description: 'Nature and botanicals',
      images: getImageUrls(botanicImages),
      count: getImageUrls(botanicImages).length,
      color: 'from-green-500 to-emerald-700',
      preview: getImageUrls(botanicPreviews),
    },
  ];
  return (
    <>
      <GalleryGrid categories={categories} setSelectedCategory={setSelectedCategory}/>
      {selectedCategory && <ImageModal selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>}
    </>
  )
}