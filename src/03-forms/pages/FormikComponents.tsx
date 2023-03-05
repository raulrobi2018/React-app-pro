import {Field, ErrorMessage, Formik, Form} from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>

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
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage component={"span"} name="firstName" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage component={"span"} name="lastName" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text" />
                        <ErrorMessage component={"span"} name="email" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value={""}>Pick something</option>
                            <option value={"developer"}>Developer</option>
                            <option value={"designer"}>Designer</option>
                            <option value={"senior-it"}>Senior IT</option>
                            <option value={"junior-it"}>Junior IT</option>
                            <option value={"tester"}>Tester</option>
                        </Field>
                        <ErrorMessage component={"span"} name="jobType" />

                        <label htmlFor="terms">
                            <Field name="terms" type="checkbox" />
                            Terms and conditions
                        </label>
                        <ErrorMessage component={"span"} name="terms" />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
