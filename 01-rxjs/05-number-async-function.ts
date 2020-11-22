/**
 * Promise is resolved after 1 sec
 */


const howManyTimes: Promise<number> = new Promise((resolve) => {
	console.log('How many times does this function run?');
	
	setTimeout(() => {
		resolve(42);
	}, 1000)
	
});

howManyTimes.then((meaningOfLife: number) => {
	console.log(meaningOfLife);
});

howManyTimes.then((meaningOfLife: number) => {
	console.log(meaningOfLife);
})

howManyTimes.then((meaningOfLife: number) => {
	console.log(meaningOfLife);
});