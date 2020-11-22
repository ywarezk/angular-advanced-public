/**

-------+------+----|---->

 */
 
import { Observable } from 'rxjs';

// {next: () => void}
const hello$: Observable<string> = new Observable((observer) => {
	observer.next('hello from observable');
	observer.next('hello again');
	
	observer.next('some final data');
	observer.complete();
});

hello$.subscribe(
	(greeting: string) => {
		console.log(greeting);
	},
	(err) => {
		console.log(err.message);
	},
	() => {
		console.log('finished');
	}
);