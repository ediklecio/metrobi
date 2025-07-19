import { useState, useEffect, type FC } from 'react';

/**
 * Interface for an image object used in the ImageSlider component.
 */
export interface ImageSliderProps {
  url: string;
  description: string;
}

interface SliderComponentProps {
  images: ImageSliderProps[];
}

/**
 * A component that displays a slideshow of images with navigation dots.
 */
const ImageSlider: FC<SliderComponentProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  if (!images || images.length === 0) {
    return <div className="flex items-center justify-center h-full text-gray-500">No images to display.</div>;
  }

  return (
    <div className="relative h-full w-full">
      <div className="h-full w-full overflow-hidden rounded-md">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].description}
          title={images[currentIndex].description}
          className="w-full object-cover transition-transform duration-500 ease-in-out h-auto"
        />
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 w-3 rounded-full transition-colors cursor-pointer ${
              currentIndex === slideIndex
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;