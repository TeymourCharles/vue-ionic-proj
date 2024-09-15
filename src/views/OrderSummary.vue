<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar class="">
                <ion-buttons slot="start" class="chevron-btn">
                    <a href="/tabs/orderpage"><ion-icon class="chevron-icon" :icon="chevronBack"/></a>
                </ion-buttons>
                <ion-row class="">
                    <ion-col class="ion-text-center ion-align-self-center" size="8">
                        <h1 class="no-margin">Order Summary</h1>
                    </ion-col>
                    
                    
                </ion-row>
                    
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <div class="summary-details-box-align">
                        <div class="summary-details-box-one">
                            <ion-row>
                                <ion-col size="" class="ion-padding-start">
                                    <h6 class="homeaddress-font-weight">Firstname Lastname</h6>
                                    <p class="address-style no-margin">+63 912 345 67 89</p>
                                    <p class="address-style no-margin">usergmail@gmail.com</p>
                                </ion-col>
                            </ion-row>
                        </div>
                        <div class="ellipsis-box">
                            <ion-icon :class="{'clickable-ellipsis-icon' : showButtons}" @click="toggleButtons" style="font-size: 30px; color: orange;" :icon="ellipsisVerticalOutline"/>
                        </div>
                        <div 
                            class="slide-buttons" 
                            :class="{ 'show-buttons' : showButtons }"
                        >
                            
                            <ion-row>
                                <ion-col  style="background-color: #FFDBBB; height: 118px; border-radius: 16px; margin-right:10px;">
                                    <ion-icon style="font-size: 30px; margin-top: 35px;" color="warning" :icon="pencilOutline"/>
                                </ion-col>
                                <ion-col style="background-color: #FF7377; height: 118px; border-radius: 16px;">
                                    <ion-icon style="font-size: 30px; margin-top: 35px;" color="danger" :icon="trashOutline"/>
                                </ion-col>
                            </ion-row>
                        </div>
                    </div>
                </ion-row>
                <ion-row>
                    <div class="summary-details-box-align">
                        <div class="summary-details-box-one">
                            <ion-row>
                                <ion-col size="10" class="ion-padding-start">
                                    <h6 class="homeaddress-font-weight">My Home Address</h6>
                                    <p class="address-style">No. 21 St. Agustin Street, Brgy. De Jose Del Gado City 2234 Philippines</p>
                                </ion-col>
                                <ion-col class="ion-text-end ion-margin-end ion-margin-top">
                                    <ion-checkbox :class="{'checkbox-add-hidden' : showButtonsAddress}" name="address" id="address" color="secondary" value="option"></ion-checkbox>
                                </ion-col>
                            </ion-row>
                        </div>
                        <div class="ellipsis-box">
                            <ion-icon :class="{'clickable-ellipsis-icon-address' : showButtonsAddress}" @click="toggleButtonsAddress" style="font-size: 30px; color: orange;" :icon="ellipsisVerticalOutline"/>
                        </div>
                        <div 
                            class="slide-buttons-address" 
                            :class="{ 'show-buttons-address' : showButtonsAddress }"
                        >
                            
                            <ion-row>
                                <ion-col  style="background-color: #FFDBBB; height: 118px; border-radius: 16px; margin-right:10px;">
                                    <ion-icon style="font-size: 30px; margin-top: 35px;" color="warning" :icon="pencilOutline"/>
                                </ion-col>
                                <ion-col style="background-color: #FF7377; height: 118px; border-radius: 16px;">
                                    <ion-icon style="font-size: 30px; margin-top: 35px;" color="danger" :icon="trashOutline"/>
                                </ion-col>
                            </ion-row>
                        </div>
                        
                    </div>
                </ion-row>
                <ion-row>
                    <div class="summary-details-box-align">
                        <div class="summary-details-box-one">
                            <ion-row>
                                <ion-col size="10" class="ion-padding-start">
                                    <h6 class="homeaddress-font-weight">Work/Office</h6>
                                    <p class="address-style">3rd flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines</p>
                                </ion-col>
                                <ion-col class="ion-text-end ion-margin-end ion-margin-top">
                                    <ion-checkbox :class="{'checkbox-add-hidden-sec-add' : showButtonsSecAdd}" name="address" id="address" color="secondary" value="option"></ion-checkbox>
                                </ion-col>
                            </ion-row>
                        </div>
                        <div class="ellipsis-box">
                            <ion-icon :class="{'clickable-ellipsis-sec-add' : showButtonsSecAdd}" @click="toggleButtonsSecAdd" style="font-size: 30px; color: orange;" :icon="ellipsisVerticalOutline"/>
                        </div>
                        <div 
                            class="slide-buttons-sec-add" 
                            :class="{ 'show-buttons-sec-add' : showButtonsSecAdd }"
                        >
                            
                            <ion-row>
                                <ion-col  style="background-color: #FFDBBB; height: 118px; border-radius: 16px; margin-right:10px;">
                                    <ion-icon style="font-size: 30px; margin-top: 35px;" color="warning" :icon="pencilOutline"/>
                                </ion-col>
                                <ion-col style="background-color: #FF7377; height: 118px; border-radius: 16px;">
                                    <ion-icon style="font-size: 30px; margin-top: 35px;" color="danger" :icon="trashOutline"/>
                                </ion-col>
                            </ion-row>
                        </div>
                    </div>
                </ion-row>
            </ion-grid>
            <h1 class="orders-title ion-margin-start">Orders</h1>
            <ion-grid>
                <ion-row>
                    <div class="order-summary-container">
                        <div class="order-summary-box">
                            <ion-row>
                                <ion-col size="4">
                                    <img class="beeffries-img" src="../assets/beeffries-meal-lg.png" alt="beef fries order">
                                </ion-col>
                                <ion-col>
                                    <h5 class="order-name">Steak Fries Veggies</h5>
                                    <p class="no-margin">1x Tomato Sauce</p>
                                    <p class="no-margin">1x Regular Coke</p>
                                    <p class="no-margin">1x Fried Chicken</p>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-margin-top">
                                <ion-col>
                                    <p class="ion-margin-start ptag-price-item">P 175</p>
                                </ion-col>
                                <ion-col size="5" class="ion-align-self-center">
                                    <ion-row class="ion-margin-end">
                                        <ion-col class="remove-add-icon-sumitem-bg">
                                            <div class="remove-add-icon-sumitem-bg">
                                                <ion-icon color="danger" @click="decrementQty" :icon="removeOutline"/>
                                            </div>
                                        </ion-col>
                                        <ion-col class="quantity-col ion-align-self-center">
                                            <p class="quantity no-margin">{{ quantity }}</p>
                                        </ion-col>
                                        <ion-col class="remove-add-icon-sumitem-bg">
                                            <div class="remove-add-icon-sumitem-bg">
                                                <ion-icon color="danger" @click="incrementQty" :icon="addOutline"/>
                                            </div>
                                        </ion-col>
                                    </ion-row>
                                </ion-col>
                            </ion-row>
                        </div>
                        <div class="ellipsis-box">
                            <ion-icon :class="{'clickable-ellipsis-orders' : showButtonsOrders}" @click="toggleButtonsOrders" style="font-size: 30px; color: orange;" :icon="ellipsisVerticalOutline"/>
                        </div>
                        <div 
                            class="slide-buttons-orders" 
                            :class="{ 'show-buttons-orders' : showButtonsOrders }"
                        >
                            <ion-row>
                                <ion-col  style="background-color: #FFDBBB; height: 118px; border-radius: 16px; margin-right:10px;">
                                    <ion-icon style="font-size: 30px; margin-top: 35px;" color="warning" :icon="pencilOutline"/>
                                </ion-col>
                                <ion-col style="background-color: #FF7377; height: 118px; border-radius: 16px;">
                                    <ion-icon style="font-size: 30px; margin-top: 35px;" color="danger" :icon="trashOutline"/>
                                </ion-col>
                            </ion-row>
                        </div>
                    </div>
                </ion-row>
            </ion-grid>
                <h1 class="ion-margin-start payment-title">Payment Option</h1>
                    <ion-grid>
                        <ion-row>
                            <div class="payment-option-box">
                                <ion-row>
                                    <ion-col>
                                        <h6 class="no-margin cod-font-style ion-margin-start">Cash on Delivery</h6>
                                        <p class="no-margin ion-margin-start pay-font-style" style="font-size: 13px">Pay when you received order</p>
                                    </ion-col>
                                    <ion-col size="2">
                                        <ion-row>
                                            <ion-col class="ion-text-end ion-margin-top ion-margin end">
                                                <ion-checkbox name="address" id="address" color="secondary" value="option"></ion-checkbox>
                                            </ion-col>
                                        </ion-row>
                                    </ion-col>
                                </ion-row>
                            </div>
                        </ion-row>
                        <ion-row>
                            <div class="payment-option-box">
                                <ion-row>
                                    <ion-col>
                                        <h6 class="no-margin cod-font-style ion-margin-start">Loyalty Points<b style="color:red; margin-left:10px;" >(0 points)</b></h6>
                                        <p class="no-margin ion-margin-start pay-font-style" style="font-size: 13px">Pay using your earned loyalty points</p>
                                    </ion-col>
                                    <ion-col size="2">
                                        <ion-row>
                                            <ion-col class="ion-text-end ion-margin-top ion-margin end">
                                                <ion-checkbox name="address" id="address" color="secondary" value="option"></ion-checkbox>
                                            </ion-col>
                                        </ion-row>
                                    </ion-col>
                                </ion-row>
                            </div>
                        </ion-row>
                        <ion-row>
                            <div class="payment-option-box">
                                <ion-row>
                                    <ion-col>
                                        <img style="margin-top: 2px" class="ion-margin-start" src="../assets/paypal-img.png" alt="paypal image">
                                        <p class="no-margin ion-margin-start pay-font-style" style="font-size: 13px">A new tab will open to access your account</p>
                                    </ion-col>
                                    <ion-col size="2">
                                        <ion-row>
                                            <ion-col class="ion-text-end ion-margin-top ion-margin end">
                                                <ion-checkbox name="address" id="address" color="secondary" value="option"></ion-checkbox>
                                            </ion-col>
                                        </ion-row>
                                    </ion-col>
                                </ion-row>
                            </div>
                        </ion-row>
                        <ion-row>
                            <div class="payment-option-box">
                                <ion-row>
                                    <ion-col>
                                        <img style="margin-top: 2px" class="ion-margin-start" src="../assets/paynamics.png" alt="paynamics">
                                        <p class="no-margin ion-margin-start pay-font-style" style="font-size: 13px">Choose paynamics services available from you</p>
                                    </ion-col>
                                    <ion-col size="2">
                                        <ion-row>
                                            <ion-col class="ion-text-end ion-margin-top ion-margin end">
                                                <ion-checkbox name="address" id="address" color="secondary" value="option"></ion-checkbox>
                                            </ion-col>
                                        </ion-row>
                                    </ion-col>
                                </ion-row>
                            </div>
                        </ion-row>
                    </ion-grid>
                    <ion-grid>
                        <ion-row>
                            <ion-col class="sab-del">
                                <p>Sabtotal</p>
                                <p>Delivery Charge</p>
                            </ion-col>
                            <ion-col class="ion-text-end ion-maring-end sab-del">
                                <p>P 185</p>
                                <p>P 59</p>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <div class="change-for-align-box">
                        <div class="change-for-box">
                            <ion-row>
                                <ion-col>
                                    <p class="ion-margin-start change-for-style no-margin">Change for </p>
                                    <p class="ion-margin-start eg-style no-margin">e.g 1,000 </p>
                                </ion-col>
                            </ion-row>
                        </div>
                    </div>
                    <div class="transparent-box"></div>
                    <ion-toolbar class="toolbar" slot="fixed">
                        <ion-grid>
                            <ion-row>
                                <ion-col>
                                    <p class="no-margin">Grand Total</p>
                                    <h6 class="grand-total-num">P 244</h6>
                                </ion-col>
                                <ion-col class="">
                                    <div class="place-order-box">
                                        <a href="/tabs/receivedorder">
                                            <ion-button class="place-order-btn" color="danger">
                                                Place Order
                                            </ion-button>
                                        </a>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-toolbar>
            
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
    IonNav
    
} from '@ionic/vue'; 
import { addOutline, bagHandle, chevronBack, ellipsisVerticalOutline, pencilOutline, removeOutline, trashOutline } from 'ionicons/icons';


