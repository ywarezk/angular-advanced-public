/**

  ---------+--|---->

 */
 
 
// promise can only resolve once
 
const helloPromise: Promise<string> = new Promise((resolve) => {
	resolve('hello listeners');
	// resolve('hello again');
});

helloPromise.then((greeting: string) => {
	console.log(greeting);
});