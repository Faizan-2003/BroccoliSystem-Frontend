<template>
    <div class="field-card" @click="handleClick">
        <div class="image-container">
            <img :src="parcel.imageUrl" alt="Field Image" class="field-image" />
        </div>
        <div class="field-info">
            <h3>{{ parcel.name }}</h3>
        </div>
        <p class="date">
            Expected Harvesting Date: <strong>{{ parcel.date }}</strong>
        </p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    parcel: {
        type: Object,
        required: true,
    },
});

const handleClick = () => {
    console.log(`Field clicked: ${props.parcel.name}`);
};
</script>

<style scoped>
.field-card {
    background-color: #ffebf1;
    padding: 15px;
    border: 3px solid #f50a8d;
    border-radius: 12px;
    width: 100%;
    max-width: 320px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    margin: 0 auto;
}

.field-card:hover {
    transform: scale(1.05);
}

.image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.field-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.field-info {
    text-align: center;
    margin-top: 15px;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.field-info h3 {
    font-weight: bold;
    font-size: 24px;
    margin: 0;
}

.date {
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    color: #000000;
}
</style>
