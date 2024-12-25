import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import FieldDetails from "../views/FieldDetails.vue";
import PerformTest from "../views/PerformTest.vue";
import TestResult from "../views/TestResult.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: DashboardView,
        },
        {
            path: "/field-details/:parcelName",
            name: "FieldDetails",
            component: FieldDetails,
        },
        {
            path: "/perform-test/:parcelName",
            name: "PerformTest",
            component: PerformTest,
        },
        {
            path: "/test-result/:parcelName",
            name: "TestResult",
            component: TestResult,
        },
    ],
});

export default router;
