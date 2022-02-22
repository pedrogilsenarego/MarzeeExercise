import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addPlacesStart } from "../../redux/Places/places.actions";
import PlaceCard from "../PlaceCard";
import { Typography, Grid, Container } from "@mui/material";
import MapUsers from "../MapUsers";

const mapState = (state) => ({
	places: state.placesData.places
});

const Main = () => {
	const dispatch = useDispatch();
	const { places } = useSelector(mapState);

	const [error, setError] = useState("");

	const getPlaces = async () => {
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users`
			);

			const data = response.data;

			dispatch(addPlacesStart(data));
		} catch (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				if (error.message === "Request failed with status code 404") {
					setError("No results for this search");
				} else setError(error.message);
			}
		}
	};

	useEffect(
		() => {
			getPlaces();
		},
		// eslint-disable-next-line
		[]
	);

	if (places === null) return;

	return (
		<>
			<Container style={{ marginTop: "20px" }}>
				<Typography
					style={{ color: "darkBlue", fontWeight: "600" }}
					variant={"h4"}
				>
					Welcome Marzaa
				</Typography>
				<Typography style={{ color: "red" }}>{error}</Typography>
				<Grid
					container
					spacing={2}
					style={{ marginTop: "20px", minHeight: "70vh" }}
				>
					<Grid container item xs={5} spacing={2} style={{}}>
						{places &&
							places.map((item, pos) => {
								return (
									<Grid item xs={6} key={pos}>
										<PlaceCard item={item} />
									</Grid>
								);
							})}
					</Grid>
					<Grid item xs={7}>
						<MapUsers data={places} />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Main;
