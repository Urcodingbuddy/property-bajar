"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectData {
  id: number;
  price: string;
  title: string;
  posted: string;
  time: string;
  img: string;
}
const data: ProjectData[] = Array.from({ length: 12 }).map(
  (_, i) => ({
    id: i,
    price: "₹ 2.25 Cr",
    title: "5 BHK Independent House...",
    posted: "Posted By Owner",
    time: "3 Month Ago",
    img: "./villa.jpg",
  })
);

export default function BestChoice() {
const sliderRef = useRef<HTMLDivElement>(null);
const autoRef = useRef<NodeJS.Timeout | null>(null);
const cooldownRef = useRef<NodeJS.Timeout | null>(null);
const isAutoScrolling = useRef(false);
const [cardWidth, setCardWidth] = useState(0);

useEffect(() => {
  const firstCard = sliderRef.current?.children?.[0] as HTMLElement;
  if (firstCard) setCardWidth(firstCard.getBoundingClientRect().width);
}, []);

const step = () => {
  if (!sliderRef.current) return;

  isAutoScrolling.current = true;
  sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });

  setTimeout(() => {
    isAutoScrolling.current = false;
  }, 350);
};

const backward = () => {
  if (!sliderRef.current) return;

  isAutoScrolling.current = true;
  sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });

  setTimeout(() => {
    isAutoScrolling.current = false;
  }, 350);
};

const startAuto = () => {
  if (autoRef.current) return;
  autoRef.current = setInterval(step, 2000);
};

const stopAuto = () => {
  if (autoRef.current) {
    clearInterval(autoRef.current);
    autoRef.current = null;
  }
};

const restartLater = () => {
  if (cooldownRef.current) clearTimeout(cooldownRef.current);

  cooldownRef.current = setTimeout(() => {
    startAuto();
  }, 2000); // resume after 2 seconds
};

const handleScroll = () => {
  if (isAutoScrolling.current) return; // ignore auto-scroll events
  stopAuto();
  restartLater();
};

useEffect(() => {
  if (cardWidth > 0) startAuto();
  return () => stopAuto();
}, [cardWidth]);

  return (
    <div className="relative w-full max-w-7xl px-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-black">BEST CHOICE</h2>
        <p className="text-sm text-gray-500">Carefully selected for you</p>
      </div>

      <div className="relative mt-6">
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
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-20"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="min-w-[85%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] bg-white shadow-md border border-gray-100 snap-start shrink-0 rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-40">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <button className="absolute top-3 right-3 p-2 backdrop-blur-sm rounded-full transition-colors group">
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    className="fill-white group-hover:fill-red-500"
                  >
                    <path d="M24.5 1.76091C24.9641 1.76091 25.4092 1.94643 25.7374 2.27667C26.0656 2.6069 26.25 3.05479 26.25 3.52182V17.6091C26.25 18.0761 26.0656 18.524 25.7374 18.8542C25.4092 19.1845 24.9641 19.37 24.5 19.37H20.125C19.5816 19.37 19.0457 19.4973 18.5598 19.7418C18.0738 19.9863 17.651 20.3413 17.325 20.7787L14 25.2391L10.675 20.7787C10.349 20.3413 9.92624 19.9863 9.44025 19.7418C8.95425 19.4973 8.41836 19.37 7.875 19.37H3.5C3.03587 19.37 2.59075 19.1845 2.26256 18.8542C1.93437 18.524 1.75 18.0761 1.75 17.6091V3.52182C1.75 3.05479 1.93437 2.6069 2.26256 2.27667C2.59075 1.94643 3.03587 1.76091 3.5 1.76091H24.5ZM3.5 0C2.57174 0 1.6815 0.371047 1.02513 1.03152C0.368749 1.69198 0 2.58777 0 3.52182L0 17.6091C0 18.5431 0.368749 19.4389 1.02513 20.0994C1.6815 20.7598 2.57174 21.1309 3.5 21.1309H7.875C8.14668 21.1309 8.41463 21.1945 8.65762 21.3168C8.90062 21.4391 9.11199 21.6166 9.275 21.8353L12.6 26.2956C12.763 26.5143 12.9744 26.6918 13.2174 26.8141C13.4604 26.9364 13.7283 27 14 27C14.2717 27 14.5396 26.9364 14.7826 26.8141C15.0256 26.6918 15.237 26.5143 15.4 26.2956L18.725 21.8353C18.888 21.6166 19.0994 21.4391 19.3424 21.3168C19.5854 21.1945 19.8533 21.1309 20.125 21.1309H24.5C25.4283 21.1309 26.3185 20.7598 26.9749 20.0994C27.6313 19.4389 28 18.5431 28 17.6091V3.52182C28 2.58777 27.6313 1.69198 26.9749 1.03152C26.3185 0.371047 25.4283 0 24.5 0L3.5 0Z" />
                    <path d="M14 6.87636C17.3283 3.83456 25.651 9.15727 14 16C2.34899 9.15549 10.6717 3.83456 14 6.87636Z" />
                  </svg>
                </button>

                <div className="absolute -bottom-4 left-4 bg-[#FEE484] px-3 py-1 rounded-md shadow">
                  <span className="text-sm font-semibold text-[#1C2B39]">
                    {item.price}
                  </span>
                </div>

                <div className="absolute -bottom-6 right-4 text-xs text-[#707070]">
                  Interested Visitor (10)
                </div>
              </div>

              <div className="w-full h-40 flex flex-col gap-2 justify-center rounded-b-xl px-4 shadow-2xl">
                <h3 className="text-lg font-semibold text-[#0E1F47] leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#707070] mt-2">{item.posted}</p>
                <p className="text-sm text-[#707070] mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
