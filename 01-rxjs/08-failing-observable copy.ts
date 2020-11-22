/**

-------+------+----X---->

 */
 
import { Observable } from 'rxjs';

// {next: () => void}
const hello$: Observable<string> = new Observable((observer) => {
	observer.next('hello from observable');
	observer.next('hello again');
	
	// do not do this because of convention
	// possible
	// observer.error('something happened');
	
	observer.error(new Error('something happened'));
	
	// meaningless
	// observer.next('hello again');
});

hello$.subscribe(
	(greeting: string) => {
		console.log(greeting);
	},
	(err) => {
		console.log(err.message);
	}
);