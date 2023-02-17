import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [loading, setLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);
	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				process.env.REACT_APP_FIREBASE_URL + "meals.json"
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const responseData = await response.json();

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMeals(loadedMeals);
			setLoading(false);
		};

		fetchMeals().catch((error) => {
			setHttpError(error.message);
		});
	}, []);

	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				{httpError ? (
					<p className={classes.MealsLoadingError}>Failed to fetch</p>
				) : loading ? (
					<p className={classes.MealsLoading}>Loading...</p>
				) : (
					<ul>{mealsList}</ul>
				)}
			</Card>
		</section>
	);
};

export default AvailableMeals;
