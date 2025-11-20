export default function SellProperty() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-semibold tracking-wide text-black">
        HAVE A PROPERTY TO SELL
      </h2>

      <div
        className="mt-6 bg-[#7A25FF] rounded-2xl w-full py-10 px-6 sm:px-10 
           flex flex-col items-center justify-center text-center shadow-xl"
      >
        <p className="text-white font-semibold text-lg sm:text-xl">
          List your property & connect with clients faster!
        </p>

        <button
          className="mt-6 bg-white text-[#7A25FF] font-semibold 
             px-6 sm:px-8 py-2 rounded-xl shadow 
             hover:bg-gray-100 transition"
        >
          Sell Your Property
        </button>
      </div>
    </div>
  );
}
