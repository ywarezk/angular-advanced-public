/**

-------+------+----+---+------>

 */
 
import { Observable, Subscription } from 'rxjs';

// {next: () => void}
const hello$: Observable<string> = new Observable((observer) => {
	observer.next('hello from observable');
	observer.next('hello again');
	
});

const sub: Subscription = hello$.subscribe(
	(greeting: string) => {
		console.log(greeting);
	}
);

sub.unsubscribe();

hello$.subscribe(
	(greeting: string) => {
		console.log(greeting);
	}
);

hello$.subscribe(
	(greeting: string) => {
		console.log(greeting);
	}
);