export interface User {
    id: string;
    fullName: string;
    email: string;
    avatar?: string;
    isActive: boolean;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    isTokenExpired: boolean;
    login: (user: User, token: string) => void;
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
