import {Form, Formik} from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import {MyTextInput} from "../components";

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, "Should have at least 2 characters")
                        .max(15, "Should have up to 15 characters")
                        .required("Required"),
                    email: Yup.string()
                        .email("Not a valid format")
                        .required("Required"),
                    password: Yup.string()
                        .min(8, "Should have at least 8 characters")
                        .required("Required"),
                    confirmPassword: Yup.string()
                        .min(8, "Should have at least 8 chracters")
                        .oneOf([Yup.ref("password")], "Passwords must match")
                        .required("Required")
                })}
            >
                {({handleReset}) => (
                    <Form>
                        <MyTextInput
                            label="Name"
                            name="name"
                            placeholder="Name"
                        />
                        <MyTextInput
                            label="Email"
                            name="email"
                            placeholder="Email"
                        />
                        <MyTextInput
                            label="Password"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        <MyTextInput
                            label="Confirm password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            type="password"
                        />

                        <button type="submit">Create</button>

                        <button type="button" onClick={handleReset}>
                            Reset
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
