

const hoursPerDay= 8
const costPerHour= 89


const dayRate= (ratePerHour)=> {
    let operation= ratePerHour * 8
    return( operation)
}

const daysInBudget= (budget, hourRate)=>{
    let day= dayRate(hourRate, hoursPerDay);
    let totalDays= budget / day;
    let roundedDown= Math.floor(totalDays)

    return ( roundedDown)
}

const discountedRate = (ratePerHour, numDays, discount) => {
  let total = 0;
  let billableDays = 22;
  let ratePerDay = dayRate(ratePerHour);

  let totalMonths = Math.floor(numDays / billableDays);
  let remainingDays = numDays % billableDays;

  let pricePerMonthWithDiscount = ratePerDay * billableDays * totalMonths;
  let pricePerRemainingDays = ratePerDay * remainingDays;

  if (discount === 0) {
      total = pricePerMonthWithDiscount + pricePerRemainingDays;
  } else {
      // Apply the discount to the entire pricePerMonthWithDiscount term
      total = Math.ceil(pricePerMonthWithDiscount * (1 - discount) + pricePerRemainingDays);
  }

  return total;
}





console.log("daily rate " + dayRate(hoursPerDay, costPerHour));
console.log("budget " + daysInBudget(835, 12))
console.log(discountedRate(89, 230, 0.42))