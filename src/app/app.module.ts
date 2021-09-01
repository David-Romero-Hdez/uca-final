import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp({ ... })),
    provideFirestore(() => getFirestore()),
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_CLOUD_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
