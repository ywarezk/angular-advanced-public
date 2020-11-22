/**
---+---+---+---+---->
 */
 
import { Observable } from 'rxjs';

const interval$: Observable<number> = new Observable((observer) => {
	
	let counter = 0;
	
	setInterval(() => {
		observer.next(counter);
		counter++;
	}, 1000);	
	
});

interval$.subscribe((num: number) => {
	console.log(num);
});