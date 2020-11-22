/**

-------+------+----+---->

 */
 
import { Observable } from 'rxjs';

// {next: () => void}
const hello$: Observable<string> = new Observable((observer) => {
	observer.next('hello from observable');
	observer.next('hello again');
});

hello$.subscribe((greeting: string) => {
	console.log(greeting);
});