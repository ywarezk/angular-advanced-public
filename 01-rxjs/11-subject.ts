/**
 * - one data stream for many listeners
 * - subject does not wrap async function
 ---+------------------------>
 ---+--+---------------------->
 -------------+---------------->
 
 --------+--------+----L---->
 */
 
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

const hello$: Subject<string> = new Subject();

hello$.next('hello');
hello$.next('world');

// hello$.complete();
// hello$.error(new Error());

hello$.subscribe(
	(msg: string) => {
		console.log(msg);
	}
)

hello$.next('foo');
hello$.next('bar');

hello$.subscribe(
	(msg: string) => {
		console.log(msg);
	}
)



// hello$.asObservable();

const saveLastValue$: BehaviorSubject<number> = new BehaviorSubject(42);

saveLastValue$.next(1);

saveLastValue$.subscribe((numOne) => {
	
})