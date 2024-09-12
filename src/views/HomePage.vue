<template>
    <ion-page id="main-content">
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-row class="ion-justify-content-center">
                <ion-col class="ion-text-center ion-padding-top">
                </ion-col>
                <ion-col>
                    <p>0 points</p>
                    </ion-col>
                    <ion-col class="padding-chevron">
                    <ion-icon :icon="chevronForward" />
                </ion-col>
            </ion-row>
            <ion-avatar class="container-size ion-padding-end ion-padding-top" aria-hidden="true" slot="end">
                <img class="avatar-size" alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-header class="ion-justify-content-center ion-no-border">
          <ion-row class="ion-text-start" size="20">
            <ion-col class="ion-margin-start" size="2">
              <img src="../assets/fastfood-img.png" alt="fastfood image">
            </ion-col>
            <ion-col>
              <span class="padding-top">Anneoyong, Chou!</span>
              <h1 class="no-margin">What do you want to eat?</h1>
            </ion-col>
          </ion-row>
        </ion-header>
        
        <ion-searchbar class="search-bar-size" placeholder="try our new Steak Fries Veggies"></ion-searchbar>
        
        <h1 class="ion-margin-start no-margin">Special Offers</h1>
      </ion-content>
    </ion-page>
  </template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonRow, IonCol } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons'

</script>

<style scoped>

.avatar-size {
    width: 40px;
    height: 40px;
    
}
.container-size {
    width:20%;
}

.search-bar-size {
  --border-radius: 16px;
    height: 100px;
}

</style>