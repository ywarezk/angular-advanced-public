

import { merge, Observable, Subject } from 'rxjs';

const abc: Subject<string> = new Subject();
const def: Subject<string> = new Subject();

const unitedObs$: Observable<string> = merge(abc, def);


unitedObs$.subscribe((letter: string) => {
	console.log(letter);
});


abc.next('a');

def.next('d');

abc.next('b');

def.next('e');

abc.next('c');

def.next('f');