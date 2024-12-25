<template>
    <header class="header-component">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Official_logo_of_Inholland_University_of_Applied_Sciences.jpg"
            class="header-logo"
            @click="navigateToDashboard"
        />
        <div class="header-profile">
            <span>Faizan</span>
            <i class="fas fa-user-circle"></i>
        </div>
    </header>
    <hr class="separator" />
</template>

<script>
import { useRouter } from "vue-router";

export default {
    name: "Header",
    setup() {
        const router = useRouter();

        const navigateToDashboard = () => {
            router.push("/");
        };

        return {
            navigateToDashboard,
        };
    },
};
</script>

<style scoped>
.header-component {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 10px 20px;
    top: 0;
    background-color: white;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.header-logo {
    height: 50px;
    cursor: pointer;
}

.header-profile {
    display: flex;
    align-items: center;
}

.header-profile span {
    margin-right: 10px;
    font-size: 16px;
}

.fas.fa-user-circle {
    font-size: 24px;
}

.separator {
    width: 100%;
    height: 3px;
    background-color: #ed008d;
    margin: 20px 0; /* Maintain uniform spacing */
}
</style>
