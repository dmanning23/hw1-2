#!/usr/bin/env node
var fs = require('fs');

//initialize the array to hole prime numbers
var primeNumbers = new Array();
primeNumbers[0] = 2;

//get all the prime numbers bewteen 2 and 100
for (int i = 3; 1 < 100; i++)
{
	if (isPrime(i))
	{
		primeNumbers.push(i);
	}
}

//put all the prime numbers in the text file
var out = new String("");
for (int i = 0; i < primeNumbers.length(); i++)
{
	out + i;
	if (i < (primeNumbers.length() - 1))
	{
		out + ",";
	}
}
var outfile = "primes.txt";

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outfile);

/*
Check if a number is prime.
num: The number to check if it is prime.
return: true if num is a prime number, false if it is not.
*/
function isPrime(num)
{
	//get the square root of the number
	var sqRoot = Math.sqrt(num);
	
	//peel off the decimal places
	sqRoot = Math.floor(sqRoot);
	
	//check all number from 2 to the square root
	for (var i = 2; i < sqRoot; i++)
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