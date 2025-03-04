import { Formik, Field, Form, ErrorMessage } from "formik";
import { useForgotPassword } from '../hooks/useAuthApi'
import { ForgotPasswordValidation } from "../libs/validation/form-validation";
import { useToast } from '../context/toast-context';
import { Link } from "react-router-dom";
const ForgotPassword = () => {
    const mutation = useForgotPassword();
    const showToast = useToast();

    return <>
        <section className="dark:bg-gray-900 mx-auto">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white md:mt-0 sm:max-w-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Forgot password your account
                        </h1>

                        <Formik
                            initialValues={{ email: "" }}
                            validationSchema={ForgotPasswordValidation}
                            onSubmit={(values, { setSubmitting }) => {
                                mutation.mutate(values.email, {
                                    onSuccess: (data) => {
                                        showToast.success("Password được gửi về mail thành công!");
                                        console.log("Login Success", data);
                                    },
                                    onError: (error) => {
                                        showToast.error(error.message || "Quên Password thất bại!");
                                    },
                                    onSettled: () => {
                                        setSubmitting(false);
                                    },
                                });
                            }}
                        >
                            {({ isSubmitting, errors, touched }) => (
                                <Form className="space-y-4 md:space-y-6">
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



                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || mutation.isPending}
                                        className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                        ${isSubmitting || mutation.isPending ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        {mutation.isPending ? <span className="loader"></span> : " Forgot password?"}
                                    </button>

                                    {/* Link to Sign Up */}
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">

                                        <Link to="/sign-up" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                            Sign up    {" "}
                                        </Link>
                                        or {" "}
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
    </>

}
export default ForgotPassword;