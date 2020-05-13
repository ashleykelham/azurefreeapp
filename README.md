# azurefreeapp
This repo is part of a medium article to show how to deploy a full stack app for very little money in Azure. This is the applications front end written in Angular.

# Requirements
[Node](https://nodejs.org/en/)

### Run the application

``` 
    cd my-app
    npm install
    ng serve 
```

### Build application ready for deployment

Install Azure Storage into VSCode

```
ng build --prod --build-optimizer
```

Deploy /dist/my-app directory to Azure Storage using upload button