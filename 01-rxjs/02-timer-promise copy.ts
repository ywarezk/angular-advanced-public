/**
 * Promise is resolved after 1 sec
 */


const timerPromise: Promise<number> = new Promise((resolve) => {
	
	setTimeout(() => {
		resolve(42);
	}, 1000)
	
});

timerPromise.then((meaningOfLife: number) => {
	console.log(meaningOfLife);
})