import axios from "axios";
import { SignInData, RegisterData, User } from "../types/auth";
// ============================================================
// AUTH API
// ============================================================

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/';

export const createUserAccount = async (data: RegisterData): Promise<User> => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, data);
        console.log('✅ Register Success:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('❌ Register Failed:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};


export const signInAccount = async (data: SignInData): Promise<{ user: User; token: string }> => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, data);
        console.log('✅ SignIn Success:', response.data);
        const { user, accessToken } = response.data.data; // Lấy user và token
        console.log("🔹 Extracted User:", user);
        console.log("🔹 Extracted Token:", accessToken);

        return { user, token: accessToken };
    } catch (error: any) {
        console.error('❌ SignIn Failed:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'SignIn failed');
    }
};

export const signOutAccount = async (): Promise<void> => {
    try {
        await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });

        // Xóa accessToken và user khỏi cookie
        deleteCookie("accessToken");
        deleteCookie("user");

        console.log("✅ Logout successful");
    } catch (error: any) {
        console.error("❌ Logout failed:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Logout failed");
    }
};


export const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find(row => row.startsWith(`${name}=`));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
};

export const setCookie = (name: string, value: string, days = 7): void => {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
};

export const deleteCookie = (name: string): void => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
