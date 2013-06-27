#!/usr/bin/env node

/*
Check if a number is prime.
num: The number to check if it is prime.
return: true if num is a prime number, false if it is not.
*/
var isPrime = function(num)
{
	//get the square root of the number
	var sqRoot = Math.round(Math.sqrt(num));
	
	//peel off the decimal places
	sqRoot = Math.round(sqRoot);
	
	//check all number from 2 to the square root
	for (var i = 2; i <= sqRoot; i++)
	{
		//if the num is divisible with no remainder, it is not a prime number
		if (0 == (num % i))
		{
			return false;
		}
	}
	
	//the num is prime!
	return true;
}

/*
Get a list of prime numbers
sizeArray: the number of prime numbers to get
return: an array holding sizeArray number of prime numbers
*/
var listPrimes = function(sizeArray)
{
	//array to hold the list of prime numbers
	var arr = new Array();
	
	//the first number to check
	var curNum = 2;
	
	//get all the prime numbers bewteen 2 and sizeArray
	while (arr.length < sizeArray)
	{
		//check if the number is prime
		if (isPrime(curNum))
		{
			//if it is prime, add to the array
			arr.push(curNum);
		}
		
		//increment the number to check
		curNum++;
	}
	
	return arr;
}

/*
Put an array of items into CSV string
arr: the array to stringify
return: a string with all the elements of the array as comma separated values
*/
var toString = function(arr)
{
	return arr.join(",");
}

//get the correct number of prime nums!
var k = 100;
var out = toString(listPrimes(k));

//Write the numbers out to a file
var fs = require('fs');
var outfile = "primes.txt";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: \n" + out + "\nTo: " + outfile);