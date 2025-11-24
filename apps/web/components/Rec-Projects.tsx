"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

interface ProjectData {
  id: number;
  price: string;
  title: string;
  description: string;
  img: string;
  hasRera: boolean;
}

const data: ProjectData[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  price: "₹2.25 Cr",
  title: "Signature City",
  description: "2 BHK Villa in Katara Hills, Bhopal",
  img: "./villa2.jpg",
  hasRera: true,
}));

export default function RecommendedProjects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);
  const [cardWidth, setCardWidth] = useState<number>(0);

  useEffect(() => {
    const firstCard = sliderRef.current?.children?.[0] as
      | HTMLElement
      | undefined;
    if (firstCard) setCardWidth(firstCard.getBoundingClientRect().width);
  }, []);

  const step = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const backward = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const startAuto = () => {
    if (autoRef.current) return;
    autoRef.current = setInterval(step, 3000);
  };

  const stopAuto = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  useEffect(() => {
    if (cardWidth > 0) {
      startAuto();
    }
    return () => stopAuto();
  }, [cardWidth]);

  return (
    <div className="relative w-full max-w-7xl px-4 flex flex-col gap-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-black">
          RECOMMENDED PROJECTS
        </h2>
        <p className="text-sm text-gray-500">
          The most searched projects in Bhopal
        </p>
      </div>

      <div className="relative">
        <button
          onClick={backward}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={step}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        <div
          ref={sliderRef}
          onScroll={stopAuto}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-20"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="min-w-[85%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] snap-start shrink-0 rounded-b-xl"
            >
              {}
              <div className="relative mb-2 w-full h-40 rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />

                {item.hasRera && (
                  <div className="absolute flex gap-1 justify-center bg-[#4242427D] text-white rounded-xl w-20 top-3 left-3 group cursor-pointer">
                    <ShieldCheck className="w-4" /> <p>Rera</p>
                  </div>
                )}
              </div>

              <div className="w-full py-4 h-40 shadow-2xl rounded-b-xl flex flex-col gap-2 justify-evenly px-4">
                <h3 className="text-xl font-semibold text-[#0E1F47] leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#707070] mt-2">
                  {item.description}
                </p>
                <span className="text-sm font-semibold text-[#0E1F47]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
