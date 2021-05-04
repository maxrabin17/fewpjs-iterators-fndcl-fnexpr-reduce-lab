const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const totalBatteries = totalBatteries.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

    const totalBatteries = batteryBatches.reduce(
        (accumulator , currentValue) => accumulator + currentValue
    );
