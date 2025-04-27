import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';


const firebaseConfig = {
  apiKey: "AIzaSyAvDKCf6gqpBqNLqQIP1niw2l7LOqg5lm8",
  authDomain: "blog-app-14f9a.firebaseapp.com",
  projectId: "blog-app-14f9a",
  storageBucket: "blog-app-14f9a.firebasestorage.app",
  messagingSenderId: "58097777474",
  appId: "1:58097777474:web:ac9f4e333f03e2e83e26db",
  measurementId: "G-T98PW0NSNZ"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()) ,
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    })

  ]
};
