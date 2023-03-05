import {Formik, Form} from "formik";
import * as Yup from "yup";
import {MyCheckbox, MySelect, MyTextInput} from "../components";
import "../styles/styles.css";

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, "Should have 15 characters or less")
                        .required("Required"),
                    lastName: Yup.string()
                        .max(15, "Should have 15 characters or less")
                        .required("Required"),
                    email: Yup.string()
                        .email("Email is not valid")
                        .required("Required"),
                    terms: Yup.boolean().oneOf(
                        [true],
                        "Should accept the terms and conditions"
                    ),
                    jobType: Yup.string()
                        .required("Required")
                        .notOneOf(
                            ["junior-it"],
                            "The option selected is not permited"
                        )
                })}
            >
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            placeholder="First name"
                        />
                        <MyTextInput
                            label="Last Name"
                            name="lsstName"
                            placeholder="Last name"
                        />
                        <MyTextInput
                            label="Email address"
                            name="email"
                            placeholder="Email"
                        />

                        <MySelect label="Job Type" name="jobType">
                            <option value={""}>Pick something</option>
                            <option value={"developer"}>Developer</option>
                            <option value={"designer"}>Designer</option>
                            <option value={"senior-it"}>Senior IT</option>
                            <option value={"junior-it"}>Junior IT</option>
                            <option value={"tester"}>Tester</option>
                        </MySelect>

                        <MyCheckbox label="Terms and conditions" name="terms" />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
