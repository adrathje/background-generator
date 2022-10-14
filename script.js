// falt() returns a new array with all sub-array elements concatenated into it
const array = [1,[2,3],[4,[5]]];
// parameters = specified depth, default is 1.
array.flat(2);
// returns [1,2,3,4,5]

//Also works well for clearing empty inputs
let entries = ['bob', 'sally',,,,,,,,,'cindy'];
entries = entries.flat(50);
// returns ['bob', 'sally', 'cindy']

//flatmap()
entries.flatMap(names => names + '!');
//['bob!', 'sally!', 'cindy!']
const array3 = array.flatMap(number => number + '!');
//['1!', '2,3!', '4,5!']


//trimStart(), trimEnd()
userEmail1 = '      sefseffef@gmail.com';
userEmail2 = 'sefseffef@gmail.com      ';
userEmail1 = userEmail1.trimStart(); // 'sefseffef@gmail.com'
userEmail2 = userEmail2.trimEnd(); // 'sefseffef@gmail.com'


//Object.fromEntries 
//Creating an object from an array, if no "key" is given, it will be undefined.
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['blankBoy', 30]];
const obj = Object.fromEntries(userProfiles);
//blankBoy: 30
//commanderTom: 23
//derekZlander: 40

//Try and Catch for errors
try {
	//Try this code here.
	4 + bob
} catch (errorName){ //"(errorName)" is now optional!

	//If there are any errors, catch them and do something here.
	console.log('You done messed up, SON. Error: ' + errorName);
}