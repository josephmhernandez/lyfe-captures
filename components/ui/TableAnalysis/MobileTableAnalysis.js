const MobileTableAnalysis = () => {
  return (
    <div>
      {/* Sticky header that persists for the div */}
      <div className="flex sticky top-0 opacity-100 bg-primary-white-bg dark:bg-gray-800">
        <h1 className="w-1/2 text-lg font-bold p-[1vh] text-center">
          MapYourMemory
        </h1>
        <h1 className="w-1/2 text-lg font-bold p-[1vh] text-center">
          Other Printing Services
        </h1>
      </div>

      <h2 className="text-md font-bold p-[1vh] text-center">
        Free Digital Print
      </h2>
      <div className="flex justify-center pb-[2vh] text-gray-700">
        <p className="w-1/2 text-center text-gray-900">✅</p>
        <p className="w-1/2 text-center text-gray-900">❌</p>
      </div>

      <h2 className="text-md font-bold p-[1vh] text-center">
        Pricing (24" 36" Acrylic)
      </h2>
      <div className="flex justify-center pb-[2vh] text-gray-700">
        <p className="w-1/2 text-center">$249</p>
        <p className="w-1/2 text-center">
          $399 (Lowest custom printing service we can find)
        </p>
      </div>

      <h2 className="text-md font-bold p-[1vh] text-center">Customization</h2>
      <div className="flex justify-center pb-[2vh] text-gray-700">
        <p className="w-1/2 text-center">100% Customizable*</p>
        <p className="w-1/2 text-center">Tools available</p>
      </div>

      <h2 className="text-md font-bold p-[1vh] text-center">Free Shipping</h2>
      <div className="flex justify-center pb-[2vh] text-gray-700">
        <p className="w-1/2 text-center">Free Continental U.S.</p>
        <p className="w-1/2 text-center">Free</p>
      </div>

      <h2 className="text-md font-bold p-[1vh] text-center">
        Quality Material
      </h2>
      <div className="flex justify-center pb-[2vh] text-gray-700">
        <p className="w-1/2 text-center">Acrylic</p>
        <p className="w-1/2 text-center">Paper</p>
      </div>

      <h2 className="text-md font-bold p-[1vh] text-center">High Definition</h2>
      <div className="flex justify-center pb-[2vh] text-gray-700">
        <p className="w-1/2 text-center">300 DPI</p>
        <p className="w-1/2 text-center">Not listed</p>
      </div>

      <h2 className="text-md font-bold p-[1vh] text-center">Hanging Kit</h2>
      <div className="flex justify-center pb-[2vh] text-gray-700">
        <p className="w-1/2 text-center">Free</p>
        <p className="w-1/2 text-center">Additional Cost </p>
      </div>
    </div>
  );
};

export default MobileTableAnalysis;
