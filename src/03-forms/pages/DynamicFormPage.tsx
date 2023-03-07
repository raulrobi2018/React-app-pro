import {Formik, Form} from "formik";
import {MySelect, MyTextInput} from "../components";
import data from "../data/custom-form.json";
import * as Yup from "yup";

const initialValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};

for (const input of data) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === "required") {
            schema = schema.required("Required");
        }

        if (rule.type === "minLength") {
            schema = schema.min(
                (rule as any).value,
                `The minimun length is ${(rule as any).value}`
            );
        }

        if (rule.type === "email") {
            schema = schema.email("Email format not valid");
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>Dynamic Form Page</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form>
                        {data.map(
                            ({name, type, placeholder, label, options}) => {
                                if (
                                    type === "input" ||
                                    type === "password" ||
                                    type === "email"
                                ) {
                                    return (
                                        <MyTextInput
                                            name={name}
                                            type={type as any}
                                            label={label}
                                            placeholder={placeholder}
                                            key={name}
                                        />
                                    );
                                }

                                if (type === "select") {
                                    return (
                                        <MySelect
                                            name={name}
                                            type={type as any}
                                            label={label}
                                            key={name}
                                        >
                                            <option value={""}>
                                                Select an option
                                            </option>
                                            {options?.map((op) => (
                                                <option
                                                    key={op.id}
                                                    value={op.name}
                                                >
                                                    {op.name}
                                                </option>
                                            ))}
                                        </MySelect>
                                    );
                                }
                            }
                        )}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
