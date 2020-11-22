/**

  ---------X---->

 */
 
 
// promise can only resolve once
/**
 promise can be in one of the following state:
 - pending ---> resolved / rejected
 */
const failingPromise: Promise<string> = new Promise((resolve, reject) => {
	reject(new Error('something happened'));
	
	// meaningless to call reject twice
	// reject(new Error('something happened'));
	
	// resolve('meaningless to call resolve after reject')
});

helloPromise.then(
	(greeting: string) => {
		console.log(greeting);
	},
	(err: Error) => {
		console.log(err.message);
	}
);