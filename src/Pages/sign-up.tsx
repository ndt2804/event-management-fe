import { Formik, Field, Form, ErrorMessage } from "formik";
import { useCreateUserAccount } from '../hooks/useAuthApi'
import { SignupValidation } from '../libs/validation/form-validation'
import { Link } from "react-router-dom";
import { useToast } from "../context/toast-context";

const SignUp = () => {
    const mutation = useCreateUserAccount();
    const showToast = useToast();
    return (

        <section className="dark:bg-gray-900 mx-auto">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white md:mt-0 sm:max-w-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up to your account
                        </h1>
                        <Formik
                            initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
                            validationSchema={SignupValidation}
                            onSubmit={(values, { setSubmitting }) => {
                                mutation.mutate(values, {
                                    onSuccess: () => {
                                        showToast.success("Đăng ký thành công!");
                                    },
                                    onError: (error) => {
                                        showToast.error(error.message || "Đăng ký thất bại!");
                                    },
                                    onSettled: () => {
                                        setSubmitting(false);
                                    },
                                });
                            }}
                        >
                            {({ isSubmitting, errors, touched }) => (
                                <Form className="space-y-4 md:space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Your full name
                                        </label>
                                        <Field
                                            type="text"
                                            name="fullName"
                                            className={`bg-gray-50 border ${errors.fullName && touched.fullName ? "border-red-500" : "border-gray-300"
                                                } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                                            placeholder="John Doe"
                                        />
                                        <ErrorMessage name="fullName" component="p" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Your email
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className={`bg-gray-50 border ${errors.email && touched.email ? "border-red-500" : "border-gray-300"
                                                } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                                            placeholder="name@company.com"
                                        />
                                        <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="password"
                                            className={`bg-gray-50 border ${errors.password && touched.password ? "border-red-500" : "border-gray-300"
                                                } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                                            placeholder="••••••••"
                                        />
                                        <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Confirm Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            className={`bg-gray-50 border ${errors.confirmPassword && touched.confirmPassword ? "border-red-500" : "border-gray-300"
                                                } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                                            placeholder="••••••••"
                                        />
                                        <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || mutation.isPending}
                                        className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                         ${isSubmitting || mutation.isPending ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        {mutation.isPending ? <span className="loader"></span> : "Sign Up"}
                                    </button>

                                    {/* Link to Sign In */}
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account?{" "}
                                        <Link to="/sign-in" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                            Sign in
                                        </Link>
                                    </p>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SignUp;