import { ref } from 'vue';

const showButtons = ref(false);
const toggleButtons = () => {
  showButtons.value = !showButtons.value;
};


const showButtonsAddress = ref(false);
const toggleButtonsAddress = () => {
  showButtonsAddress.value = !showButtonsAddress.value;
};


const showButtonsSecAdd = ref(false);
const toggleButtonsSecAdd = () => {
    showButtonsSecAdd.value = !showButtonsSecAdd.value;
};


const showButtonsOrders = ref(false);
const toggleButtonsOrders = () => {
    showButtonsOrders.value = !showButtonsOrders.value;
};



const quantity = ref(1)

const decrementQty = () => {
    if (quantity.value > 1 ) {
        quantity.value--
    }
}

const incrementQty = () => {
    quantity.value++
}

</script>

<style scoped>
.slide-buttons.show-buttons {
  transform: translateX(0);
}

.clickable-ellipsis-icon {
    transition: transform 0.3s ease;
    transform: translateX(-400%);
}

.clickable-ellipsis-icon.show-buttons {
    transform: translateX(0);
    
}

.slide-buttons {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 13px;
  transition: transform 0.3s ease;
  transform: translateX(100%);
}


.slide-buttons-address.show-buttons-address {
  transform: translateX(0);
}

.clickable-ellipsis-icon-address {
    transition: transform 0.3s ease;
    transform: translateX(-400%);
}

