# Dependency Injection

## How to DI is built

### Injector

```
Injector = {
  'hello': StamService,
  'foo': OtherService
}
```

```
Injector = new Map({
  OtherService: new OtherService,
  StamService: new StamService(),
  HttpClient: new HttpClient(),
  hello: 'world'
})
```

### Trees Injectors

             Injector Parent
             
        Injector Child        Injector Child2
        
  Injector Grandchild


- Element injector tree
- Module injector tree

### Element Injector tree

                      Injector {} AppComponent
          
    Injector P {'hello': [...]}          Injector ElementInjectorTree {'hello': '...'}
    
### Modules Injector tree

Injector for every lazy loaded module, providers + imports

### Angular DI Search algo

- Search in the element tree
- if not found search the module tree
    
