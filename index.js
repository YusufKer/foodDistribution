function foodDistribution(foodArray){

    let amountOfFood = foodArray[0];
    const hungryPeople = foodArray.splice(1);
    const amountOfPeople = hungryPeople.length;
    hungryPeople.sort((a,b) => b - a);

    // Least amount of food needed to get everyone to the same level = sum of everyones hunger levels - ( least hungry persons hunger level * amount of people in total);
    // const lowestNumber = Math.min(...hungryPeople);
    // const sumOfHunger = hungryPeople.reduce((item,a) => item + a)
    // const leastAmountNeeded = sumOfHunger - (lowestNumber * amountOfPeople);
    // return [amountOfFood, ...hungryPeople];
    // return [amountOfFood, ...hungryPeople];

    // Is there any food to give?
    if(amountOfFood === 0) return [amountOfFood, ...hungryPeople];
    // Is there enough food to satisfy everyone equally?

    for(let i = 0; i < amountOfPeople; i++){
        if(hungryPeople[i] === hungryPeople[i + 1]) continue;
        if(i === amountOfPeople - 1){
            hungryPeople[i] = hungryPeople[i] - 1;
            amountOfFood --;
            break;
        }
        if(hungryPeople[i] > hungryPeople[i + 1]){
            hungryPeople[i] = hungryPeople[i] - 1;
            amountOfFood --;
            break;
        }
        if(hungryPeople[i] < hungryPeople[i + 1]){
            hungryPeople[i + 1] = hungryPeople[i + 1] - 1;
            amountOfFood --;
            break;
        }
        amountOfFood --;
    }
    return foodDistribution([amountOfFood, ...hungryPeople]);
}


const x = foodDistribution([5,3,1,2,1]);

setTimeout(()=>{
    console.log({x})
},2000);


module.exports = {
    foodDistribution
}