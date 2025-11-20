export default function HeroTitle() {
  return (
    <div className="relative w-full h-80 sm:h-82 md:h-100 overflow-hidden">
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
    </div>
  );
}
