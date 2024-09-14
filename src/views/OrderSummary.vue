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
                            <ion-icon class="ellipsis-icon" :icon="ellipsisVerticalOutline"/>
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
                                    <ion-checkbox name="address" id="address" color="secondary" value="option"></ion-checkbox>
                                </ion-col>
                            </ion-row>
                        </div>
                        <div class="ellipsis-box">
                            <ion-icon class="ellipsis-icon" :icon="ellipsisVerticalOutline"/>
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
                                    <ion-checkbox name="address" id="address" color="secondary" value="option"></ion-checkbox>
                                </ion-col>
                            </ion-row>
                        </div>
                        <div class="ellipsis-box">
                            <ion-icon class="ellipsis-icon" :icon="ellipsisVerticalOutline"/>
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
                                                <ion-icon class="" color="danger" :icon="removeOutline"/>
                                            </div>
                                        </ion-col>
                                        <ion-col class="quantity-col ion-align-self-center">
                                            <p class="quantity no-margin">1</p>
                                        </ion-col>
                                        <ion-col class="remove-add-icon-sumitem-bg">
                                            <div class="remove-add-icon-sumitem-bg">
                                                <ion-icon class="" color="danger" :icon="addOutline"/>
                                            </div>
                                        </ion-col>
                                    </ion-row>
                                </ion-col>
                            </ion-row>
                        </div>
                        <div class="ellipsis-box">
                            <ion-icon class="ellipsis-icon" :icon="ellipsisVerticalOutline"/>
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
                                        <p class="no-margin ion-margin-start pay-font-style">Pay when you received order</p>
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
                                        <h6 class="no-margin cod-font-style ion-margin-start">Cash on Delivery</h6>
                                        <p class="no-margin ion-margin-start pay-font-style">Pay when you received order</p>
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
                                        <h6 class="no-margin cod-font-style ion-margin-start">Cash on Delivery</h6>
                                        <p class="no-margin ion-margin-start pay-font-style">Pay when you received order</p>
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
                                        <h6 class="no-margin cod-font-style ion-margin-start">Cash on Delivery</h6>
                                        <p class="no-margin ion-margin-start pay-font-style">Pay when you received order</p>
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
                                    <p class="ion-margin-start eg-style no-margin">e.g 1.000 </p>
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
import { addOutline, bagHandle, chevronBack, ellipsisVerticalOutline, removeOutline } from 'ionicons/icons';
</script>

<style scoped>
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