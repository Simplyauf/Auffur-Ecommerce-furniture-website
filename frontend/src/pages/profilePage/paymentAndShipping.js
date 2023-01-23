export const PaymentAndShipping = () => {
  return (
    <div className="w-[100] tablet:px-[6%] mb-20 xl:px-[4%] px-[4%] lg:px-[2%]">
      <h2 className="text-2xl text-center">Shipping details</h2>
      <div className="mt-16 flex flex-col gap-4 ">
        <div className="flex gap-4">
          <h4 className="font-bold">Delivery method:</h4>
          <div className=" p-4 max-w-[200px] flex-col rounded-sm bg-neutralColor flex  gap-4">
            <h4 className="mb-2 font-medium text-center">Standard rate</h4>
            <h5 className="font-bold text-center">$5.00 USD</h5>
            <span className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laborum? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
