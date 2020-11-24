# @angular/cli

## Workspace VS Project/application

workspace angular - multiple angular web sites  
you can place in a workspace angular libraries.  

## Application

- website

## Project

- number websites

## Monorepository

every angular website is under one workspace.  
every project in one workspace

## workspace per project

- workspace nerdeez
  
  - workspace alison
  - workspace bugeez
  - workspace academeez

workspace per project  
number of websites

- number of website
- libraries


## summary

- workspace has number application, libraries  
- libraries can bring utils to different application.  
- If Im creating something that can serve me in multiple application, I should place it in a library.

## Summary commands

- generate a new workspace
```bash
npx @angular/cli new <workspace-name> --create-application=false
```

- create website in the workspace
```bash
npx ng g application <name-of-site>
```

- start development server for a website

```bash
npx ng serve <name-of-site>
```

- create new library

```
npx ng g library <name-of-library>
```

- create in library something

```
npx ng g c Hello --project @nz/hello
```



## Lesson Plan

- creating a workspace
- creating application in the workspace
- creating a library
- tsconfig paths
- version control of library
- ivy renderer
- aot / jit
- reduce bundle size

## EX.

- create a library called `@exlibris/auth`
- In that library create an interceptor called `JWTInterceptor`
- That interceptor should grab from the `localStorage` the `token` key where the JWT token is stored 
- After getting the token, the interceptor should update the request headers and add the following header:

```
{
	Authorization: Bearer <token>
}
```
- In the library we created, also create an `@NgModule` that module should register the interceptor we created.
- Does the `@NgModule` need to include in the `imports` array the `HttpClientModule` ?
- create an application that will use the library you created.
- To use the library modify the `paths` in the `tsconfig.json` to map to the source file if using the import from `@exlibris/auth@dev`.
- create a simple app that sends a request to the server when you click a button: 
https://nztodo.herokuapp.com/api/tasks/?format=json
- place a random jwt token in the localStorage and verify that the request is sent with the proper Authorization header.