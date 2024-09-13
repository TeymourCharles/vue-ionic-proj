<template>
  <ion-menu content-id="main-content">
    <ion-nav class="ion-no-border">
      <ion-toolbar class="">
        <ion-avatar aria-hidden="true" slot="start">
          <img class="ion-margin-start" alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <ion-row class="ion-justify-content-center">
          <ion-col class="ion-text-center ion-padding-top">
          </ion-col>
          <ion-col>
            <p>0 points</p>
          </ion-col>
          <ion-col>
            <div class="chevron-box-icon">
              <ion-icon :icon="chevronForward" />
            </div>
          </ion-col>
        </ion-row>
      </ion-toolbar>
      <h1 class="ion-padding-start no-margin ion-margin-top">Firstnme Lastname</h1>
      <span style="color: grey;" class="ion-margin-start" >+63 912 345 6789</span>
      <ion-list>
        <ion-item class="no-bottom-border">
          <ion-icon :icon="home" color="danger"/>
          <a class="no-underline ion-padding-start" href="/tabs/homepage">Home</a>
          
        </ion-item>
        <ion-item class="no-bottom-border">
          <ion-icon class="icon-opacity" :icon="fastFood"/>
          <a class="no-underline ion-padding-start" href="">Order Now!</a>
        </ion-item>
        <ion-item class="no-bottom-border">
          <ion-icon class="icon-opacity" :icon="notifications"/>
          <a class="no-underline ion-padding-start" href="">Notifications</a>
          <div slot="end" class="notif-bg ion-margin-end ion-text-center">4</div>
        </ion-item>
        <ion-item class="no-bottom-border">
          <ion-icon class="icon-opacity" :icon="storefront"/>
          <a class="no-underline ion-padding-start" href="">Store Locator</a>
        </ion-item>
        <ion-item>
          <ion-icon class="icon-opacity" :icon="helpCircle"/>
          <a class="no-underline ion-padding-start" href="">FAQ's</a>
        </ion-item>
        <ion-item class="no-bottom-border">
          <ion-icon class="icon-opacity" :icon="bagHandle"/>
          <a class="no-underline ion-padding-start" href="">My Orders</a>
          <div slot="end" class="notif-bg ion-margin-end ion-text-center">2</div>
        </ion-item>
        <ion-item class="no-bottom-border">
          <ion-icon class="icon-opacity" :icon="person"/>
          <a class="no-underline ion-padding-start" href="">My Account</a>
        </ion-item>
        <ion-item class="no-bottom-border">
          <ion-icon class="icon-opacity" :icon="heart"/>
          <a class="no-underline ion-padding-start" href="">My Favorites</a>
        </ion-item>
        <ion-item class="no-bottom-border">
          <ion-icon class="icon-opacity" :icon="location"/>
          <a class="no-underline ion-padding-start" href="">Order Tracker</a>
        </ion-item>
        <ion-item class="no-bottom-border">
          <ion-icon class="icon-opacity" :icon="time"/>
          <a class="no-underline ion-padding-start" href="">Order History</a>
        </ion-item>
      </ion-list>

      <ion-button style="width: 150px;" class="ion-margin-start round-logout-btn" color="danger">Logout</ion-button>
    </ion-nav>

    
  </ion-menu>
  <ion-page> 
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButton,
          IonList, IonItem
} from '@ionic/vue';
import { ellipse, 
        square, 
        triangle, 
        home, 
        fastFood, 
        notifications, 
        storefront,
        helpCircle, 
        bagHandle, 
        person, 
        heart, 
        location, 
        time, 
        chevronForward, 
        colorWandSharp 
} from 'ionicons/icons';
</script>

<style scoped>

.round-logout-btn {
  --border-radius: 15px;
    position: absolute;
    bottom: 45px;
}

.icon-opacity {
  opacity: 20%;
}

.notif-bg {
  width: 23px;
  height: 23px;
  background-color: orange;
  border-radius: 50px;
  color: white;
}

</style>
