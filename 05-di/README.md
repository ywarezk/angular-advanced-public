# Advanced Dependency Injection

In this lesson we will cover advanced topics regarding the DI.

## Lesson Plan

- Basic DI
- Injector
- Injector Tree
- DI Decorators
- Providers
- InjectionToken
- Module static create method

## EX.

In our `@angular/cli` lesson, we created a library called `@nz/auth` which provides us with common authentication utilities that we can reuse in all of our angular apps.  
That library expose a module.  
You can continue the solution I gave for that ex.  

- The `AuthModule` should be configurable.

```
interface AuthModuleConfig {
	tokenFactory: () => string
}

@NgModule({
	...
})
export class AuthModule {
	static create(config: AuthModuleConfig): ModuleWithProviders {
		...
	}
}
```

- In the configuration you are getting a function that will return the token.
- You will need to use `InjectionToken` to store that function
- You will need to grab the `tokenFactory` in the interceptor and use it to grab the token (instead of taking the token from the `localStorage`)

## EX.

Your job is to create different interceptors for different modules.