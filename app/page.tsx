import Navbar from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { ShieldCheck } from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screenflex flex-col">
      <Navbar />

      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[450] lg:h-[350px] mt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4cd1f407101c8b871d8c153320700fd1e0682b48-1xbR2tRXVD4KK8OHoktzbOiEFvGjle.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-5xl leading-tight">
            INDIA,S NO1 PROPERTY FINDING PLATFORM
          </h1>
        </div>
      </section>

      <div className="relative pb-16">
        <SearchBar />
      </div>

      <section className="w-full flex justify-center mt-30">
        <div
          className="w-full max-w-[1242px] md:h-[203px] bg-white rounded-xl
                  flex md:flex-row flex-wrap justify-around
                  items-center gap-6 md:gap-0 px-4 md:px-0"
        >
          {/* Card 1 */}
          <div className="w-60 h-36 bg-[#F7FAFF] rounded-lg px-5 pb-3 flex flex-col">
            <img src="./premiumProperty.png" className="w-20" />
            <h1 className="text-[#7511F6] font-semibold text-lg leading-tight mt-3">
              Premium Property
            </h1>
            <p className="text-[10px] text-[#7A7A7A] leading-tight mt-1">
              Instant access to zero brokerage properties
            </p>
          </div>

          {/* Divider */}
          <div
            className="hidden md:block h-full w-px 
                bg-[repeating-linear-gradient(to_bottom,#d1d5db_0,#d1d5db_3px,transparent_3px,transparent_8px)]"
          ></div>

          {/* Card 2 */}
          <div className="w-60 h-36 bg-[#F7FAFF] rounded-lg px-5 pb-3 flex flex-col">
            <img src="./payOnCredit.png" className="w-20" />
            <h1 className="text-[#7511F6] font-semibold text-lg leading-tight mt-3">
              Pay on credit
            </h1>
            <p className="text-[10px] text-[#7A7A7A] leading-tight mt-1">
              Pay your rent using Credit Card
            </p>
          </div>

          <div
            className="hidden md:block h-full w-px 
                bg-[repeating-linear-gradient(to_bottom,#d1d5db_0,#d1d5db_3px,transparent_3px,transparent_8px)]"
          ></div>

          {/* Card 3 */}
          <div className="w-60 h-36 bg-[#F7FAFF] rounded-lg px-5 pb-3 flex flex-col">
            <img src="./homeLoans.png" className="w-20" />
            <h1 className="text-[#7511F6] font-semibold text-lg leading-tight mt-3">
              Home Loans
            </h1>
            <p className="text-[10px] text-[#7A7A7A] leading-tight mt-1">
              Lowest Interest rate offers
            </p>
          </div>

          <div
            className="hidden md:block h-full w-px 
                bg-[repeating-linear-gradient(to_bottom,#d1d5db_0,#d1d5db_3px,transparent_3px,transparent_8px)]"
          ></div>

          {/* Card 4 */}
          <div className="w-60 h-36 bg-[#F7FAFF] rounded-lg px-5 pb-3 flex flex-col">
            <img src="./propertyProtect.png" className="w-20" />
            <h1 className="text-[#7511F6] font-semibold text-lg leading-tight mt-3">
              Property Protect
            </h1>
            <p className="text-[10px] text-[#7A7A7A] leading-tight mt-1">
              Protection against cyber frauds
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center my-16">
        <div className="w-full max-w-7xl px-4">
          <h2 className="text-2xl font-semibold text-black">Best Choices</h2>
          <p className="text-sm text-gray-500">Carefully selected for you</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {/* CARD */}
            <div className="bg-white shadow-md border border-gray-100">
              {/* IMAGE BLOCK */}
              <div className="relative w-full h-40">
                <img src="./villa.jpg" className="w-full h-full object-cover" />

                <div className="absolute top-3 right-3 group cursor-pointer">
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    className="fill-white group-hover:fill-red-500"
                  >
                                        <path
                      d="M24.5 1.76091C24.9641 1.76091 25.4092 1.94643 25.7374 2.27667C26.0656 2.6069 26.25 3.05479 26.25 3.52182V17.6091C26.25 18.0761 26.0656 18.524 25.7374 18.8542C25.4092 19.1845 24.9641 19.37 24.5 19.37H20.125C19.5816 19.37 19.0457 19.4973 18.5598 19.7418C18.0738 19.9863 17.651 20.3413 17.325 20.7787L14 25.2391L10.675 20.7787C10.349 20.3413 9.92624 19.9863 9.44025 19.7418C8.95425 19.4973 8.41836 19.37 7.875 19.37H3.5C3.03587 19.37 2.59075 19.1845 2.26256 18.8542C1.93437 18.524 1.75 18.0761 1.75 17.6091V3.52182C1.75 3.05479 1.93437 2.6069 2.26256 2.27667C2.59075 1.94643 3.03587 1.76091 3.5 1.76091H24.5ZM3.5 0C2.57174 0 1.6815 0.371047 1.02513 1.03152C0.368749 1.69198 0 2.58777 0 3.52182L0 17.6091C0 18.5431 0.368749 19.4389 1.02513 20.0994C1.6815 20.7598 2.57174 21.1309 3.5 21.1309H7.875C8.14668 21.1309 8.41463 21.1945 8.65762 21.3168C8.90062 21.4391 9.11199 21.6166 9.275 21.8353L12.6 26.2956C12.763 26.5143 12.9744 26.6918 13.2174 26.8141C13.4604 26.9364 13.7283 27 14 27C14.2717 27 14.5396 26.9364 14.7826 26.8141C15.0256 26.6918 15.237 26.5143 15.4 26.2956L18.725 21.8353C18.888 21.6166 19.0994 21.4391 19.3424 21.3168C19.5854 21.1945 19.8533 21.1309 20.125 21.1309H24.5C25.4283 21.1309 26.3185 20.7598 26.9749 20.0994C27.6313 19.4389 28 18.5431 28 17.6091V3.52182C28 2.58777 27.6313 1.69198 26.9749 1.03152C26.3185 0.371047 25.4283 0 24.5 0L3.5 0Z"
                    />
                    <path d="M14 6.87636C17.3283 3.83456 25.651 9.15727 14 16C2.34899 9.15549 10.6717 3.83456 14 6.87636Z" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 left-4 bg-[#FEE484] px-3 py-1 rounded-sm shadow">
                  <span className="text-sm font-semibold text-[#1C2B39]">
                    ₹ 2.25 Cr
                  </span>
                </div>

                <div className="absolute -bottom-6 right-4 text-xs text-[#707070]">
                  Interested Visitor (10)
                </div>
              </div>

              <div className="w-full h-40 flex flex-col gap-2 justify-center px-4">
                <h3 className="text-lg font-semibold text-[#0E1F47] leading-tight">
                  5 BHK Independent House...
                </h3>
                <p className="text-sm text-[#707070] mt-2">Posted By Owner</p>
                <p className="text-sm text-[#707070] mt-1">3 Month Ago</p>
              </div>
            </div>
            <div className="bg-white shadow-md border border-gray-100">
              {/* IMAGE BLOCK */}
              <div className="relative w-full h-40">
                <img src="./villa.jpg" className="w-full h-full object-cover" />

                <div className="absolute top-3 right-3 group cursor-pointer">
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    className="fill-white group-hover:fill-red-500"
                  >
                                        <path
                      d="M24.5 1.76091C24.9641 1.76091 25.4092 1.94643 25.7374 2.27667C26.0656 2.6069 26.25 3.05479 26.25 3.52182V17.6091C26.25 18.0761 26.0656 18.524 25.7374 18.8542C25.4092 19.1845 24.9641 19.37 24.5 19.37H20.125C19.5816 19.37 19.0457 19.4973 18.5598 19.7418C18.0738 19.9863 17.651 20.3413 17.325 20.7787L14 25.2391L10.675 20.7787C10.349 20.3413 9.92624 19.9863 9.44025 19.7418C8.95425 19.4973 8.41836 19.37 7.875 19.37H3.5C3.03587 19.37 2.59075 19.1845 2.26256 18.8542C1.93437 18.524 1.75 18.0761 1.75 17.6091V3.52182C1.75 3.05479 1.93437 2.6069 2.26256 2.27667C2.59075 1.94643 3.03587 1.76091 3.5 1.76091H24.5ZM3.5 0C2.57174 0 1.6815 0.371047 1.02513 1.03152C0.368749 1.69198 0 2.58777 0 3.52182L0 17.6091C0 18.5431 0.368749 19.4389 1.02513 20.0994C1.6815 20.7598 2.57174 21.1309 3.5 21.1309H7.875C8.14668 21.1309 8.41463 21.1945 8.65762 21.3168C8.90062 21.4391 9.11199 21.6166 9.275 21.8353L12.6 26.2956C12.763 26.5143 12.9744 26.6918 13.2174 26.8141C13.4604 26.9364 13.7283 27 14 27C14.2717 27 14.5396 26.9364 14.7826 26.8141C15.0256 26.6918 15.237 26.5143 15.4 26.2956L18.725 21.8353C18.888 21.6166 19.0994 21.4391 19.3424 21.3168C19.5854 21.1945 19.8533 21.1309 20.125 21.1309H24.5C25.4283 21.1309 26.3185 20.7598 26.9749 20.0994C27.6313 19.4389 28 18.5431 28 17.6091V3.52182C28 2.58777 27.6313 1.69198 26.9749 1.03152C26.3185 0.371047 25.4283 0 24.5 0L3.5 0Z"
                    />
                    <path d="M14 6.87636C17.3283 3.83456 25.651 9.15727 14 16C2.34899 9.15549 10.6717 3.83456 14 6.87636Z" />
                  </svg>

                 
                </div>

                <div className="absolute -bottom-4 left-4 bg-[#FEE484] px-3 py-1 rounded-sm shadow">
                  <span className="text-sm font-semibold text-[#1C2B39]">
                    ₹ 2.25 Cr
                  </span>
                </div>

                <div className="absolute -bottom-6 right-4 text-xs text-[#707070]">
                  Interested Visitor (10)
                </div>
              </div>

              <div className="w-full h-40 flex flex-col gap-2 justify-center px-4">
                <h3 className="text-lg font-semibold text-[#0E1F47] leading-tight">
                  5 BHK Independent House...
                </h3>
                <p className="text-sm text-[#707070] mt-2">Posted By Owner</p>
                <p className="text-sm text-[#707070] mt-1">3 Month Ago</p>
              </div>
            </div>
            <div className="bg-white shadow-md border border-gray-100">
              {/* IMAGE BLOCK */}
              <div className="relative w-full h-40">
                <img src="./villa.jpg" className="w-full h-full object-cover" />

                <div className="absolute top-3 right-3 group cursor-pointer">
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    className="fill-white group-hover:fill-red-500"
                  >
                                        <path
                      d="M24.5 1.76091C24.9641 1.76091 25.4092 1.94643 25.7374 2.27667C26.0656 2.6069 26.25 3.05479 26.25 3.52182V17.6091C26.25 18.0761 26.0656 18.524 25.7374 18.8542C25.4092 19.1845 24.9641 19.37 24.5 19.37H20.125C19.5816 19.37 19.0457 19.4973 18.5598 19.7418C18.0738 19.9863 17.651 20.3413 17.325 20.7787L14 25.2391L10.675 20.7787C10.349 20.3413 9.92624 19.9863 9.44025 19.7418C8.95425 19.4973 8.41836 19.37 7.875 19.37H3.5C3.03587 19.37 2.59075 19.1845 2.26256 18.8542C1.93437 18.524 1.75 18.0761 1.75 17.6091V3.52182C1.75 3.05479 1.93437 2.6069 2.26256 2.27667C2.59075 1.94643 3.03587 1.76091 3.5 1.76091H24.5ZM3.5 0C2.57174 0 1.6815 0.371047 1.02513 1.03152C0.368749 1.69198 0 2.58777 0 3.52182L0 17.6091C0 18.5431 0.368749 19.4389 1.02513 20.0994C1.6815 20.7598 2.57174 21.1309 3.5 21.1309H7.875C8.14668 21.1309 8.41463 21.1945 8.65762 21.3168C8.90062 21.4391 9.11199 21.6166 9.275 21.8353L12.6 26.2956C12.763 26.5143 12.9744 26.6918 13.2174 26.8141C13.4604 26.9364 13.7283 27 14 27C14.2717 27 14.5396 26.9364 14.7826 26.8141C15.0256 26.6918 15.237 26.5143 15.4 26.2956L18.725 21.8353C18.888 21.6166 19.0994 21.4391 19.3424 21.3168C19.5854 21.1945 19.8533 21.1309 20.125 21.1309H24.5C25.4283 21.1309 26.3185 20.7598 26.9749 20.0994C27.6313 19.4389 28 18.5431 28 17.6091V3.52182C28 2.58777 27.6313 1.69198 26.9749 1.03152C26.3185 0.371047 25.4283 0 24.5 0L3.5 0Z"
                    />
                    <path d="M14 6.87636C17.3283 3.83456 25.651 9.15727 14 16C2.34899 9.15549 10.6717 3.83456 14 6.87636Z" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 left-4 bg-[#FEE484] px-3 py-1 rounded-sm shadow">
                  <span className="text-sm font-semibold text-[#1C2B39]">
                    ₹ 2.25 Cr
                  </span>
                </div>

                <div className="absolute -bottom-6 right-4 text-xs text-[#707070]">
                  Interested Visitor (10)
                </div>
              </div>

              <div className="w-full h-40 flex flex-col gap-2 justify-center px-4">
                <h3 className="text-lg font-semibold text-[#0E1F47] leading-tight">
                  5 BHK Independent House...
                </h3>
                <p className="text-sm text-[#707070] mt-2">Posted By Owner</p>
                <p className="text-sm text-[#707070] mt-1">3 Month Ago</p>
              </div>
            </div>
            <div className="bg-white shadow-md border border-gray-100">
              {/* IMAGE BLOCK */}
              <div className="relative w-full h-40">
                <img src="./villa.jpg" className="w-full h-full object-cover" />

                <div className="absolute top-3 right-3 group cursor-pointer">
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    className="fill-white group-hover:fill-red-500"
                  >
                                        <path
                      d="M24.5 1.76091C24.9641 1.76091 25.4092 1.94643 25.7374 2.27667C26.0656 2.6069 26.25 3.05479 26.25 3.52182V17.6091C26.25 18.0761 26.0656 18.524 25.7374 18.8542C25.4092 19.1845 24.9641 19.37 24.5 19.37H20.125C19.5816 19.37 19.0457 19.4973 18.5598 19.7418C18.0738 19.9863 17.651 20.3413 17.325 20.7787L14 25.2391L10.675 20.7787C10.349 20.3413 9.92624 19.9863 9.44025 19.7418C8.95425 19.4973 8.41836 19.37 7.875 19.37H3.5C3.03587 19.37 2.59075 19.1845 2.26256 18.8542C1.93437 18.524 1.75 18.0761 1.75 17.6091V3.52182C1.75 3.05479 1.93437 2.6069 2.26256 2.27667C2.59075 1.94643 3.03587 1.76091 3.5 1.76091H24.5ZM3.5 0C2.57174 0 1.6815 0.371047 1.02513 1.03152C0.368749 1.69198 0 2.58777 0 3.52182L0 17.6091C0 18.5431 0.368749 19.4389 1.02513 20.0994C1.6815 20.7598 2.57174 21.1309 3.5 21.1309H7.875C8.14668 21.1309 8.41463 21.1945 8.65762 21.3168C8.90062 21.4391 9.11199 21.6166 9.275 21.8353L12.6 26.2956C12.763 26.5143 12.9744 26.6918 13.2174 26.8141C13.4604 26.9364 13.7283 27 14 27C14.2717 27 14.5396 26.9364 14.7826 26.8141C15.0256 26.6918 15.237 26.5143 15.4 26.2956L18.725 21.8353C18.888 21.6166 19.0994 21.4391 19.3424 21.3168C19.5854 21.1945 19.8533 21.1309 20.125 21.1309H24.5C25.4283 21.1309 26.3185 20.7598 26.9749 20.0994C27.6313 19.4389 28 18.5431 28 17.6091V3.52182C28 2.58777 27.6313 1.69198 26.9749 1.03152C26.3185 0.371047 25.4283 0 24.5 0L3.5 0Z"
                    />
                    <path d="M14 6.87636C17.3283 3.83456 25.651 9.15727 14 16C2.34899 9.15549 10.6717 3.83456 14 6.87636Z" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 left-4 bg-[#FEE484] px-3 py-1 rounded-sm shadow">
                  <span className="text-sm font-semibold text-[#1C2B39]">
                    ₹ 2.25 Cr
                  </span>
                </div>

                <div className="absolute -bottom-6 right-4 text-xs text-[#707070]">
                  Interested Visitor (10)
                </div>
              </div>

              <div className="w-full h-40 flex flex-col gap-2 justify-center px-4">
                <h3 className="text-lg font-semibold text-[#0E1F47] leading-tight">
                  5 BHK Independent House...
                </h3>
                <p className="text-sm text-[#707070] mt-2">Posted By Owner</p>
                <p className="text-sm text-[#707070] mt-1">3 Month Ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center mt-30 mb-16">
        <div className="w-full max-w-7xl px-4">
          <h2 className="text-2xl font-semibold text-black">
            Recommended Projects
          </h2>
          <p className="text-sm text-gray-500">
            The most searched projects in Bhopal
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {/* CARD */}
            <div className="rounded-b-xl">
              {/* IMAGE BLOCK */}
              <div className="relative mb-2 w-full h-40 rounded-xl">
                <img
                  src="./villa2.jpg"
                  className="w-full h-full object-cover"
                />

                <div className="absolute flex gap-1 justify-center bg-[#4242427D] text-white rounded-xl w-20 top-3 left-3 group cursor-pointer">
                  <ShieldCheck className="w-4" /> <p>Rera</p>
                </div>
              </div>

              <div className="w-full py-4 h-40 shadow-2xl rounded-b-xl flex flex-col gap-2 justify-evenly px-4">
                <h3 className="text-xl font-semibold text-[#0E1F47] leading-tight">
                  Signature City
                </h3>
                <p className="text-sm text-[#707070] mt-2">
                  2 BHK Villa in Katara Hills, Bhopal
                </p>
                <span className="text-sm font-semibold text-[#0E1F47]">
                  ₹ 2.25 Cr
                </span>
              </div>
            </div>
            <div className="rounded-b-xl">
              {/* IMAGE BLOCK */}
              <div className="relative mb-2 w-full h-40 rounded-xl">
                <img
                  src="./villa2.jpg"
                  className="w-full h-full object-cover"
                />

                <div className="absolute flex gap-1 justify-center bg-[#4242427D] text-white rounded-xl w-20 top-3 left-3 group cursor-pointer">
                  <ShieldCheck className="w-4" /> <p>Rera</p>
                </div>
              </div>

              <div className="w-full py-4 h-40 shadow-2xl rounded-b-xl flex flex-col gap-2 justify-evenly px-4">
                <h3 className="text-xl font-semibold text-[#0E1F47] leading-tight">
                  Signature City
                </h3>
                <p className="text-sm text-[#707070] mt-2">
                  2 BHK Villa in Katara Hills, Bhopal
                </p>
                <span className="text-sm font-semibold text-[#0E1F47]">
                  ₹ 2.25 Cr
                </span>
              </div>
            </div>
            <div className="rounded-b-xl">
              {/* IMAGE BLOCK */}
              <div className="relative mb-2 w-full h-40 rounded-xl">
                <img
                  src="./villa2.jpg"
                  className="w-full h-full object-cover"
                />

                <div className="absolute flex gap-1 justify-center bg-[#4242427D] text-white rounded-xl w-20 top-3 left-3 group cursor-pointer">
                  <ShieldCheck className="w-4" /> <p>Rera</p>
                </div>
              </div>

              <div className="w-full py-4 h-40 shadow-2xl rounded-b-xl flex flex-col gap-2 justify-evenly px-4">
                <h3 className="text-xl font-semibold text-[#0E1F47] leading-tight">
                  Signature City
                </h3>
                <p className="text-sm text-[#707070] mt-2">
                  2 BHK Villa in Katara Hills, Bhopal
                </p>
                <span className="text-sm font-semibold text-[#0E1F47]">
                  ₹ 2.25 Cr
                </span>
              </div>
            </div>
            <div className="rounded-b-xl">
              {/* IMAGE BLOCK */}
              <div className="relative mb-2 w-full h-40 rounded-xl">
                <img
                  src="./villa2.jpg"
                  className="w-full h-full object-cover"
                />

                <div className="absolute flex gap-1 justify-center bg-[#4242427D] text-white rounded-xl w-20 top-3 left-3 group cursor-pointer">
                  <ShieldCheck className="w-4" /> <p>Rera</p>
                </div>
              </div>

              <div className="w-full py-4 h-40 shadow-2xl rounded-b-xl flex flex-col gap-2 justify-evenly px-4">
                <h3 className="text-xl font-semibold text-[#0E1F47] leading-tight">
                  Signature City
                </h3>
                <p className="text-sm text-[#707070] mt-2">
                  2 BHK Villa in Katara Hills, Bhopal
                </p>
                <span className="text-sm font-semibold text-[#0E1F47]">
                  ₹ 2.25 Cr
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
