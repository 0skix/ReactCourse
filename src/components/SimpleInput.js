import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		hasError: nameInputHasError,
		isValid: enteredNameIsValid,
		valueChangeHandler: nameChanged,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		hasError: emailInputHasError,
		isValid: enteredEmailIsValid,
		valueChangeHandler: emailChanged,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes("@"));

	let formIsValid = false;
	if (enteredNameIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName);
		console.log(enteredEmail);
		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? "form-control invalid"
		: "form-control ";
	const emailInputClasses = emailInputHasError
		? "form-control invalid"
		: "form-control ";
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					onChange={nameChanged}
					onBlur={nameBlurHandler}
					type="text"
					id="name"
					name="name"
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className="error-text">Name must not be empty</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					onChange={emailChanged}
					onBlur={emailBlurHandler}
					type="text"
					id="email"
					name="email"
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className="error-text">
						Email must not be empty and need to have @
					</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
