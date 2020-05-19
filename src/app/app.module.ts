import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { IdeasService} from 'src/app/services/ideas.service';
import { CreateComponent } from './container/create/create.component';
import { LoginComponent } from './login/login.component';
// import {  } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CreateComponent,
    LoginComponent,
    FilterPipe ,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [IdeasService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
