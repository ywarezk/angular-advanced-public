# Redux

ngrx redux implementation for angular

manage the data inspired by redux.

## State

```
{
  user: {
    firstName: 'Yariv',
    lastName: 'Katz'  
  },
  
  todo: {
    tasks: []
  }
  
  dashboard: {
    graph: ...
  }
}
```

## Store

- store holds the state
- one store
- the only way to change the state
```
store.dispatch(action)
store.dispatch({type: 'something happened', payload: some data})
```
- the state is immutable
- which means dispatch will replace the state with a new object.
- 
```
const store = createStore({
  user: userReducer,
  todo: todoReducer,
  dashboard: dashboardReducer
})
```

## Action

- describes something that happened in your app
- an action has a name

```
'[auth] user login'
```

- an action has simple structure

```
{
  type: '[auth] user login',
  payload: user
}
```

## Reducer

```
function(state, action): new state
```

```
function userReducer(userState = {
  firstName: '', lastName
}, action) => new state
```
