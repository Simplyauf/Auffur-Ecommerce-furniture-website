import { useSelector } from "react-redux";

export const AccountInformation = () => {
  const { userData } = useSelector((state) => state.userAuth);

  return (
    <div className="w-[100] tablet:px-[6%] mb-20 xl:px-[4%] px-[4%] lg:px-[2%]">
      <h2 className="text-2xl text-center">Account Information</h2>
      <div className="mt-16 flex flex-col gap-4">
        <h3 className="text-xl ">Personal information</h3>
        <div className="flex gap-4">
          <h4 className="font-bold">Email :</h4>
          <span>{userData.email}</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">Username :</h4>
          <span>{userData.username}</span>
        </div>
      </div>
      <div className="mt-16 flex flex-col  gap-4">
        <h3 className="text-xl ">Customer metrics</h3>
        <div className="flex gap-4">
          <h4 className="font-bold">Year joined :</h4>
          <span>2022</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">Complete purchases :</h4>
          <span>0</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">Value of purchases :</h4>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
