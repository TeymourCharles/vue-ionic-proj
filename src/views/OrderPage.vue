<template>
    <ion-page id="main-content">
        <ion-header class="ion-no-border">
            <ion-toolbar class="y-padding">
                <ion-buttons slot="start">
                    <ion-menu-button class="menu-btn"></ion-menu-button>
                </ion-buttons>
                <ion-row class="">
                    <ion-col class="ion-text-center ion-align-self-center">
                        <h1 class="no-margin">Our Foods</h1>
                    </ion-col>
                    
                    <ion-col class="align-icon">
                        <ion-icon class="baghandle-icon" color="danger" :icon="bagHandle"/>
                    </ion-col>
                </ion-row>
                    
            </ion-toolbar>

            <ion-searchbar show-clear-button="always" :icon="optionsOutline" placeholder="try our new Beef Bibimbowl"></ion-searchbar>
            <ion-nav class="align-nav-btn margin-nav-btn">
                <div class="nav-btn selected-nav">
                    All
                </div>
                <div class="nav-btn">
                    Breakfast
                </div>
            
                <div class="nav-btn">
                    Chicken
                </div>
                <div class="nav-btn">
                    Seafood
                </div>
            </ion-nav>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row class="ion-margin-start ion-margin-end">
                    <ion-col class="first-col margin-col">
                        <a href="/tabs/placeorderpage">
                            <div class="align-img">
                                <div class="img-pos-absolute">
                                    <img src="../assets/beeffries-meal.png" alt="beef and fries">
                                </div>
                            </div>
                            <div class="margin-align">
                                <h6 class="no-margin margin-top-items font-size">Steak Fries Veggies</h6>
                                <span class="price">Meat</span>
                                <ion-row>
                                    <p class="font-style">P 175</p>
                                    <div class="align-icons-star">
                                        <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                        <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                        <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                        <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                        <ion-icon class="ion-text-align-end" color="warning" :icon="starHalf"/>
                                    </div>
                                </ion-row>
                            </div>
                        </a>
                    </ion-col>
                    <ion-col class="first-col margin-col">
                        <div class="align-img">
                            <div class="img-pos-absolute">
                                <img src="../assets/salad.png" alt="salad">
                            </div>
                        </div>
                        <div class="margin-align">
                            <h6 class="no-margin margin-top-items font-size">Chicken Salad</h6>
                            <span>Chicken</span>
                            <ion-row>
                                <p class="font-style">P 172</p>
                                <div class="align-icons-star">
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="starHalf"/>
                                </div>
                            </ion-row>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="ion-margin-start ion-margin-end">
                    <ion-col class="first-col margin-col">
                        <div class="align-img">
                            <div class="img-pos-absolute">
                                <img src="../assets/ice-cream.png" alt="Ice cream with code">
                            </div>
                        </div>
                        <div class="margin-align">
                            <h6 class="no-margin margin-top-items font-size">Sorvetes Primavera</h6>
                            <span>Dessert</span>
                            <ion-row>
                                <p class="font-style">P 185</p>
                                <div class="align-icons-star">
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="starHalf"/>
                                </div>
                            </ion-row>
                        </div>
                    </ion-col>
                    <ion-col class="first-col margin-col">
                        <div class="align-img">
                            <div class="img-pos-absolute">
                                <img src="../assets/chicken-meal.png" alt="chicken">
                            </div>
                        </div>
                        <div class="margin-align">
                            <h6 class="no-margin margin-top-items font-size">Fried Chicken</h6>
                            <span>Chicken</span>
                            <ion-row>
                                <p class="font-style">P 175</p>
                                <div class="align-icons-star">
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="starHalf"/>
                                </div>
                            </ion-row>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="ion-margin-start ion-margin-end">
                    <ion-col class="first-col margin-col">
                        <div class="align-img">
                            <div class="img-pos-absolute">
                                <img src="../assets/beeffries-meal.png" alt="beef and fries">
                            </div>
                        </div>
                        <div class="margin-align">
                            <h6 class="no-margin margin-top-items font-size">Steak Fries Veggies</h6>
                            <span>Meat</span>
                            <ion-row>
                                <p class="font-style">P 175</p>
                                <div class="align-icons-star">
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="starHalf"/>
                                </div>
                            </ion-row>
                        </div>
                    </ion-col>
                    <ion-col class="first-col margin-col">
                        <div class="align-img">
                            <div class="img-pos-absolute">
                                <img src="../assets/salad.png" alt="salad">
                            </div>
                        </div>
                        <div class="margin-align">
                            <h6 class="no-margin margin-top-items font-size">Chicken Salad</h6>
                            <span>Chicken</span>
                            <ion-row>
                                <p class="font-style">P 172</p>
                                <div class="align-icons-star">
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                                    <ion-icon class="ion-text-align-end" color="warning" :icon="starHalf"/>
                                </div>
                            </ion-row>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
            
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar } from '@ionic/vue'
import { bagHandle, chevronForward, optionsOutline, star, starHalf } from 'ionicons/icons'
</script>

<style scoped>

.y-padding {
    padding-top: 7px;
    padding-bottom: 5px;
}

.first-col {
    height: 250px;
    background-color: rgb(242, 237, 237);
}

.second-col {
    height: 250px;
    background-color: rgb(242, 237, 237);
}

.nav-btn {
    background-color: rgb(242, 237, 237);
    padding: 10px;
    border-radius: 12px;
    padding-left: 17px;
    padding-right: 17px;
    color:rgb(119, 118, 118);
    font-size: 13px;
}

.selected-nav {
    background-color:rgb(212, 56, 56);
    color: white;
}

.margin-col {
    margin:5px;
    border-radius: 16px;
}

.align-nav-btn {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.margin-nav-btn {
    margin-bottom: 8px;
}

.align-img {
    display: flex;
    justify-content: center;
    align-items: center;
}

.margin-top-items {
    margin-top: 40px;
}

.font-size {
    font-size: 15px;
    font-weight: bold;
    color:black;
}

.price {
    color: black;
}

.margin-align {
    margin: 7px;
    position: absolute;
    bottom: 5px;
}



.img-pos-absolute {
    position: absolute;
    bottom: 120px;
}

</style>