.clickable-ellipsis-icon-address.show-buttons-address {
    transform: translateX(0);
    
}

.slide-buttons-address {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 13px;
  transition: transform 0.3s ease;
  transform: translateX(100%);
}

.checkbox-add-hidden.show-buttons-address {
    transform: translateX(0%);
}

.checkbox-add-hidden {
    visibility: hidden;
}




.slide-buttons-sec-add.show-buttons-sec-add {
  transform: translateX(0);
}

.clickable-ellipsis-sec-add {
    transition: transform 0.3s ease;
    transform: translateX(-400%);
}

.clickable-ellipsis-sec-add.show-buttons-sec-add {
    transform: translateX(0);
    
}

.slide-buttons-sec-add {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 13px;
  transition: transform 0.3s ease;
  transform: translateX(100%);
}

.checkbox-add-hidden-sec-add.show-buttons-sec-add {
    transform: translateX(0%);
}

.checkbox-add-hidden-sec-add {
    visibility: hidden
}


.slide-buttons-orders.show-buttons-orders {
  transform: translateX(0);
}

.clickable-ellipsis-orders {
    transition: transform 0.3s ease;
    transform: translateX(-400%);
}

.clickable-ellipsis-orders.show-buttons-orders {
    transform: translateX(0);
    
}

.slide-buttons-orders {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 13px;
  transition: transform 0.3s ease;
  transform: translateX(100%);
}

