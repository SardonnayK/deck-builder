import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'deck-builder-8846f',
          appId: '1:321987806733:web:dcab0107cf6a70ecea7744',
          storageBucket: 'deck-builder-8846f.appspot.com',
          apiKey: 'AIzaSyCu258wSs8lvgA0aKeDjJl9ErX-CCtRwaY',
          authDomain: 'deck-builder-8846f.firebaseapp.com',
          messagingSenderId: '321987806733',
          measurementId: 'G-SXY9VN26ZM',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
