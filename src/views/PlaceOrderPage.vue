<template>
    <ion-page id="main-content">
        <ion-header class="ion-no-border">
            <ion-toolbar class="y-padding">
                <ion-buttons slot="start" class="chevron-btn">
                    <a href="/tabs/orderpage"><ion-icon class="chevron-icon" :icon="chevronBack"/></a>
                </ion-buttons>
                <ion-row class="">
                    <ion-col class="ion-text-center ion-align-self-center" size="4">
                        <h1 class="no-margin">Meat</h1>
                    </ion-col>
                    
                    <ion-col class="align-icon">
                        <ion-icon class="baghandle-icon" color="danger" :icon="bagHandle"/>
                    </ion-col>
                </ion-row>
                    
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="box">
                <img class="beeffries-img" src="../assets/beeffries-meal-lg.png" alt="beef fries veggies large image">
            </div>
            <div class="bg-heart">
                <ion-icon class="heart-icon" color="danger" :icon="heartOutline"/>
            </div>
            <div class="ion-margin-start">
                <h4 class="h4-font-weight">Steak Fries Veggies</h4>
                <div class="align-icons-star">
                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                    <ion-icon class="ion-text-align-end" color="warning" :icon="star"/>
                    <ion-icon class="ion-text-align-end" color="warning" :icon="starHalf"/>
                </div>
                
            </div>
            <div class="div-content">
                <p class="no-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium distinctio ipsum mollitia. 
                    Voluptatem ullam eveniet exercitationem tenetur sunt. Numquam, ratione! Minima facere dolorum veritatis 
                    ipsum sit temporibus, numquam impedit mollitia.</p>
            </div>
            <ion-grid>
                <ion-row>
                    <ion-col size="7" class="ion-align-self-start">
                        <p class="p-font-style no-margin">P 175</p>
                    </ion-col>
                    <ion-col class="remove-add-icon-col">
                        <div class="remove-add-icon-bg">
                            <ion-icon class="" color="danger" :icon="removeOutline"/>
                        </div>
                    </ion-col>
                    <ion-col class="quantity-col ion-align-self-center">
                        <p class="quantity no-margin">1</p>
                    </ion-col>
                    <ion-col class="remove-add-icon-col">
                        <div class="remove-add-icon-bg">
                            <ion-icon class="" color="danger" :icon="addOutline"/>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <h1 class="no-margin ion-margin-start beverages-title">Beverages</h1>
            <div class="select-align">
                <div class="select-main-bg">
                    <p class="no-margin ion-margin-start choosebev-opacity">Choose Beverages</p>
                    <div class="select-option-bg">
                        <select class="select-option" name="select-option" id="select-option">
                            <option value="Coke">Coke</option>
                            <option value="Juice">Juice</option>
                            <option value="Pineapple">Pineapple</option>
                        </select>
                    </div>
                </div>
            </div>
            <ion-grid>
                <ion-row class="margin-row-sizes">
                    <ion-col>
                        <div class="selected-sizes">
                            Regular
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="sizes">
                            Large
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="sizes">
                            X-Large
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <h1 class="no-margin ion-margin-start ion-margin-top addons-title">Add-Ons</h1>
            <div class="box-addons-one">
                <ion-grid>
                    <ion-row>
                        <ion-col size="3">
                            <img src="../assets/tomato-sauce.png" alt="tomato sauce">
                        </ion-col>
                        <ion-col>
                            <h6 class="no-margin">Tomato Sauce</h6>
                            <span>Sauce</span>
                            <p class="no-margin p-tag-price">P 49</p>
                        </ion-col>
                        <ion-col>
                            <ion-row class="ion-justify-content-end checkbox-icon">
                                <ion-checkbox color="secondary" value="option"></ion-checkbox>
                            </ion-row>
                            <ion-row>
                                <ion-col class="remove-add-icon-addons-bg">
                                    <div class="remove-add-icon-addons-bg">
                                        <ion-icon class="" color="danger" :icon="removeOutline"/>
                                    </div>
                                </ion-col>
                                <ion-col class="quantity-col ion-align-self-center">
                                    <p class="quantity no-margin">1</p>
                                </ion-col>
                                <ion-col class="remove-add-icon-addons-bg">
                                    <div class="remove-add-icon-addons-bg">
                                        <ion-icon class="" color="danger" :icon="addOutline"/>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
            <div class="box-addons-one">
                <ion-grid>
                    <ion-row>
                        <ion-col size="3">
                            <img src="../assets/white-rice.png" alt="white rice">
                        </ion-col>
                        <ion-col>
                            <h6 class="no-margin">White Rice</h6>
                            <span>Rice</span>
                            <p class="no-margin p-tag-price">P 25</p>
                        </ion-col>
                        <ion-col>
                            <ion-row class="ion-justify-content-end checkbox-icon">
                                <ion-checkbox color="secondary" value="option"></ion-checkbox>
                            </ion-row>
                            <ion-row>
                                <ion-col class="remove-add-icon-addons-bg">
                                    <div class="remove-add-icon-addons-bg">
                                        <ion-icon class="" color="danger" :icon="removeOutline"/>
                                    </div>
                                </ion-col>
                                <ion-col class="quantity-col ion-align-self-center">
                                    <p class="quantity no-margin">1</p>
                                </ion-col>
                                <ion-col class="remove-add-icon-addons-bg">
                                    <div class="remove-add-icon-addons-bg">
                                        <ion-icon class="" color="danger" :icon="addOutline"/>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
            <div class="transparent-box"></div>
            
            <ion-button id="open-custom-dialog" class="round-addtobag-btn addtobag-btn" slot="fixed" color="danger">
                Add to bag
            </ion-button>
            

            <ion-modal id="example-modal" ref="modal" class="" trigger="open-custom-dialog">
                <div class="wrapper">
                
                    
                    <div class="thumbsup-box">
                        <img src="../assets/thumbs-up.png" alt="">
                    </div>
                    
                    <h5>Successfully Added!</h5>

                    <p class="no-margin">What do you want to do now?</p>

                    <a href="/tabs/ordersummary">
                        <ion-button class=""  color="danger">
                            Proceed to Checkout
                        </ion-button>
                    </a>

                    <div class="add-more">
                        <a href="/tabs/orderpage">Add More</a>
                    </div>
                    
                </div>
            </ion-modal>

        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage,
    IonHeader,
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    IonRow, 
    IonCol, 
    IonGrid, 
    IonSelect, 
    IonSelectOption,
    IonModal,
    IonList,
    IonItem,
    
} from '@ionic/vue'; 
import { addOutline, 
    bagHandle, 
    chevronBack, 
    codeSlash, 
    heartOutline, 
    personCircle, 
    removeOutline, 
    star, 
    starHalf 
} from 'ionicons/icons';

