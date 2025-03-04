import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie, deleteCookie } from "../libs/api/api";
import { useSignOutAccount } from "../hooks/useAuthApi";
import { AuthContextType, User } from "../libs/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isTokenExpired, setIsTokenExpired] = useState(false); // 🔹 Thêm state này

    const { mutateAsync: signOut } = useSignOutAccount();

    // ✅ Hàm login để lưu user vào cookie
    const login = (user: User, token: string) => {
        setUser(user);
        setIsAuthenticated(true);
        setIsTokenExpired(false); // Reset khi user mới đăng nhập
        setCookie("user", JSON.stringify(user));
        setCookie("accessToken", token);
    };

    // ✅ Hàm logout để xóa user và token khỏi cookie
    const logout = async () => {
        try {
            await signOut();
            deleteCookie("accessToken");
            deleteCookie("user");
            setUser(null);
            setIsAuthenticated(false);
            setIsTokenExpired(false);
            navigate("/sign-in");
        } catch (error) {
            console.error("❌ Logout failed:", error);
        }
    };

    // ✅ Kiểm tra nếu user có trong cookie thì set state
    const checkAuthUser = async () => {
        setIsLoading(true);
        try {
            const userCookie = getCookie("user");
            if (userCookie) {
                const currentUser = JSON.parse(userCookie);
                setUser(currentUser);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Error checking auth user:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuthUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, isTokenExpired, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// ✅ Hook để sử dụng AuthContext trong component
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
