# homework-3-js

#### 1) Write a function `splitAndMerge`  
Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and then merge each characters with the specified `sp`; at last merge all the words(Use separator space) and return it.

##### Example: 
`splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"`  
`splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"`
 
#### 2) Write a function `convert`
Convert a hash into an array. Nothing more, Nothing less.  
` {name: 'Jeremy', age: 24, role: 'Software Engineer'}`    
should be converted into  
`[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
`
#### 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.  
##### Example:
`toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"`  
`toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"`

#### 4) Write a function that takes a sentence (string) and reverses each word in the sentence.
##### Example:
`" A fun little challenge! " => " A nuf elttil !egnellahc "`  

#### 5) Write a function `stringExpansion`  
Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurance of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.  
`stringExpansion('3D2a5d2f') === 'DDDaadddddff'`  
If there are two consecutive numeric characters the first one is ignored.  
`stringExpansion('3d332f2a') === 'dddffaa'`  
If there are two consecutive alphabetic characters then the first character has no effect on the one after it.  
`stringExpansion('abcde') === 'abcde'`  
Your code should be able to work for both lower and capital case letters.  
