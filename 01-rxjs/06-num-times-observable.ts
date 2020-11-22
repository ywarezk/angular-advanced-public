/**
---+---+---+---+---->
 */
 
import { Observable } from 'rxjs';

const howManyTimes$: Observable<number> = new Observable((observer) => {
	console.log('how many times does this run?');
	
	let counter = 0;
	
	setInterval(() => {
		observer.next(counter);
		counter++;
	}, 1000);	
	
});

howManyTimes$.subscribe((num: number) => {
	console.log(num);
});

howManyTimes$.subscribe((num: number) => {
	console.log(num);
});

howManyTimes$.subscribe((num: number) => {
	console.log(num);
});