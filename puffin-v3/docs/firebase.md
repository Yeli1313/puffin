---
id: firebase
title: Integrating Firebase
sidebar_label: Firebase
---

## Introduction
Firebase which is owned by Google provide multiple set of features more specifically focused on Mobile app and gradually bringing new features for web apps as well. 
Having a glance the URL : https://firebase.google.com/ can tell you every list of features they offer. Apart from confidential notes, we use firebase to allow you to 
- Check your app stability and Performance using their Crashlytics
- We use App Distribution to share pre-release built with you, so you can share with your team to test the app before it get's published
- It does bring you out of box features like Dynamic Links, Predictions, Cloud Messaging, etc.

Firebase done a good job of explaining each features through a short video on every page you navigate, so you will be educated if this is the first time you are using Firebase.

### Video: Configuring Firebase
See how to configure stripe for your marketplace. 
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyXP4BoVZr4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Step by Step

1. Go to [Firebase](https://firebase.google.com/?utm_source=tradly-platform&utm_campaign=portal&utm_medium=portal) 
2. Signup for a free account using your gmail account (It is recommended to have one GmailID or GoogleApps email for all your signup like this)
4. Create a new project as you see here ![fb-newproject](/img/fb-newproject.png)
3. Name your project ![fb-nameit](/img/fb-nameit.png)
3. As Google analytics comes on top of firebase and it's free. Consider enabling to get free mobile app analytics ![fb-enablega](/img/fb-enablega.png)
3. You will not find anything like ist... but you need to create your Google cloud solution account as well  ![fb-addgcp](/img/fb-addgcp.png)
3. From here you can go to upgrade your billing option as Blaze plan is necessary ![fb-upgrade](/img/fb-upgrade.png)
3. Choose Blaze plan which is pay as you go plan ![fb-blaze](/img/fb-blaze.png)
3. From here you can find the access control ![fb-users](/img/fb-users.png)
3. Add TradlyTeam email sent to you as owner ![fb-owner](/img/fb-owner.png)

Note: Blaze plan is mandatory to deploy push notification for chat messages



## Downloading Android JSON 
Downloading Android Plist Json from Firebase. Visit Project Settings > General > Find the JSON file in the body section. See the blue button as per the below screenshots. 

<img src="/img/firebase-json1.png" alt="Downloading Android Plist Json from Firebase" width="400"/>

<img src="/img/firebase-json2.png" alt="Downloading Android Plist Json from Firebase" width="400"/>

<img src="/img/firebase-json3.png" alt="Downloading Android Plist Json from Firebase" width="400"/>

## Applying Firebase Rules

Read below on how to create Realtime Database and apply realtime database rules.

1. Navigate to your firebase project on the Firebase console and select Realtime Database under Build section from left menu.
 <img src="/img/firebase-rules1.png" alt="Setting up firebase rules" width="400"/>
3. Click "Create Database"
 <img src="/img/firebase-rules2.png" alt="Setting up firebase rules" width="600"/>

4. Select desired storage location which is close to your country and click 'Next'.
 <img src="/img/firebase-rules3.png" alt="Setting up firebase rules" width="600"/>
 
5. Leave it in Locked Mode, click Enable.
 <img src="/img/firebase-rules4.png" alt="Setting up firebase rules" width="600"/>

6. Great! You have created Realtime Database successfully. Now let’s apply database rules. Select Rules tab and copy-paste below given rules and click Publish

```
{
  "rules": {
  "$env":{
      "users":{
         "$uid": 
         { 
           ".read": "auth != null"
         },
         ".write":"auth != null"       
  },
  "chats":{
   "$chatroom_id":{
    ".read":"auth != null && root.child($env+'/chats/'+$chatroom_id+'/users/'+auth.uid).exists()",
    ".write": "auth != null"
   }
  }
   }
}
}
```

<img src="/img/firebase-rules5.png" alt="Setting up firebase rules" width="800"/>