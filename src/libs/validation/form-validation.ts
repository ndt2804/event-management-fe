import * as Yup from 'yup';

export const SigninValidation = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

export const SignupValidation = Yup.object({

    fullName: Yup.string()
        .min(3, 'Fullname must be at least 3 characters')
        .required('Fullname is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
});

export const ForgotPasswordValidation = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

});

export const ChangePasswordValidation = Yup.object({
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),

});

export const EventValidation = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
    startDate: Yup.date().required('Required'),
    endDate: Yup.date().required('Required'),
    saleStartTime: Yup.date().required('Required'),
    category: Yup.string().required('Required'),
    totalTickets: Yup.number().required('Required').min(1, 'Must be at least 1'),
});
