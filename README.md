# Firebase + Anguar and Deploy on Firebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6. and created for use firebase database and deploy on that.

So today many developer work with database like MySql, MongoDB etc.. but let's we implement projecct in cloud database called firebase.
some of you know firebase and some of you don't know, it's a google prduct where provide authentiction, data storage, analytics and many more functionality provide.


We are going to cover 3 topic as given bellow

1. Firebase
2. Angular 
3. Deploy

## 1. Firebase

Before implement it you must have google account and with that login to firebase console with this link https://console.firebase.google.com/.

now you can create project with any name as you like and there is Web configuration you can find.

Let get start with steps

Step 1) Visit Firebase  and login with google account.

Step 2) Now click on "Add project" ![add project](https://prnt.sc/sjdh4k) then enter application related information and click on "create".

Step 3) Next click on "Web App" ![web app](https://prnt.sc/sjdit0) icon to get configuration text with app secret info which we will add in our Application to communicate with services related to this Firebase project.

Angular 9|8 CRUD Operations using Firebase and Firestore Database in Angular Application Tutorial
Last updated on May 9, 2020 Jolly.Exe
In this post, we will implement the Firebase database in Angular 9 project. Firebase provides a cloud-based service Firestore, it is a NoSQL database that is very fast and easy to create and maintain.
In our example app, we will have Database CRUD operations which are commonly known as Create, Delete, Update, and Delete. These are the basic database operation which is used in most of the real-world application. To keep out app simple to understand we will not have routing.
 

Let’s start with our Angular 9 Firestore application which will have a Students data to perform CRUD operations.

Also See: Firestore CRUD Operation in Ionic 4 Application

Create a new Angular 9 project
$ ng new Angular9Firestore
$ cd Angular9Firestore
then for Routing select no as in this application we will not use create any new component, for styling we choose SCSS.

Create a Firebase Project
If you already having any Firebase project, you can use that or follow these steps to create one and enable Firestore database. After creating a Firebase project we will use credentials in our Angular Application.
 

Step 1) Visit Firebase here then click on Get Started if you have not created an account yet.

Step 2) Click on "Add project" then enter app related information click on "create"

Step 3) Next click on "Web App" icon to get configuration text with app secret info which we will add in our Application to communicate with services related to this Firebase project.

Step 4) Now enable Firestore Database service in your Firebase project.

Click on "Database" in the left sidebar, then click on "+ Add collection" enter name "test" you can add anything you want. Here we are creating example data for test. Then hit "Next"

On next screen delete the record on focus for this example or you can enter any dummy row data. We will add directly from App. After deleting then hit Save

Now we have Firebase project and Firestore Database with a collection "test" is ready, the next step is to connect our Application with Firebase and Firestore Database.


Step 5) Add configuration in angular project in environment.ts file

example : 
firebaseConfig : {
    apiKey: "YOUR_apiKey",
    authDomain: "YOUR_authDomain",
    databaseURL: "YOUR_databaseURL",
    projectId: "YOUR_projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId",
    measurementId: "measurementId"
  }


## 2. Angular