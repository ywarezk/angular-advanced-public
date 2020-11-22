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

datastream1$ ---0---1---2---3---4-->
datastream2$ ---0-------2-------4-->
datastream3$ ---h0------h2------h4-->

 */
 
import { interval, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
 
const counterInterval$: Observable<string> = interval(1000).pipe(
	filter((num) => {
		return num % 2 === 0;
	}),
	map((num: number) => {
		return `hello world ${num}`
	})
);

counterInterval$.subscribe((hello: string) => {
	console.log(hello);
})