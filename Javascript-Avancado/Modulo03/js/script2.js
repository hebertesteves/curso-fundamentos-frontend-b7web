let day = new Date();

console.log(day);
console.log(day.toDateString());
console.log(day.toUTCString());
console.log(day.toString());

let day1 = new Date(2027, 0, 1, 12, 30, 12);
console.log(day1);

let day2 = new Date("2020-01-01 15:42:17");
console.log(day2);

let day3 = new Date(2022, 2);
console.log(day3);

let day4 = new Date(0); // 01 Jan 1970
console.log(day4.toUTCString());

let day5 = new Date();
console.log(day5.getFullYear());
console.log(day5.getMonth());
console.log(day5.getDay());
console.log(day5.getDate());
console.log(day5.getHours());
console.log(day5.getMinutes());
console.log(day5.getSeconds());
console.log(day5.getMilliseconds());
console.log(day5.getTime());
console.log(Date.now());
