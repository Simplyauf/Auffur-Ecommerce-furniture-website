import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState, useMemo } from "react";
import { countDownOnTheLastDayOfTheMonth, countDownToTheEndOfTheMonth } from "../../../utils/countDownFns";

export const DealOfTheMonth = () => {
  const [periodToLastDayOfTheMonth, setPeriodsToLastDayOfTheMonth] = useState({ days: 0, mins: 0, secs: 0, hours: 0 });

  const startDateInDateFormat = new Date();
  let currentMonth = startDateInDateFormat.getMonth();
  let currentYear = startDateInDateFormat.getFullYear();
  let lastDayOfTheCurrentMonth = new Date(currentYear, currentMonth + 1, 0);

  const [isCurrentDateLastDayOfTheMonth, setIsCurrentDateLastDayOfTheMonth] = useState(
    new Date().getDate() === lastDayOfTheCurrentMonth.getDate()
  );

  useEffect(() => {
    if (!isCurrentDateLastDayOfTheMonth) {
      let clearCountDownToLastDayOfTheMonth = setInterval(() => {
        countDownToTheEndOfTheMonth(
          clearCountDownToLastDayOfTheMonth,
          lastDayOfTheCurrentMonth,
          setIsCurrentDateLastDayOfTheMonth,
          setPeriodsToLastDayOfTheMonth
        );
      }, 1000);
    } else if (isCurrentDateLastDayOfTheMonth) {
      // endingOfTheLastDayOfTheMonth is the last milliseconds of the lastDayOfTheMonth

      let clearLastDayOfMonthCount = setInterval(() => {
        countDownOnTheLastDayOfTheMonth(
          clearLastDayOfMonthCount,
          lastDayOfTheCurrentMonth,
          setIsCurrentDateLastDayOfTheMonth,
          setPeriodsToLastDayOfTheMonth
        );
      }, 1000);
    }
  }, [isCurrentDateLastDayOfTheMonth]);

  return (
    <section>
      <h1 className="font-bold text-[36px] mb-8 text-center ">Deal of the Week</h1>
      <div className="w-[100%] md:w-[100%] md:gap-[5%] lg:gap-0 lg:justify-between bg-neutralColor  pb-14 gap-7 md:order-1 flex flex-col md:pl-0  md:flex-row md:py-0 md:min-h-[500px] md:pr-[1%] lg:pr-[3%]">
        <div className="w-[100%] md:max-h-[500px] max-h-[450px] h-[450px] md:h-[500px] min-h-[400px] md:mx-0 mx-auto md:basis-[52%]">
          <img
            className="w-[100%]  h-[100%]"
            src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="md:basis-[42%] tablet:pl-[6%] pl-[4%] md:pl-0 md:order-2 md:flex-col md:flex md:gap-4 md:mt-8 lg:px-[2%] lg:basis-[45%]">
          <h2 className="text-3xl tablet:text-4xl font-bold max-w-[400px]">Get -90% from this Furniture set</h2>
          <div className="flex gap-[0.9rem] md:[0.8rem] w-[96%] lg:gap-[0.9rem] md:w-[100%] tablet:w-[88%]  tablet:py-4 max-w-[372px]  md:max-w-[392px] lg:max-w-[450px] items-start bg-primaryColor text-white font-bold font-RobotoCondensed py-2 justify-center mt-8 mr-auto">
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-2xl tablet:text-3xl lg:text-3xl ">{periodToLastDayOfTheMonth.days}</span>
              <span className="text-xs tablet:text-sm  lg:text-sm  tracking-wider">DAYS</span>
            </div>
            <span className="text-2xl tablet:text-3xl lg:text-3xl">:</span>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-2xl tablet:text-3xl lg:text-3xl ">{periodToLastDayOfTheMonth.hours}</span>
              <span className="text-xs tablet:text-sm  lg:text-sm tracking-wider">HOURS</span>
            </div>
            <span className="text-2xl tablet:text-3xl lg:text-3xl">:</span>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-2xl tablet:text-3xl lg:text-3xl  ">{periodToLastDayOfTheMonth.mins}</span>
              <span className="text-xs tablet:text-sm  lg:text-sm tracking-wider">MINUTES</span>
            </div>
            <span className="text-2xl tablet:text-3xl lg:text-3xl">:</span>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-2xl tablet:text-3xl lg:text-3xl  ">{periodToLastDayOfTheMonth.secs}</span>
              <span className="text-xs tablet:text-sm  lg:text-sm tracking-wider">SECONDS</span>
            </div>
          </div>
          <h2 className="my-4 md:my-4 font-bold font-RobotoCondensed text-xl tablet:text-2xl lg:text-2xl inline-block">
            <span>Availability :</span> <span className="mr-2">1</span>
          </h2>
          <button className=" text-primaryColor min-w-[150px] max-w-[160px] bg-transparent border-[1px] border-primaryColor cursor-pointer rounded-sm h-[52px] tablet:[52px] tablet:w-[154px] w-[20%] gap-2 justify-center  flex items-center font-bold font-RobotoCondensed ">
            <span> Buy Now</span>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
