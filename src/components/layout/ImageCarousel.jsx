import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMiniImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Carousel className="w-full max-w-lg bg-none shadow-none">
        <CarouselContent>
          {images && images.length > 0 ? (
            <CarouselItem>
              <div className="p-1">
                <Card className="shadow-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6 bg-gray-200">
                    <img
                      src={images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ) : (
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <p>No images available</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>

      {images && images.length > 0 && (
        <div className="flex mt-4 space-x-2 justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Mini Image ${index + 1}`}
              className="w-16 h-16 object-cover cursor-pointer border border-gray-300 rounded "
              onClick={() => handleMiniImageClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
