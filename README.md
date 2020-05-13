# # Azure free full stack app demo: Application
This repo is part of a medium article to show how to deploy a full stack app for very little money in Azure. This is the applications front end written in Angular.

### Requirements

* [Node](https://nodejs.org/en/)
* Azure Subscription
* [VSCode](https://code.visualstudio.com/) 
* [Azure Function Core Tools VSCode plugin](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash)


### Run locally

``` 
    cd my-app
    npm install
    ng serve 
```

You can then navigate to localhost:4200 in your browser

### How to deploy

Run the following command in the *./my-app* directory to build the distributable

```
ng build --prod --build-optimizer
```

* Go to the *Azure* tab in VSCode.
* In the *STORAGE* section select *Deploy to static website*
* Select the *./dist/my-app* directory to deploy
* Follow the onscreen instructions to select the subscription and storage account to deploy it to