import { ref } from 'vue';

const modal = ref();

const dismiss = () => modal.value.$el.dismiss();

</script>

<style scoped>

ion-modal#example-modal {
    --width: fit-content;
    --min-width: 330px;
    --height: fit-content;
    --border-radius: 16px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}

ion-modal#example-modal h5 {
    margin: 3px 20px 10px 20px;
    text-align: center;
    font-weight: bold;
}

ion-modal#example-modal p {
    text-align: center;
    color: rgb(151, 150, 150);
}

ion-modal#example-modal div a ion-button{
    
    margin-top:25px;

    
}

ion-modal#example-modal div a {
    display: flex;
    justify-content: center;
    color:red;
    text-decoration: none;
    margin-bottom:20px;

    
}

ion-modal#example-modal img{
    margin-left: 40%;
    margin-top: 10px;

}

.box {
    height: 300px;
    background-color: rgb(242, 237, 237);
    margin: 15px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.heart-icon {
    font-size: 30px;
}

.bg-heart {
    background-color: white;
    width: max-content;
    padding: 10px;
    padding-bottom: 3px;
    border-radius: 16px;
    position:absolute;
    top:290px;
    right: 50px;
    box-shadow: 1px 1px 11px -8px;
}

.h4-font-weight {
    font-weight: bold;
}

.div-content {
    margin: 21px;
    color: rgb(149, 147, 147);
}

.p-font-style {
    color: red;
    font-weight: bold;
    margin-left: 18px;
    font-size: 30px;
}

.quantity {
    font-size: 20px;
    text-align: center;

}

.quantity-col {
    text-align: center;
}

.remove-add-icon-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 40px;
    background-color: rgb(185, 185, 185);
    border-radius: 10px;
}

.remove-add-icon-col {
    display: flex;
    align-items: center;
    justify-content: center;
}

.beverages-title {
    font-weight: bold;
}

.select-option {
    border: 2px;
    padding: 5px;
    width: 325px;
    border: 2px;
    background-color: rgb(228, 226, 226);
}

.select-option-bg {
    display: flex;
    justify-content: center;
    
}

.select-main-bg {
    background-color: aqua;
    height: 60px;
    width: 90%;
    border-radius: 16px;
    padding: 5px;
    background-color: rgb(228, 226, 226);
    margin-top: 14px;
}

.select-align {
    display: flex;
    justify-content: center;
}

.choosebev-opacity {
    color: rgb(148, 147, 147);
}

.beeffries-img {
    width: 300px;
}

.addons-title {
    font-weight: bold;
}

.box-addons-one {
    height: 90px;
    background-color: rgb(228, 226, 226);
    margin: 18px;
    border-radius: 16px;
}

.transparent-box {
    height: 70px;
    background-color: white;
    
}

.checkbox-icon {
    margin-right: 5px;
    margin-bottom: 16px;
}

.remove-add-icon-addons-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 20px;
    background-color: rgb(185, 185, 185);
    border-radius: 9px;
}

.p-tag-price {
    color:red;
    padding-top: 5px;
    font-weight: bold;
}

.round-addtobag-btn {
   border-radius: 16px; 
   width: 90%;
   height: 65px;
}

.selected-sizes {
    height: 50px;
    background-color: orange;
    color: white;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 16px;
}

.sizes {
    border: 2px;
    border-color: black;
    box-shadow: 1px 1px 11px -8px;
    height: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 16px;
    font-weight: bold;
}

.margin-row-sizes {
    margin: 10px;
}

.addtobag-btn {
    position: absolute;
    bottom: 5px;
    margin-left: 20px;
    margin-right:20px ;
    
}


</style>