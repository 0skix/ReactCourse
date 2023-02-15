import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const {
		value: enteredName,
		isValid: nameIsValid,
		hasError: nameHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");
	const {
		value: enteredSurname,
		isValid: surnameIsValid,
		hasError: surnameHasError,
		valueChangeHandler: surnameChangeHandler,
		inputBlurHandler: surnameBlurHandler,
		reset: resetSurnameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes("@"));

	let formIsValid = false;
	if (nameIsValid && surnameIsValid && emailIsValid) {
		formIsValid = true;
	}
	const submitHandler = (event) => {
		event.preventDefault();
		if (!nameIsValid || !surnameIsValid || !emailIsValid) {
			return;
		}
		console.log(enteredName);
		console.log(enteredSurname);
		console.log(enteredEmail);

		resetNameInput();
		resetSurnameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameHasError
		? "form-control invalid"
		: "form-control";
	const surnameInputClasses = surnameHasError
		? "form-control invalid"
		: "form-control";
	const emailInputClasses = emailHasError
		? "form-control invalid"
		: "form-control";
	return (
		<form onSubmit={submitHandler}>
			<div className="control-group">
				<div className={nameInputClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						onChange={nameChangeHandler}
						value={enteredName}
						onBlur={nameBlurHandler}
					/>
					{nameHasError && <p className="error-text">Name must not be empty</p>}
				</div>
				<div className={surnameInputClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						onChange={surnameChangeHandler}
						value={enteredSurname}
						onBlur={surnameBlurHandler}
					/>
					{surnameHasError && (
						<p className="error-text">Surname must not be empty</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					id="name"
					onChange={emailChangeHandler}
					value={enteredEmail}
					onBlur={emailBlurHandler}
				/>
				{emailHasError && <p className="error-text">Email must have @</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
