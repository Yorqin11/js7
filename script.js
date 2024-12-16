const initialArray = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(initialArray, 'boshlanishdagi array');

const evenNumbersArray = initialArray.filter(num => num % 2 === 0);
console.log(evenNumbersArray, 'juft sonlarga ajratilgan array');