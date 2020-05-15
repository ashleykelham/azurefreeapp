# # Azure free full stack app demo: Application
This is part of a [Medium article](https://medium.com/@ashley.kelham/developing-a-startup-on-azure-for-under-1-407c3b290d36). The articles explains the infrastrcuture setup. 

It shows how to deploy a full stack app for very little money in Azure. This is the applications front end written in Angular.

### Requirements

* [Node](https://nodejs.org/en/)
* Azure Subscription
* [VSCode](https://code.visualstudio.com/) 
* [Azure Function Core Tools VSCode plugin](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash)


### Run locally
In the enviroment.ts file replace *ADD_ME* with the URL for your function app you have set up in the Medium article. This sgould include the full domain and trailing forward slash e.g. https://*yourapp*.azurewebsites.net/

``` 
    cd my-app
    npm install
    ng serve 
```

You can then navigate to localhost:4200 in your browser

### How to deploy
In the enviroment.prod.ts file set the apiUrl for your Api. This should include the full path e.g. https://*yourApiManagementInstance*.azure-api.net/azurefreeapp/httptriggeranime

Also set the apiKey to match your Azure Api Management subscription key.

Run the following command in the *./my-app* directory to build the distributable

```
ng build --prod --build-optimizer
```

* Go to the *Azure* tab in VSCode.
* In the *STORAGE* section select *Deploy to static website*
* Select the *./dist/my-app* directory to deploy
* Follow the onscreen instructions to select the subscription and storage account to deploy it to