import React, { ReactNode, useState } from "react";

interface CarouselProps {
    children: ReactNode[];
    itemsPerSlide: number;
}

export default function Carousel({ children, itemsPerSlide }: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const numSlides = Math.ceil(children.length / itemsPerSlide);

    function nextSlide() {
        setCurrentSlide((currentSlide + 1) % children.length);
    }

    function prevSlide() {
        setCurrentSlide((currentSlide - 1 + children.length) % children.length);
    }

    return (
        <div className="relative w-full">
            <div className="overflow-hidden ">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {Array.from({ length: numSlides }).map((_, index) => (
                        <div key={index} className="flex-shrink-0 w-full">
                            <div className="flex">
                                {children
                                    .slice(
                                        index * itemsPerSlide,
                                        (index + 1) * itemsPerSlide
                                    )
                                    .map((child, childIndex) => (
                                        <div
                                            key={childIndex}
                                            className="w-full"
                                        >
                                            {child}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 px-4 py-2 bg-gray-800 text-white rounded-l"
                onClick={() =>
                    setCurrentSlide((currentSlide - 1 + numSlides) % numSlides)
                }
            >
                Previous
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 px-4 py-2 bg-gray-800 text-white rounded-r"
                onClick={() => setCurrentSlide((currentSlide + 1) % numSlides)}
            >
                Next
            </button>
        </div>
    );
}
