import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';

export const appConfig = [
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // <-- Correct usage here
  // Other Firebase-related providers can go here
];

