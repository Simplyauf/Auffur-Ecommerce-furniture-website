//This sets the values of the remaining period in a state and then display it into the ui
export const setValuesOfCountdownPeriod = (timeDiffToLastDayOfTheMonthMS, setPeriodsToLastDayOfTheMonth) => {
  //conversion to milliseconds(ms)
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const onemin = 60 * 1000;
  const oneSec = 1000;

  // get the values of each remaining period by dividing the timeDiffToLastDayOfTheMonthMS millisconds value with converted period milliseconds and getting the remainder
  setPeriodsToLastDayOfTheMonth(() => {
    return {
      days: Math.floor(timeDiffToLastDayOfTheMonthMS / oneDay),
      mins: Math.floor((timeDiffToLastDayOfTheMonthMS / onemin) % 60),
      secs: Math.floor((timeDiffToLastDayOfTheMonthMS / oneSec) % 60),
      hours: Math.floor((timeDiffToLastDayOfTheMonthMS / oneHour) % 24),
    };
  });
};

export const countDownToTheEndOfTheMonth = (
  clearCountDownToLastDayOfTheMonth,
  lastDayOfTheCurrentMonth,
  setIsCurrentDateLastDayOfTheMonth,
  setPeriodsToLastDayOfTheMonth
) => {
  let timeDiffToLastDayOfTheMonthMS = lastDayOfTheCurrentMonth.getTime() - new Date().getTime();

  setIsCurrentDateLastDayOfTheMonth(new Date().getDate() === lastDayOfTheCurrentMonth.getDate());

  if (timeDiffToLastDayOfTheMonthMS <= 0) {
    clearTimeout(clearCountDownToLastDayOfTheMonth);
    return;
  }

  setValuesOfCountdownPeriod(timeDiffToLastDayOfTheMonthMS, setPeriodsToLastDayOfTheMonth);
};

// this is the countdown on the day of deal
export const countDownOnTheLastDayOfTheMonth = (
  clearLastDayOfMonthCount,
  lastDayOfTheCurrentMonth,
  setIsCurrentDateLastDayOfTheMonth,
  setPeriodsToLastDayOfTheMonth
) => {
  let EndingOfcurrentDate = lastDayOfTheCurrentMonth;
  EndingOfcurrentDate = EndingOfcurrentDate.setHours(23, 59, 59, 999);
  let getRemainingTimeToEndingOfTheLastDayOfTheMonth = EndingOfcurrentDate - new Date().getTime();

  setIsCurrentDateLastDayOfTheMonth(new Date().getDate() === lastDayOfTheCurrentMonth.getDate());

  if (getRemainingTimeToEndingOfTheLastDayOfTheMonth <= 0) {
    clearTimeout(clearLastDayOfMonthCount);
    return;
  }

  setValuesOfCountdownPeriod(getRemainingTimeToEndingOfTheLastDayOfTheMonth, setPeriodsToLastDayOfTheMonth);
};
