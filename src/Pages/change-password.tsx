import { Formik, Field, Form, ErrorMessage } from "formik";
import { useChangePassword } from '../hooks/useAuthApi'
import { ChangePasswordValidation } from "../libs/validation/form-validation";
import { useToast } from '../context/toast-context';
import { Link, useSearchParams } from "react-router-dom";
const ChangePassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const mutation = useChangePassword();
    const showToast = useToast();
    return <>
        <section className="dark:bg-gray-900 mx-auto">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white md:mt-0 sm:max-w-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Change password your account
                        </h1>
                        {!token ? (
                            <p className="text-red-500">❌ Token không hợp lệ hoặc đã hết hạn.</p>
                        ) : (
                            <Formik
                                initialValues={{
                                    password: "",
                                    confirmPassword: ""
                                }}
                                validationSchema={ChangePasswordValidation}

                                onSubmit={(values, { setSubmitting }) => {
                                    console.log("📩 Password:", values.password);
                                    console.log("📩 Confirm Password:", values.confirmPassword);
                                    console.log("📩 Token:", token);

                                    mutation.mutate(
                                        {
                                            token: token,
                                            password: values.password
                                        },
                                        {
                                            onSuccess: () => {
                                                showToast.success("Mật khẩu đã được cập nhật!");
                                            },
                                            onError: (error) => {
                                                showToast.error(error.message || "Cập nhật mật khẩu thất bại!");
                                            },
                                            onSettled: () => {
                                                setSubmitting(false);
                                            },
                                        }
                                    );
                                }}
                            >
                                {({ isSubmitting, errors, touched }) => (
                                    <Form className="space-y-4 md:space-y-6">
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                New Password
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                className={`bg-gray-50 border ${errors.password && touched.password ? "border-red-500" : "border-gray-300"
                                                    } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                                                placeholder="your password"
                                            />
                                            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
                                        </div>

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
                                            {mutation.isPending ? <span className="loader"></span> : " Change password?"}
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
                        )}
                    </div>

                </div>
            </div>
        </section>
    </>

}
export default ChangePassword;