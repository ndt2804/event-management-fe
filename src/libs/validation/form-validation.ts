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

export const EventValidation = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    startDate: Yup.string().required("Start date is required"),
    endDate: Yup.string().required("End date is required"),
    saleStartTime: Yup.string().required("Sale start time is required"),
    category: Yup.string().required("Category is required"),
    totalTickets: Yup.number().required("Total tickets are required").positive().integer(),
});