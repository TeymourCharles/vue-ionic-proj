<template>
    <ion-page id="main-content">
        <ion-header class="ion-no-border">
            <ion-toolbar class="y-padding">
                <ion-buttons slot="start">
                    <ion-menu-button class="menu-btn"></ion-menu-button>
                </ion-buttons>
                <ion-row>
                    <ion-col size="7" class="ion-text-center ion-align-self-center">
                        <h1 class="no-margin">Loyalty Points</h1>
                    </ion-col>
                </ion-row>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid class="grid">
                <ion-row>
                    <ion-col size="2">
                        <img style="width: 80px;" src="../assets/crown.png" alt="crown">
                    </ion-col>
                    <ion-col class="ion-align-self-center">
                        <h3 class="no-margin">Beginner Tier</h3>
                    </ion-col>
                    <ion-col size="3" class="ion-text-end">
                        <p style="color: rgb(212, 6, 6);">View all</p>
                    </ion-col>
                    <ion-col size="1">
                        <div class="chevron-box">
                            <ion-icon class="" color="danger" :icon="chevronForward" />
                        </div>
                    </ion-col>
                    
                </ion-row>
                <ion-row>
                    <ion-col class="ion-padding-start">
                        <p class="no-margin des-style">
                            Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orcu luctus et.
                        </p>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <div class="pink-circle-box relative-pos">
                <img class="pink-circle-img" src="../assets/pink-circle.png" alt="pink circle">
                <h1 class="score-text">0 / 160</h1>
            </div>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-align-self-center">
                        <h1 class="no-margin ion-margin-start" style="font-weight: bold;">Rewards</h1>
                    </ion-col>
                    <ion-col size="4" class="ion-text-end" style="color: rgb(212, 6, 6);">
                        <p>How it Works</p>
                    </ion-col>
                    <ion-col size="1">
                        <div class="chevron-box">
                            <ion-icon class="" color="danger" :icon="chevronForward" />
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid class="grid-nav ion-margin-end ion-margin-start">
                <ion-row>
                    <ion-col class="nav-col-selected" size="2">
                        All
                    </ion-col>
                    <ion-col class="nav-col" size="3">
                        Beginner
                    </ion-col>
                    <ion-col class="nav-col" size="4">
                        Intermediate
                    </ion-col>
                    <ion-col class="nav-col" size="2">
                        Loyal
                    </ion-col>
                </ion-row>
                <ion-row class="row-box">
                    <ion-col size="4">
                        <div class="img-reward-box">
                            <img src="../assets/beeffries-meal.png" style="width: 100px;" alt="beef fries">
                        </div>
                    </ion-col>
                    <ion-col>
                        <h6 class="no-margin" style="margin-top: 5px; font-weight: bold;">Steak Fries Veggies</h6>
                        <p class="no-margin" style="margin-top: 4px;">Steak</p>
                        <div class="crown-points-box ion-align-items-end">
                            <img src="../assets/crown.png" style="width: 30px; margin-top: 10px;" alt="crown icon">
                            <p class="no-margin" style="margin-left:8px;">20 points</p>
                        </div>
                        
                        
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">

import { IonPage, IonHeader, IonToolbar, IonRow, IonCol, IonIcon, IonMenuButton, IonButton } from '@ionic/vue';
import { bagHandle, chevronForward } from 'ionicons/icons';


</script>

<style scoped>

.chevron-box {
    display: flex;
    height: 100%;
    align-items: center;
}

.grid {
    margin-top: 20px;
}

.des-style {
    color:rgb(151, 150, 150);
}

.pink-circle-img {
    width: 220px;
}

.pink-circle-box {
    display: flex;
    justify-content: center;
    margin: 20px 0px 20px 0px;
}

.score-text {
    position: absolute;
    top: 75px;
    font-weight: bold;
}

.relative-pos {
    position: relative;
}

.nav-col {
    background-color: rgb(241, 238, 238);
    height: 45px;
    margin: 3px 3px 3px 3px;
    border-radius: 16px;
    align-content: center;
    text-align: center;
    color: rgb(151, 150, 150);
}

.nav-col-selected {
    background-color:rgb(201, 3, 3);
    height: 45px;
    margin: 3px 3px 3px 3px;
    border-radius: 16px;
    align-content: center;
    text-align: center;
    color: white;
}

.row-box {
    height: 100px;
    background-color: rgb(241, 238, 238);
    margin: 15px 0px 0px 0px;
    border-radius: 16px;
}


.img-reward-box {
    display: flex;
    align-items: center;
    height: 100%;
}

.crown-points-box {
    display: flex;
}
</style>