import React, { createContext, useContext, ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 1️⃣ Định nghĩa kiểu dữ liệu cho context
interface ToastContextType {
    success: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
    warning: (message: string) => void;
}

// 2️⃣ Tạo context với giá trị mặc định là undefined
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// 3️⃣ Provider để bọc toàn bộ app
export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Hàm hiển thị toast
    const showToast: ToastContextType = {
        success: (message) => toast.success(message),
        error: (message) => toast.error(message),
        info: (message) => toast.info(message),
        warning: (message) => toast.warning(message),
    };

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
        </ToastContext.Provider>
    );
};

// 4️⃣ Custom Hook để dùng toast trong component khác
export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
