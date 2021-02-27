# s2dostlar
Offical S2 DOSTLAR Web App

# Firebase Setup
  Create a Firebase Project from Firebase console. (Enable Google Analytics if you wish)
  
  Add your project a Web App.
  
  Note your Firebase SDK Config somewhere.

## Authentication Setup
  Enable Email/Password sign in method. 

## Firestore Setup
  Just click the 'Get Started' button.
  
  Data Structure for DarkChat(ChatApp):
  
    collection('messages') => document(AutoID) => field(createdAt).(timeStamp)
                                               => field(photoURL).(String)
                                               => field(text).(String)
                                               => field(uid).(String)
                                                   
## Storage Setup
  Folder Structure for profile photos in DarkChat(ChatApp):
   ### gs://your-app-id.appspot.c/users/{uid}/profile.jpg
    
Install Firebase to your project with npm:

  `npm i -g firebase-tools`

Log in to Firebase using your Google account:

  `firebase login`
  
## Hosting Setup
  1) Run: 
  
    `firebase init`
  
    !! Make sure that you are in the right directory you would use for deployment !! 
  
  2) Choose 'Hosting'
  
  3) Choose your project 
  
  4) Name your deployment directory (public)
  
  5) Choose no for single-page app configiration
  
  
# Reactjs Setup
  Create your react app:
  
    `npx create-react-app my-app`
    
  Install Firebase:
  
    `npm i firebase`
    
  Install React Firebase Hooks
  
    `npm i react-firebase-hooks`
    
  Copy-paste your Firebase Web App config in '/src/firebase.js' file.
    
# Deploying to Firebase
  Build your app for production:
  
    `npm run build`
  
  Copy-paste files inside your created 'build' folder to inside your deploymnet directory (public)
  
  Run:
  
    `firebase deploy`
  
  
  # DONE!
