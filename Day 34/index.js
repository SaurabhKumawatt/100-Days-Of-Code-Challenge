console.log("Day 34 - 100 Days Of Code Challenge");

// strings in JS

const firstName = "Saurabh"
const lastName = " Kumawat"

// console.log(firstName);
// console.log(lastName);

// console.log("Hello " + firstName + lastName + ", How Are You?");
// console.log(`Hello ${firstName}${lastName}, How Are You?`);

const str = new String("Saurabh")
console.log(str);

// lenght of string
console.log(str.length);

// uppercase string
console.log(str.toUpperCase());


// lowercase string
console.log(str.toLowerCase());

// character at index
console.log(str.charAt(3));

// index of character
console.log(str.indexOf("r"));

// slice string using substring
console.log(str.substring(3, 6));

// slice string using slice
console.log(str.slice(-3, 7));

// trim white space of string
const newStr = new String("    Saurabh   ")
console.log(newStr);
console.log(newStr.trim());

// replace string 
const url = "https://www.google.com/saurabh%20kumawat";
console.log(url.replace("%20", "-"));

// check url have a value or not using include
console.log(url.includes("saurabh"));
console.log(url.includes("saur"));
console.log(url.includes("Indore"));

// split string
// const str1 = "The-quick-brown-fox-jumps-over-the-lazy-dog."
const str1 = 'The quick brown fox jumps over the lazy dog.';
console.log(str1.split(' '));

// for changing anchor tag url in html
const contentString = "Saurabh-Kumawat";
console.log(contentString.anchor("https://www.google.com/saurabh-kumawat"));

// big for big tag in in html element 
console.log(contentString.big());



