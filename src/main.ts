import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const appConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // Initialize Firebase with environment config
    provideAuth(() => getAuth()), // Provide Firebase Auth instance
    provideFirestore(() => getFirestore()), // Provide Firestore instance
  ]
};

bootstrapApplication(AppComponent, appConfig);
