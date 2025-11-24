export default function Featured() {
  return (
    <div
      className="w-full max-w-7xl bg-white rounded-xl
    flex md:flex-row items-center md:justify-evenly
    xl:overflow-visible overflow-x-auto no-scrollbar
    gap-6 px-4 md:px-0 py-4"
    >
      <div
        className="flex-none
      w-full sm:w-[calc(50%-0.75rem)] md:w-60
      h-36 bg-[#F7FAFF] rounded-lg px-5 pb-3 flex flex-col"
      >
        <img src="./premiumProperty.png" className="w-20" />
        <h1 className="text-[#7511F6] font-semibold text-lg leading-tight mt-3">
          Premium Property
        </h1>
        <p className="text-[10px] text-[#7A7A7A] leading-tight mt-1">
          Instant access to zero brokerage properties
        </p>
      </div>

      <div
        className="hidden md:block self-stretch w-px
  bg-[repeating-linear-gradient(to_bottom,#9ca3af_0,#9ca3af_4px,transparent_4px,transparent_8px)]"
      ></div>

      <div
        className="flex-none
      w-full sm:w-[calc(50%-0.75rem)] md:w-60
      h-36 bg-[#F7FAFF] rounded-lg px-5 pb-3 flex flex-col"
      >
        <img src="./payOnCredit.png" className="w-20" />
        <h1 className="text-[#7511F6] font-semibold text-lg leading-tight mt-3">
          Pay on credit
        </h1>
        <p className="text-[10px] text-[#7A7A7A] leading-tight mt-1">
          Pay your rent using Credit Card
        </p>
      </div>

      <div
        className="hidden md:block self-stretch w-px
  bg-[repeating-linear-gradient(to_bottom,#9ca3af_0,#9ca3af_4px,transparent_4px,transparent_8px)]"
      ></div>

      <div
        className="flex-none
      w-full sm:w-[calc(50%-0.75rem)] md:w-60
      h-36 bg-[#F7FAFF] rounded-lg px-5 pb-3 flex flex-col"
      >
        <img src="./homeLoans.png" className="w-20" />
        <h1 className="text-[#7511F6] font-semibold text-lg leading-tight mt-3">
          Home Loans
        </h1>
        <p className="text-[10px] text-[#7A7A7A] leading-tight mt-1">
          Lowest Interest rate offers
        </p>
      </div>

      <div
        className="hidden md:block self-stretch w-px
  bg-[repeating-linear-gradient(to_bottom,#9ca3af_0,#9ca3af_4px,transparent_4px,transparent_8px)]"
      ></div>

      <div
        className="flex-none
      w-full sm:w-[calc(50%-0.75rem)] md:w-60
      h-36 bg-[#F7FAFF] rounded-lg px-5 pb-3 flex flex-col"
      >
        <img src="./propertyProtect.png" className="w-20" />
        <h1 className="text-[#7511F6] font-semibold text-lg leading-tight mt-3">
          Property Protect
        </h1>
        <p className="text-[10px] text-[#7A7A7A] leading-tight mt-1">
          Protection against cyber frauds
        </p>
      </div>
    </div>
  );
}
