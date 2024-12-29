<template>
    <div class="feildDetails">
        <Header />
        <main class="field-details">
            <div class="title">{{ parcelName }}</div>
            <div class="subtitle">Field Details</div>
            <div class="warning-message">
                <i class="fa fa-exclamation-triangle"></i>
                ⚠️One part of the parcel is behind in growth as compared to the
                rest!
            </div>

            <div class="data-section">
                <table class="data-table">
                    <tr>
                        <td><strong>Exp. Harvesting Date:</strong></td>
                        <td>20.12.2024 - 24.12.2024</td>
                    </tr>
                    <tr>
                        <td><strong>Expected Yield:</strong></td>
                        <td>500 Pieces</td>
                    </tr>
                </table>

                <div class="heatmap-container">
                    <img
                        src="../../public/assets/img/heatmap.jpg"
                        alt="Heat Map"
                        class="heatmap"
                    />
                </div>
            </div>

            <div class="action-buttons">
                <button
                    @click="navigateToTestResults"
                    class="test-results-button"
                >
                    Test Results
                </button>
                <button @click="goBack" class="back-button">Back</button>
            </div>
        </main>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "../components/Header.vue";

export default {
    name: "FieldDetails",
    components: { Header },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const parcelName = ref(route.params.parcelName);

        const goBack = () => {
            router.go(-1);
        };
        const navigateToDashboard = () => {
            router.push("/");
        };

        const navigateToTestResults = () => {
            router.push({
                name: "TestResult",
                params: { parcelName: parcelName.value },
            });
        };
        return {
            parcelName,
            goBack,
            navigateToDashboard,
            navigateToTestResults,
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

.feildDetails {
    width: 100%;
    padding: 20px;
}

.field-details {
    text-align: center;
}

.title,
.subtitle {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
}

.warning-message {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff3cd;
    color: #856404;
    padding: 10px;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 20px;
}
.warning-message i {
    margin-right: 10px;
}

.data-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.data-table {
    border: 1px solid #ddd;
    border-collapse: collapse;
    width: 600px;
    margin-bottom: 20px;
    font-size: 1rem;
}
.data-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

.heatmap-container {
    max-width: 400px;
    margin: 0 auto;
}
.heatmap {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid #ddd;
}

.action-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.perform-test-button,
.test-results-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
}
.perform-test-button {
    background-color: #f50a8d;
}
.test-results-button {
    background-color: #7cdbff;
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

.perform-test-button:hover,
.test-results-button:hover {
    opacity: 0.8;
}

@media screen and (max-width: 768px) {
    .field-details {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }

    .data-section {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .data-table {
        width: 100%;
        font-size: 0.85rem;
        max-width: 100%;
    }

    .heatmap-container {
        margin-bottom: 20px;
        width: 100%;
        max-width: 100%;
    }

    .heatmap {
        width: 100%;
        height: auto;
        max-width: 100%;
    }

    .action-buttons {
        flex-direction: column;
    }
}

@media screen and (max-width: 480px) {
    .title,
    .subtitle {
        font-size: 14px;
    }

    .data-table td {
        font-size: 0.8rem;
        padding: 6px;
    }

    .heatmap {
        max-width: 90%;
    }

    .field-details {
        padding: 10px;
    }

    .perform-test-button,
    .test-results-button,
    .back-button {
        width: 100%;
        font-size: 14px;
    }
}
</style>
