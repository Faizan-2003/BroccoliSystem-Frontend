<template>
    <div class="fieldDetails">
        <Header />
        <div class="title">{{ parcelName }}</div>
        <div class="subtitle">Perform Test</div>

        <div class="container">
            <div class="sidebar">
                <div class="camera-selection">
                    <label for="camera">Select Camera:</label>
                    <select
                        v-model="selectedCamera"
                        id="camera"
                        @change="startCamera"
                    >
                        <option value="">-- Select Camera --</option>
                        <option
                            v-for="(camera, index) in cameras"
                            :key="camera.deviceId"
                            :value="camera.deviceId"
                        >
                            {{ camera.label || `Camera ${index + 1}` }}
                        </option>
                    </select>
                </div>

                <div class="input-fields">
                    <label for="diameter">Ground Truth (Diameter):</label>
                    <input
                        v-model="groundTruthDiameter"
                        type="number"
                        id="diameter"
                    />

                    <label for="depth">Ground Truth (Depth):</label>
                    <input
                        v-model="groundTruthDepth"
                        type="number"
                        id="depth"
                    />
                </div>

                <div class="start-test-container">
                    <button
                        @click="startTest"
                        class="start-test-button"
                        :disabled="!canStartTest"
                    >
                        Start Test
                    </button>
                </div>
            </div>

            <div class="video-container">
                <video
                    ref="videoElement"
                    autoplay
                    playsinline
                    class="camera-feed"
                ></video>
            </div>
        </div>
        <button @click="goBack" class="back-button">Back</button>
    </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "../components/Header.vue";

export default {
    name: "PerformTest",
    components: { Header },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const cameras = ref([]);
        const selectedCamera = ref("");
        const groundTruthDiameter = ref("");
        const groundTruthDepth = ref("");
        const videoElement = ref(null);
        let currentStream = null;
        const parcelName = ref(route.params.parcelName);

        const goBack = () => {
            router.go(-1);
        };
        const navigateToDashboard = () => {
            router.push("/");
        };

        const fetchCameras = async () => {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                cameras.value = devices.filter(
                    (device) => device.kind === "videoinput"
                );
            } catch (error) {
                console.error("Error fetching cameras:", error);
            }
        };

        const startCamera = async () => {
            if (currentStream) {
                currentStream.getTracks().forEach((track) => track.stop());
                videoElement.value.srcObject = null;
            }

            if (!selectedCamera.value) {
                return;
            }

            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { deviceId: { exact: selectedCamera.value } },
                });
                currentStream = stream;
                videoElement.value.srcObject = stream;
            } catch (error) {
                console.error("Error accessing the camera:", error);
            }
        };

        const startTest = () => {
            console.log("Ground Truth Diameter:", groundTruthDiameter.value);
            console.log("Ground Truth Depth:", groundTruthDepth.value);
        };

        const canStartTest = computed(() => {
            return (
                selectedCamera.value &&
                groundTruthDiameter.value &&
                groundTruthDepth.value
            );
        });

        onMounted(() => {
            fetchCameras();
        });

        return {
            parcelName,
            cameras,
            selectedCamera,
            groundTruthDiameter,
            groundTruthDepth,
            navigateToDashboard,
            startCamera,
            startTest,
            goBack,
            videoElement,
            canStartTest,
        };
    },
};
</script>

<style scoped>
.fieldDetails {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}

.title,
.subtitle {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
}

.camera-selection,
.input-fields {
    margin: 20px 0;
    text-align: center;
}

.camera-feed {
    margin: 20px auto;
    border: 2px solid #ccc;
    border-radius: 10px;
    display: block;
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.sidebar {
    flex: 1;
    min-width: 300px;
}

.video-container {
    flex: 2;
    min-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.camera-feed {
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 10px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

select,
input {
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
}

.start-test-container {
    text-align: center;
    margin-top: 20px;
}

.start-test-button {
    padding: 10px 20px;
    background-color: #ed008d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
}

.start-test-button:hover {
    background-color: #e60073;
}

.start-test-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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
@media (max-width: 1024px) {
    .container {
        flex-direction: column;
    }

    .sidebar,
    .video-container {
        width: 100%;
    }

    .start-test-button {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .sidebar {
        flex: 1;
        min-width: 100%;
    }

    .video-container {
        min-width: 100%;
        margin-top: 20px;
    }

    .camera-feed {
        width: 100%;
    }

    .start-test-button {
        padding: 15px 20px;
        font-size: 18px;
    }
}

@media (max-width: 480px) {
    .title,
    .subtitle {
        font-size: 14px;
    }

    .camera-selection,
    .input-fields,
    .start-test-container {
        margin: 10px;
    }

    .start-test-button {
        font-size: 16px;
    }

    label,
    input,
    select {
        font-size: 14px;
    }
}
</style>
