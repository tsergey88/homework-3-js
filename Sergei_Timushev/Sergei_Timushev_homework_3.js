// 1) Write a function splitAndMerge

function splitAndMerge(str, sp) {
    const words = str.split(' '); // divide the sentence into words
  
    words.forEach(function (val,key) {
        let char = val.split('');
        words[key] = char.join(sp);
    });
  
    let newStr = words.join(' ');
    return newStr;
}

splitAndMerge("My name is Gates, Bill Gates ))", " ");

// 2) Write a function convert

function convert(obj) {
    let arr = [];
    for (let key in obj) {
        let temp = [];
        temp.push(key);
        temp.push(obj[key]);
        arr.push(temp);
    }
    return arr;
}

convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' });

// 3) Write a function toCamelCase

function toCamelCase(str) {
    let sentence = str.split('-'); //divide the sentence into words with separator like "-"
    //if separator is not like "-", then divide the sentence into words with separator like "_"
    if (sentence.length == 1) {
        sentence = str.split('_');
    }
    let words = '';
    for (let i = 1; i < sentence.length; i++) {
        // first char to Upper
        words += (sentence[i][0].toUpperCase());
        for (let j = 1; j < sentence[i].length; j++) {
            // char to lower
            words += (sentence[i][j].toLowerCase());
        }
    }
    // merge first word (without change) with same words
    sentence = sentence[0] + words;
    return sentence;
}

toCamelCase("The_Stealth_Warrior");

// 4) Write a function that takes a sentence (string) and reverses each word in the sentence.

function reverses(str) {
    let string = str.split('').reverse().join('');
    string = string.split(' ').reverse().join(' ');

    return string;

}

reverses(" A fun little challenge! ");

// 5) Write a function stringExpansion

function stringExpansion(str) {
    // if string is without chars, then write current string
    if (str.trim() === '') {
        console.log(str);
    } else {
        let string = '';
        for (let i = 0; i < str.length; i++) {
            // if char is nummeric and next char is not nummeric, then write next char "i" times
            if ((!isNaN(str[i])) && (isNaN(str[i + 1]))) {
                string += (str[i + 1].repeat(str[i]));
                i++;
                // else "i" is char, write this in string
            } else if (isNaN(str[i])) {
                string += str[i];
            }
        }
        return string;
    }
}

stringExpansion('3D2a5d2f3d332f2aabcde');
