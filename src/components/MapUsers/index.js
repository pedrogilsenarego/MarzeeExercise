import React from "react";
import { Typography } from "@mui/material";
import { detailPlaceStart } from "../../redux/Places/places.actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const mapState = (state) => ({
	focus: state.placesData.focus
});

const MapUsers = ({ data }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { focus } = useSelector(mapState);

	if (data === null) return;

	return (
		<MapContainer
			style={{ height: "100%", width: "100%" }}
			center={[32.505, -0.09]}
			zoom={1}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{data &&
				data.map((item, pos) => {
					return (
						<Marker
							key={pos}
							position={[
								focus === item.id
									? Number(item.address.geo.lat) + 3
									: Number(item.address.geo.lat),
								Number(item.address.geo.lng)
							]}
						>
							<Popup>
								<Typography>{item.name}</Typography>
								<Typography
									style={{ cursor: "pointer", color: "darkblue" }}
									onClick={() => {
										history.push(`/detail/${item.name}`);
										dispatch(detailPlaceStart(item));
									}}
								>
									More information
								</Typography>
							</Popup>
						</Marker>
					);
				})}
		</MapContainer>
	);
};

export default MapUsers;
