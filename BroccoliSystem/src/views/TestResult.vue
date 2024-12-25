<template>
    <div class="test-result">
        <Header />
        <div class="title">{{ parcelName }}</div>
        <div class="subtitle">Data Visualization</div>

        <div class="content">
            <div class="chart-buttons">
                <button @click="currentChart = 'pie'">Pie Chart</button>
                <button @click="currentChart = 'histogram'">Histogram</button>
                <button @click="currentChart = 'heatmap'">Heat Map</button>
            </div>

            <div class="chart-container">
                <img
                    v-if="currentChart === 'pie'"
                    src="C:/Users/mf384/OneDrive/Desktop/pie.jpg"
                    alt="Pie Chart"
                />
                <img
                    v-if="currentChart === 'histogram'"
                    src="C:\Users\mf384\OneDrive\Desktop\histogram.jpg"
                    alt="Histogram"
                />
                <img
                    v-if="currentChart === 'heatmap'"
                    src="https://www.esriuk.com/content/distributor-sites/esriuk-com/en-gb/geospatial-thinking/stories/agriculture/_jcr_content/par/grid_container_copy__513533980/gc-par/columnsystem/wpar/image.img.jpg/1630949173846.jpg"
                    alt="Heat Map"
                />
            </div>
        </div>
        <button @click="goBack" class="back-button">Back</button>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "../components/Header.vue";

export default {
    name: "TestResult",
    components: {
        Header,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const parcelName = ref(route.params.parcelName);
        const currentChart = ref("pie");

        const goBack = () => {
            router.go(-1);
        };

        const navigateToDashboard = () => {
            router.push("/");
        };

        return {
            parcelName,
            currentChart,
            goBack,
            navigateToDashboard,
        };
    },
};
</script>
<style>
body,
html {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.test-result {
    width: 100%;
    padding: 20px;
}
.title,
.subtitle {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    margin: 10px 0;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.chart-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ed008d;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #d7007d;
}

.chart-container {
    width: 80%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
}

.chart-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.back-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #ccc;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
}

.back-button:hover {
    background-color: #aaa;
}
</style>
