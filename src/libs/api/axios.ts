// src/libs/api/axiosPrivate.ts
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "./api";

export const axiosPrivate = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});
axiosPrivate.interceptors.request.use((config) => {
    const token = getCookie("accessToken");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const { data } = await axios.post("/auth/refresh-token", {
                    refreshToken: getCookie("refreshToken"),
                });

                setCookie("accessToken", data.accessToken);
                setCookie("refreshToken", data.refreshToken);

                axiosPrivate.defaults.headers["Authorization"] = `Bearer ${data.accessToken}`;
                return axiosPrivate(originalRequest);
            } catch (refreshError) {
                deleteCookie("accessToken");
                deleteCookie("refreshToken");
                window.location.href = "/sign-in";
            }
        }
        return Promise.reject(error);
    }
);


export default axiosPrivate;
