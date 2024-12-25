<template>
    <div class="dashboard">
        <Header />
        <h1 class="title">Fields Dashboard</h1>

        <div class="fields-grid">
            <FieldCard
                v-for="(parcel, index) in parcels"
                :key="index"
                :parcel="parcel"
                @click="navigateToFieldDetails(parcel.name)"
            />
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Header from "../components/Header.vue";
import FieldCard from "../components/FieldCard.vue";
import { useRouter } from "vue-router";

export default {
    name: "Dashboard",
    components: { FieldCard, Header },
    setup() {
        const router = useRouter();
        const parcels = ref([
            {
                name: "Parcel A",
                date: "20.12.2024 - 24.12.2024",
                imageUrl:
                    "https://www.shutterstock.com/shutterstock/videos/3615414061/thumb/1.jpg?ip=x480",
            },
            {
                name: "Parcel B",
                date: "11.11.2024 - 13.12.2024",
                imageUrl:
                    "https://www.shutterstock.com/shutterstock/videos/3615414061/thumb/1.jpg?ip=x480",
            },
            {
                name: "Parcel C",
                date: "25.01.2025 - 28.01.2025",
                imageUrl:
                    "https://www.shutterstock.com/shutterstock/videos/3615414061/thumb/1.jpg?ip=x480",
            },
        ]);

        const navigateToFieldDetails = (parcelName) => {
            router.push({ name: "FieldDetails", params: { parcelName } });
        };

        return {
            parcels,
            navigateToFieldDetails,
        };
    },
};
</script>

<style scoped>
body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.dashboard {
    width: 100%;
    padding: 20px;
}

.title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
    max-width: 1200px;
    text-transform: uppercase;
}

.fields-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 20px 0;
    padding: 0 20px;
    box-sizing: border-box;
}

.fields-grid > * {
    background-color: #ed008d;
    padding: 15px;
    border: 3px solid #ed008d;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.fields-grid > *:hover {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .title {
        font-size: 24px;
    }

    .fields-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 1024px) {
    .title {
        font-size: 32px;
    }

    .fields-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
}

@media (max-width: 480px) {
    .title,
    .subtitle {
        font-size: 14px;
    }
}
</style>
