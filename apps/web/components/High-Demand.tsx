"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ProjectData {
  id: number;
  title: string;
  price: string;
  isFeatured: boolean;
  location: string;
  brandImage: string;
  image: string;
}

const items: ProjectData[] = [
  {
    id: 0,
    title: "Fortune Acharya Enclave",
    isFeatured: true,
    price: "₹ 38.9 L - 80 Cr",
    location: "Bawadiya Kalan, Bhopal",
    brandImage: "./acharaya-enclave.jpg",
    image: "./acharaya-building.jpg",
  },
  {
    id: 1,
    title: "Fortune Elite",
    isFeatured: true,
    price: "₹ 38.9 L - 80 Cr",
    location: "Jatkhedi, Bhopal",
    brandImage: "./fortune-elite.jpg",
    image: "./fortune-building.jpg",
  },
  {
    id: 2,
    title: "Kolar Green farm",
    isFeatured: true,
    price: "₹ 38.9 L - 80 Cr",
    location: "Kolar, Bhopal",
    brandImage: "./kolar-green-farm.jpg",
    image: "./kolar-building.jpg",
  },
  {
    id: 3,
    title: "Fortune Acharya Enclave",
    isFeatured: true,
    price: "₹ 38.9 L - 80 Cr",
    location: "Bawadiya Kalan, Bhopal",
    brandImage: "./acharaya-enclave.jpg",
    image: "./acharaya-building.jpg",
  },
  {
    id: 4,
    title: "Fortune Elite",
    isFeatured: true,
    price: "₹ 38.9 L - 80 Cr",
    location: "Jatkhedi, Bhopal",
    brandImage: "./fortune-elite.jpg",
    image: "./fortune-building.jpg",
  },
  {
    id: 5,
    title: "Kolar Green farm",
    isFeatured: true,
    price: "₹ 38.9 L - 80 Cr",
    location: "Kolar, Bhopal",
    brandImage: "./kolar-green-farm.jpg",
    image: "./kolar-building.jpg",
  },
];

export default function HighDemand() {
  const ref = useRef<HTMLDivElement>(null);
  const auto = useRef<NodeJS.Timeout | null>(null);
  const [cardWidth, setCardWidth] = useState<number>(0);

  useEffect(() => {
    const first = ref.current?.children?.[0] as HTMLElement | undefined;
    if (first) setCardWidth(first.getBoundingClientRect().width);
  }, []);

  const next = () => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const prev = () => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const start = () => {
    if (auto.current) return;
    auto.current = setInterval(next, 3000);
  };

  const stop = () => {
    if (auto.current) {
      clearInterval(auto.current);
      auto.current = null;
    }
  };

  useEffect(() => {
    start();
    return () => stop();
  }, [cardWidth]);

  return (
    <div className="relative w-full max-w-7xl px-4 py-8 flex flex-col gap-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-black">
          HIGH-DEMAND PROJECT TO INVEST NOW
        </h2>
        <p className="text-sm text-gray-500">
          The most searched projects in Bhopal
        </p>
      </div>

      <div className="relative">
        <button
          onClick={prev}
          className="absolute hidden md:block left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow z-20"
          aria-label="Previous"
        >
          <ArrowLeft className="text-[#513B2F]" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow z-20"
          aria-label="Next"
        >
          <ArrowRight className="text-[#513B2F]" />
        </button>

        <div
          ref={ref}
          onScroll={stop}
          className="w-full flex gap-6 scroll-smooth snap-x snap-mandatory overflow-x-auto pb-20"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="
        flex justify-evenly shrink-0 snap-start
        min-w-[90%] sm:min-w-[50%] md:min-w-[33.33%]
      "
            >
              <div className="h-80 w-90 rounded-b-3xl shadow-2xl">
                <div className="relative w-full h-60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.isFeatured && (
                    <div className="absolute flex top-2 left-2 bg-[#FEE484] px-3 rounded-xs">
                      <span className="text-xs font-extralight text-[#1C2B39]">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 group cursor-pointer">
                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      className="fill-white group-hover:fill-red-500"
                    >
                      <path d="M24.5 1.76091C24.9641 1.76091 25.4092 1.94643 25.7374 2.27667C26.0656 2.6069 26.25 3.05479 26.25 3.52182V17.6091C26.25 18.0761 26.0656 18.524 25.7374 18.8542C25.4092 19.1845 24.9641 19.37 24.5 19.37H20.125C19.5816 19.37 19.0457 19.4973 18.5598 19.7418C18.0738 19.9863 17.651 20.3413 17.325 20.7787L14 25.2391L10.675 20.7787C10.349 20.3413 9.92624 19.9863 9.44025 19.7418C8.95425 19.4973 8.41836 19.37 7.875 19.37H3.5C3.03587 19.37 2.59075 19.1845 2.26256 18.8542C1.93437 18.524 1.75 18.0761 1.75 17.6091V3.52182C1.75 3.05479 1.93437 2.6069 2.26256 2.27667C2.59075 1.94643 3.03587 1.76091 3.5 1.76091H24.5ZM3.5 0C2.57174 0 1.6815 0.371047 1.02513 1.03152C0.368749 1.69198 0 2.58777 0 3.52182L0 17.6091C0 18.5431 0.368749 19.4389 1.02513 20.0994C1.6815 20.7598 2.57174 21.1309 3.5 21.1309H7.875C8.14668 21.1309 8.41463 21.1945 8.65762 21.3168C8.90062 21.4391 9.11199 21.6166 9.275 21.8353L12.6 26.2956C12.763 26.5143 12.9744 26.6918 13.2174 26.8141C13.4604 26.9364 13.7283 27 14 27C14.2717 27 14.5396 26.9364 14.7826 26.8141C15.0256 26.6918 15.237 26.5143 15.4 26.2956L18.725 21.8353C18.888 21.6166 19.0994 21.4391 19.3424 21.3168C19.5854 21.1945 19.8533 21.1309 20.125 21.1309H24.5C25.4283 21.1309 26.3185 20.7598 26.9749 20.0994C27.6313 19.4389 28 18.5431 28 17.6091V3.52182C28 2.58777 27.6313 1.69198 26.9749 1.03152C26.3185 0.371047 25.4283 0 24.5 0L3.5 0Z" />
                      <path d="M14 6.87636C17.3283 3.83456 25.651 9.15727 14 16C2.34899 9.15549 10.6717 3.83456 14 6.87636Z" />
                    </svg>
                  </div>

                  <div className="absolute w-40 h-16 z-10 bottom-1 left-5 bg-white px-1 py-1 shadow-lg">
                    <img
                      className="flex object-center mx-auto h-14 w-auto"
                      src={item.brandImage}
                    />
                  </div>
                </div>

                <div className="w-full rounded-2xl h-35 -mt-6 flex flex-col justify-end py-4 px-4 space-y-1.5 bg-white relative">
                  <h3 className="text-lg font-semibold text-[#0E1F47] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#707070] mt-2">{item.location}</p>
                  <h6 className="text-md font-semibold text-[#0E1F47] mt-1">
                    {item.price}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}