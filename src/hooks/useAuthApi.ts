import { useMutation } from "@tanstack/react-query";
import { RegisterData, User, SignInData } from "../libs/types/auth";
import {
    createUserAccount,
    signInAccount,
    signOutAccount,
    forgotPasswordAccount,
    changePasswordAccount,
} from "../libs/api/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
export const useCreateUserAccount = () => {
    const navigate = useNavigate();

    return useMutation<User, Error, RegisterData>({
        mutationFn: createUserAccount,
        onSuccess: () => {
            navigate("/sign-in");
        },
        onError: (error) => {
            console.error("Registration failed:", error);
        },
    });
};
export const useSignInAccount = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    return useMutation<{ user: User; token: string }, Error, SignInData>({
        mutationFn: signInAccount,
        onSuccess: ({ user, token }) => {
            login(user, token);
            navigate("/");
        },
        onError: (error) => {
            console.error("Sign In failed:", error);
        },
    });
};

export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount,
    });
};

export const useForgotPassword = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: forgotPasswordAccount,
        onSuccess: () => {
            navigate("/sign-in");
        },
        onError: (error) => {
            console.error("Forgot Password failed:", error);
        },
    });
};
export const useChangePassword = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (params: { token: string; password: string }) =>
            changePasswordAccount(params.token, params.password),
        onSuccess: () => {
            navigate("/sign-in");
        },
        onError: (error) => {
            console.error("Change Password failed:", error);
        },
    });
};