/**

How to handle errors in your async code

 */
 
/**

@Injectable()
export class StamService {
	
	// sync
	// do i catch the exception? but sometimes this is not possible
	// do i let the exception bubble out?
	doSomething(arr: string[]) {
		try {
			return arr[10].indexOf('Yariv') !== -1;	
		} catch(err) {
			
		}
		
		another kind of code that can throw error
		
		try {
			dangerouscode	
		} catch(err) {
			do something generic
			throw err
		}
		
	}
	
}

 */
 
