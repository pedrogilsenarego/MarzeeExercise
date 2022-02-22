import React from "react";
import { Paper, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
	detailPlaceStart,
	detailFocusStart
} from "../../redux/Places/places.actions";

const PlaceCard = ({ item }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<Paper
			style={{
				backgroundColor: "lightGrey",
				color: "white",
				cursor: "pointer"
			}}
			onClick={() => {
				history.push(`/detail/${item.name}`);
				dispatch(detailPlaceStart(item));
			}}
			onMouseEnter={() => {
				dispatch(detailFocusStart(item.id));
			}}
			onMouseLeave={() => {
				dispatch(detailFocusStart(null));
			}}
		>
			<Typography>{item.name}</Typography>
			<Typography style={{ color: "darkBlue" }}>
				<b>{item.company.name}</b>
			</Typography>
		</Paper>
	);
};

export default PlaceCard;
