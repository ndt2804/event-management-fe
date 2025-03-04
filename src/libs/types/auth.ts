export interface User {
    id: string;
    fullName: string;
    email: string;
    avatar?: string;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    isTokenExpired: boolean; // 🔹 Thiếu thuộc tính này gây lỗi
    login: (user: User, token: string) => void; // 🔹 Thiếu login gây lỗi
    logout: () => Promise<void>;
}

export interface SignInData {
    email: string;
    password: string;
}

export interface RegisterData {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AuthResponse {
    user: {
        id: string;
        fullName: string;
        email: string;
        avatar?: string;
    };
    accessToken: string;
    refreshToken: string;
}
