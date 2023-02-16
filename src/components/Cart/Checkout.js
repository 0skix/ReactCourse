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
		name: false,
		street: false,
		postalCode: false,
		city: false,
	});
	const handleInputChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
		if (event.target.value.trim() !== "") {
			setIsEmpty({ ...isEmpty, [event.target.name]: true });
		}
	};
	const confirmHandler = (event) => {
		event.preventDefault();
		const allNotEmpty = Object.values(isEmpty).every((value) => value === true);
		if (!allNotEmpty) {
			alert("Please enter values");
		} else {
			alert("Order Placed");
		}
	};
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
				/>
			</div>
			<div className={classes.control}>
				<label htmlFor="street">Street</label>
				<input
					type="text"
					id="street"
					name="street"
					value={form.street}
					onChange={handleInputChange}
				/>
			</div>
			<div className={classes.control}>
				<label htmlFor="postal">Postal Code</label>
				<input
					type="text"
					id="postal"
					name="postalCode"
					value={form.postalCode}
					onChange={handleInputChange}
				/>
			</div>
			<div className={classes.control}>
				<label htmlFor="city">City</label>
				<input
					type="text"
					id="city"
					name="city"
					value={form.city}
					onChange={handleInputChange}
				/>
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
