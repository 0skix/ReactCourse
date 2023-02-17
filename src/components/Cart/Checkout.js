import React, { useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
	const [form, setForm] = useState({
		name: "",
		street: "",
		postalCode: "",
		city: "",
	});
	const [isEmpty, setIsEmpty] = useState({
		name: true,
		street: true,
		postalCode: true,
		city: true,
	});
	const handleInputChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
		if (event.target.value.trim() !== "") {
			setIsEmpty({ ...isEmpty, [event.target.name]: true });
		} else {
			setIsEmpty({ ...isEmpty, [event.target.name]: false });
		}
	};
	const handleBlur = (event) => {
		if (event.target.value.trim() === "") {
			setIsEmpty({ ...isEmpty, [event.target.name]: false });
		}
	};
	const confirmHandler = (event) => {
		event.preventDefault();
		const allNotEmpty = Object.values(isEmpty).every((value) => value === true);
		if (!allNotEmpty) {
			alert("Please enter values");
		} else {
			props.onConfirm({
				name: form.name,
				street: form.street,
				postalCode: form.postalCode,
				city: form.city,
			});

			// this is the function that is passed from Cart.js
			alert("Order Placed");
		}
	};
	const nameInputClasses = isEmpty.name ? "" : "Please enter value";
	const streetInputClasses = isEmpty.street ? "" : "Please enter value";
	const postalcodeInputClasses = isEmpty.postalCode ? "" : "Please enter value";
	const cityInputClasses = isEmpty.city ? "" : "Please enter value";
	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={classes.control}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={form.name}
					onChange={handleInputChange}
					onBlur={handleBlur}
				/>
				{nameInputClasses}
			</div>
			<div className={classes.control}>
				<label htmlFor="street">Street</label>
				<input
					type="text"
					id="street"
					name="street"
					value={form.street}
					onChange={handleInputChange}
					onBlur={handleBlur}
				/>
				{streetInputClasses}
			</div>
			<div className={classes.control}>
				<label htmlFor="postal">Postal Code</label>
				<input
					type="text"
					id="postal"
					name="postalCode"
					value={form.postalCode}
					onChange={handleInputChange}
					onBlur={handleBlur}
				/>
				{postalcodeInputClasses}
			</div>
			<div className={classes.control}>
				<label htmlFor="city">City</label>
				<input
					type="text"
					id="city"
					name="city"
					value={form.city}
					onChange={handleInputChange}
					onBlur={handleBlur}
				/>
				{cityInputClasses}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
