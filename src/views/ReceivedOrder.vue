<template>
    <ion-page>
        <ion-header>
        
        </ion-header>
        <ion-content>
            <div class="thumbs-up-box">
                <img class="thumbs-up-img" src="../assets/thumbs-up.png" alt="thumbs up image">
            </div>
            <div class="ion-text-center order-received-box">
                <h1 class="order-received-title">Order Received!</h1>
            </div>
            <div class="inform-contatiner">
                <div class="inform-box">
                    <p class="inform-text">
                        Your Order <b class="no-text-style">No. 19049585</b> has successfully take and now being processed. Kindly wait for out notification
                        regarding your order.
                    </p>
                </div>
            </div>
            <div class="grid-container">
                <ion-grid class="grid-pos ion-margin-bottom">
                    <ion-row>
                        <ion-col class="track-btn-col">
                            <ion-button class="track-order-btn" color="danger">Track Order</ion-button>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col class="track-btn-col ion-text-center">
                            <a href="/tabs/HomePage" class="goback-link">Back to Home</a>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
            
            
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'; 
import { 
} from 'ionicons/icons';
</script>

<style scoped>
.thumbs-up-box {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.thumbs-up-img {
    width:200px;
}

.order-received-title {
    font-weight: bold;
}

.inform-contatiner {
    display: flex;
    justify-content: center;
    text-align: center;
}

.inform-box {
    width: 350px;


}

.inform-text {
    color: rgb(151, 150, 150);
}

.no-text-style {
    color:red;
}

.grid-pos {
    position: absolute;
    bottom: 0px;
    width:90%;

}

.track-order-btn {
    width: 100%;
}

.track-btn-col {
    width: 200px;
}

.goback-link {
    text-decoration: none;
    color: rgb(172, 3, 3);
    
}

.grid-container {
    display: flex;
    justify-content: center;

}
</style>