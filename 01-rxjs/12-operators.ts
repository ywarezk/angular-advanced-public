/**

operators gives us easy manipulation for data stream

datastream1$ ---+----------+--------+-------->
datastream2$ --------0---------0--------0---->


manipulation:
  -  Creating a new data stream
  -  take a data stream and change it
  
operators are functions

function interval(num) {
	return new Observalbe(...)
}

function map(cb) {
	return function(oldObservable) {
		
		return new Observable(...)
		
	}
}

 */
 
import { interval, Observable } from 'rxjs';
 
const counterInterval$: Observable<number> = interval(1000);

counterInterval$.subscribe((num: number) => {
	console.log(num);
})