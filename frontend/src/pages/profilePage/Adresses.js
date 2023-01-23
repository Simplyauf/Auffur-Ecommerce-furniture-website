export const Adresses = () => {
  return (
    <div className="w-[100] tablet:px-[6%] mb-20 xl:px-[4%] px-[4%] lg:px-[2%]">
      <h2 className="text-2xl text-center">Shipping details</h2>
      <div className="mt-16 flex flex-col gap-4 ">
        <div className="flex gap-4">
          <h4 className="font-bold">Postal Address :</h4>
          <span>opposite gneral hospital</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">Country :</h4>
          <span className="capitalize">Nigeria</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">City :</h4>
          <span className="capitalize">Lagos</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">Postal code :</h4>
          <span className="capitalize">889959</span>
        </div>
      </div>
    </div>
  );
};
