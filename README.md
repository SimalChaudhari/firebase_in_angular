# Firebase + Anguar and Deploy on Firebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6. and created for use firebase database and deploy on that.

> So today many developer work with database like **MySql, MongoDB** etc.. but let's we implement projecct in cloud database called **firebase**.
some of you know firebase and some of you don't know, it's a google prduct where provide authentiction, data storage, analytics and many more functionality provide.


we are going to cover 3 topic as given bellow

1. Firebase
2. Angular 
3. Deploy

## 1. Firebase

- Before implement it you must have google account and with that login to firebase console with this link https://console.firebase.google.com/.

- now you can create project with any name as you like and there is Web configuration you can find.

**Let get start with steps**

**Step 1** Visit Firebase  https://console.firebase.google.com/ and login with google account.

**Step 2** Now click on `Add project` https://prnt.sc/sjdh4k  then enter application related information and click on `create`.

**Step 3** Next click on `Web App` https://prnt.sc/sjdit0 icon to get configuration text with app secret info which we will add in our Application to communicate with services related to this Firebase project.

**Step 4** Now enable Firestore Database service in your Firebase project.

Click on `Database` in the left sidebar, then click on `+ Add collection` enter name `test` you can add anything you want. Here we are creating example data for test. Then hit `Next`

On next screen delete the record on focus for this example or you can enter any dummy row data. We will add directly from App. After deleting then hit Save

Now we have Firebase project and Firestore Database with a collection `test` is ready, the next step is to connect our Application with Firebase and Firestore Database.


**Step 5** Add configuration in angular project in `environment.ts` file

```sh
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
```


## 2. Angular

**Step 1** Create new project with `ng new myApp`

**Step 2** Put firebase configurtion in `environment.ts`  file.

**Step 3** Now generate component and install firebase with bellow command.
`npm i --save firebase @angular/fire`

**Step 4**  Go to `app.module.ts` and import firebase modue as bellow
```sh
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';



  imports: [
    ....,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
```

**Step 5**  Now Create  service file `ideas.service.ts` with firebase function
```sh

import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class IdeasService {
    constructor(private firestore: AngularFirestore) { }

    getIdeas() {
        return this.firestore.collection('ideas').snapshotChanges();
    }

    createIdeas(data: any){
        return this.firestore.collection('ideas').add(data);
    }

    updateIdeas(data: any){
        delete data.id;
        this.firestore.doc('ideas/' + data.id).update(data);
    }

    deleteIdeas(Id: any){
        this.firestore.doc('ideas/' + Id).delete();
    }
  }
  ```
**Note** Above `ideas` is a collection(table) name for operation.

**Step 6** Now import service in component


```sh
import { IdeasService} from 'src/app/services/ideas.service'    

export class ContainerComponent{
    ideas: any[];
    items: Observable<any[]>;
    searchText:string = "";

    constructor(private ideasService: IdeasService) {}
    
    ngOnInit() {
        this.ideasService.getIdeas().subscribe(data => {
            this.ideas = data.map(e => {
                return {
                id: e.payload.doc.id,
                MainIdea: e.payload.doc.data()['MainIdea'],
                abstract: e.payload.doc.data()['abstract'],
                concept: e.payload.doc.data()['concept'],
                createdDate: e.payload.doc.data()['createdDate'],
                keywords: e.payload.doc.data()['keywords'],
                sharingLevel: e.payload.doc.data()['sharingLevel'],
                user_id: e.payload.doc.data()['user_id'],
                };
            })
        });
    }
}
```

`component.html`
```sh

        <div class="margin_set" *ngFor="let idea of ideas">
            <div class="search_detail">
                <p class="Implement">{{idea.MainIdea ? idea.MainIdea : ''}}</p>
                <p class="idea">{{idea.keywords ? idea.keywords : ''}}</p>
            </div>
        </div>
```


**Step 7** Run the project and check in browser.

## 2. Deploy

**Make sure that configuration code is available in environment.prod.ts file as well.**

  **Step 1**  Make builld file with `ng build` or `npm run build` command

  **Step 2** Install the firebase commmand line tool with bellow command
           `npm install -g firebase-tools`

  **Step 3**  Press bellow command in your project directory and login with your firebase accout.
          `firebase login`

  **Step 4** Initialize the prject with `firebase init`
           now there will be asked few question and if you want to deploye only then select 
          ` Firebase CLI features…: Hosting`

   `Public directory : dist`

   `Configure as single-page app : Y`

   `Overwrite index.html: No.`
 

   **Step 5**   Now press the `firebase deploy` command and it will take few minutes to deploye project on firebase and at the end
   it will generate deploye URL so you can copy and paste URL in browser and check it.

