// 1
let result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

// 2
let email = "myemail@email.org";
console.log(email.includes("@") ? `String "${email}" contains "@" symbol` : `String "${email}" doesn\`t contain "@" symbol`);
console.log(`Length of ${email} string: ${email.length}`);

// 3
let myWord = "My";
let nameWord = "name";
let isWord = "is";
let fullName = myWord + " " + nameWord + " " + isWord + " ";
fullName += "Viktor";
console.log(fullName);

// 4
const userName = prompt("Ваше ім'я: ");
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);