.ellipsis-icon {
    font-size: 30px;
    color: orange;
}

.ellipsis-box {
    display: flex;
    height: 100%;
    align-items: center;
}

.summary-details-box-one {
    height: 120px;
    background-color: rgb(241, 238, 238);
    border-radius: 16px;
    width: 100%;
    margin: 5px 0px 5px 3px;
}

.summary-details-box-align {
    display: flex;
    flex-grow: 1;
    position: relative;
}

.homeaddress-font-weight {
    font-weight: bold;
}

.address-style {
    color: rgb(151, 150, 150);
}

.orders-title {
    font-weight: bold;
}

.order-summary-container {
    display: flex;
    flex-grow: 1;
    position: relative;
}

.order-summary-box {
    background-color: rgb(241, 238, 238);
    height: 200px;
    width: 100%;
    margin: 3px 0px 3px 10px;
    border-radius: 16px;
}

.beeffries-img {
    width: 90px;
    margin-top: 35px;
    margin-left: 18px;
}

.order-name {
    font-weight: bold;
}

.remove-add-icon-sumitem-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 15px;
    background-color: rgb(185, 185, 185);
    border-radius: 9px;
}

.quantity {
    font-size: 20px;
    text-align: center;

}

.quantity-col {
    text-align: center;
}

.ptag-price-item {
    font-weight: bold;
    color: red;
}

.payment-title {
    font-weight: bold;
}

.payment-option-box {
    height: 80px;
    width: 100%;
    background-color: rgb(241, 238, 238);
    margin: 5px 5px 5px 5px;
    border-radius: 16px;
}

.cod-font-style {
    font-weight: bold;
    margin-top: 15px;
}

.pay-font-style {
    color: rgb(151, 150, 150);
    margin-top: 5px;
}

.sab-del {
    font-weight: bold;
}

.change-for-box {
    background-color: rgb(245, 245, 245);
    height: 57px;
    width: 100%;
    border-radius: 16px;
    margin: 0px 10px 0px 10px;
}

.change-for-align-box {
    display: flex;
    justify-content: center;
}

.change-for-style {
    color:rgb(151, 150, 150);
    margin-top: 4px;
}

.eg-style {
    color:rgb(213, 211, 211);
    margin-top: 2px;
}

.transparent-box {
    height: 90px;
}

.toolbar {
    height: 80px;

    bottom: 0px;
}

.grand-total-num {
    font-weight: bold;
}

.place-order-btn {
    width: 170px;
}

.place-order-box {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>