import {FormEvent} from "react";
import {useForm} from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
    const {
        name,
        email,
        password,
        repeatPassword,
        formData,
        onChange,
        resetForm,
        isValidEmail
    } = useForm({
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>RegisterPage</h1>
            <form onSubmit={(event) => onSubmit(event)}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && "has-error"}`}
                />
                {name.trim().length <= 0 && <span>This field is required</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && "has-error"}`}
                />
                {!isValidEmail(email) && <span>The email is not valid</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
                {password.trim().length <= 0 && (
                    <span>This field is required</span>
                )}
                {password.trim().length < 8 && password.trim().length > 0 && (
                    <span>This password should have at least 8 characters</span>
                )}

                <input
                    type="password"
                    placeholder="Repeat password"
                    name="repeatPassword"
                    value={repeatPassword}
                    onChange={onChange}
                />
                {repeatPassword.trim().length <= 0 && (
                    <span>This field is required</span>
                )}
                {repeatPassword.trim().length > 0 &&
                    repeatPassword.trim() !== password.trim() && (
                        <span>Repeat password is diferent</span>
                    )}

                <button type="submit">Create</button>

                <button type="button" onClick={resetForm}>
                    Reset
                </button>
            </form>
        </div>
    );
};
