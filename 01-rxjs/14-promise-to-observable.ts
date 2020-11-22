/**

-----------+-|----->

promise ---> observable


---+-----+-----+-|------>
---+-----+-----+-X------>

observable ---> promise

 */


// from promise to observable 
import { from, interval } from 'rxjs';
import { take } from 'rxjs/operators';
 
const convertMeToObservable: Promise<number> = new Promise((resolve) => {

	setTimeout(() => {
		resolve(42);
	}, 1000)

});

// send one pulse of 42 and close
const timerObs$ = from(convertMeToObservable);


// observable to promise
// 0..1..2..3..
const interval$ = interval(1000)

// pending Promise
// resolved
const intervalPromise$: Promise<number> =  interval$.pipe(
	take(3)
).toPromise();

intervalPromise$.then((num) => {
	console.log(num);
});


