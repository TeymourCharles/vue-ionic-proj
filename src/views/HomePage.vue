<template>
    <ion-page id="main-content">
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button class="menu-btn"></ion-menu-button>
          </ion-buttons>
          <a href="/tabs/loyaltypoints" style="text-decoration: none; color: black;">
            <ion-row class="">
              <ion-col class="ion-text-center ion-padding-top">
                <div class="crown-icon-box">
                    <img src="../assets/crown.png" style="width: 30px;" alt="crown icon">
                </div>
                </ion-col>
                <ion-col>
                  <p>0 points</p>
                </ion-col>
                <ion-col>
                  <div class="chevron-box-icon">
                    <ion-icon color="danger" :icon="chevronForward" />
                  </div>
                </ion-col>
              </ion-row>
            </a>
            <ion-avatar class="container-size ion-padding-end" aria-hidden="true" slot="end">
                <img style=" width: 40px; height: 40px;" alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-header class="ion-justify-content-center ion-margin-top ion-no-border">
          <ion-grid>
            <ion-row class="ion-text-start">
              <ion-col class="ion-margin-start" size="3">
                <img src="../assets/fastfood-img.png" class="fastfood-img-size" alt="fastfood image">
              </ion-col>
              <ion-col class="ion-align-self-center">
                <span class="padding-top">Anneoyong, Chou!</span>
                <h1 class="no-margin">What do you want to eat?</h1>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-header>
        <ion-searchbar class="search-bar-size" placeholder="try our new Steak Fries Veggies"></ion-searchbar>
        <ion-grid>
          <ion-row>
            <ion-col size="7">
              <h1 class="ion-margin-start no-margin font-weight" >Special Offers!</h1>
            </ion-col>
            <ion-col class="ion-text-end ion-align-self-center" size="4">
              <span class="ion-padding-end" style="color: rgb(183, 47, 47);">View All</span>
            </ion-col>
            <ion-col>
              <div class="chevron-box">
                <ion-icon class="" color="danger" :icon="chevronForward" />
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
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
        <a class="order-now-btn" slot="fixed" href="/tabs/orderpage">
          <ion-button style="width: 150px;" class="ion-margin-start round-logout-btn" color="danger">
            Order Now!
          </ion-button>
        </a>
      </ion-content>
    </ion-page>
  </template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonRow, IonCol } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons'

</script>

<style scoped>

.container-size {
    width:20%;
}

.added-margin-top {
  margin-top: 30px;
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
  width: 200px;
}

.order-now-btn {
  text-decoration: none;
  color:white;
  --border-radius: 15px;
  bottom: 30px;
  right: 33px;
}

.chevron-box {
  display: flex;
  align-items: center;
  height: 100%;
}

.crown-icon-box {
  display: flex;
  justify-content: center;
  margin-left: 20px;
}
</style>