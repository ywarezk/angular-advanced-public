# Change Detection

## When does angular need to run cd

- when the data is updated
  - server returned something
  - user did something that effected the data
- timer
- websocket
- ngOnInit
- routing

something async happened (action, server, ...)

## Automatic change detection

angular can automatically detect that something async happened and trigger cd

