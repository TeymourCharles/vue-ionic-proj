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
import { bagHandle, chevronBack, ellipsisVerticalOutline } from 'ionicons/icons';
</script>

<style scoped>
.summary-details-box-one {
    height: 120px;
    background-color: rgb(241, 238, 238);
    border-radius: 16px;
    width: 350px;
    margin: 3px 0px 3px 3px;
}

.summary-details-box-align {
    display: flex;

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
    color: rgb(151, 150, 150);;
}

.orders-title {
    font-weight: bold;
}
</style>