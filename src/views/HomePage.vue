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
            <ion-avatar class="container-size ion-padding-end" aria-hidden="true" slot="end">
                <img class="avatar-size" alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-header class="ion-justify-content-center ion-margin-top ion-no-border">
          <ion-row class="ion-text-start" size="20">
            <ion-col class="ion-margin-start" size="3">
              <img src="../assets/fastfood-img.png" class="fastfood-img-size" alt="fastfood image">
            </ion-col>
            <ion-col class="ion-align-self-center">
              <span class="padding-top">Anneoyong, Chou!</span>
              <h1 class="no-margin">What do you want to eat?</h1>
            </ion-col>
          </ion-row>
        </ion-header>
        
        <ion-searchbar class="search-bar-size" placeholder="try our new Steak Fries Veggies"></ion-searchbar>
        
        <ion-row>
          <ion-col>
            <h1 class="ion-margin-start no-margin font-weight" >Special Offers!</h1>
          </ion-col>
          <ion-col class="ion-text-end ion-align-self-center" size="4">
            <span class="ion-padding-end text-color">View All</span>
            <ion-icon class="" color="danger" :icon="chevronForward" />
          </ion-col>
          
        </ion-row>
        <ion-item class="no-bottom-border">
          <img class="ion-margin-start ion-margin-top round-img img-size-slide" src="../assets/fastfood-slide-img.png" alt="image slide">
          
          <img class="ion-margin-start ion-margin-top round-img img-size-slide" src="../assets/fastfood-slide-img.png" alt="image slide">
        </ion-item>

        <h1 class="ion-margin-start added-margin-top no-margin font-weight">Category</h1>
        <ion-item class="no-bottom-border">
          <img class="ion-margin-start ion-margin-top round-img img-size-category" src="../assets/chicken-category.png" alt="image slide">
          <span class="text-position-one">Chicken</span>
          <img class="ion-margin-start ion-margin-top round-img img-size-category" src="../assets/chicken-category.png" alt="image slide">
          <span class="text-position-two">Seafoods</span>
        </ion-item>
        
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
  --border-radius: 10px;
    height: 100px;
}

.added-margin-top {
  margin-top: 30px;
}

.text-color {
  color: rgb(183, 47, 47);
}

.text-position-one {
  position: absolute;
  color: white;
  bottom:5px;
  left:50px;
}

.text-position-two {
  position: absolute;
  color: white;
  bottom:5px;
  left:290px;
}

.fastfood-img-size {
  width: 100px;
  height: 100px;
}



</style>