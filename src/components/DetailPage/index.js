import React from "react";
import { useSelector } from "react-redux";
import { Typography, Box, Button } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";

const mapState = (state) => ({
	detailPlace: state.placesData.detailPlace
});

const DetailPage = () => {
	const { detailPlace } = useSelector(mapState);
	const history = useHistory();

	return (
		<div style={{ height: "100vh", width: "100vw" }}>
			<Box
				style={{
					backgroundColor: "#ffffff66",
					position: "absolute",
					heigth: "300px",
					width: "300px",
					zIndex: 10000,
					marginTop: "2vh",
					marginLeft: "5vw",
					borderRadius: "10px"
				}}
			>
				<Typography style={{ color: "darkBlue", fontWeight: "600" }}>
					{detailPlace.name}
				</Typography>
				<Typography>
					{detailPlace.address.street} {detailPlace.address.suite},{" "}
					{detailPlace.address.city}
				</Typography>

				<Typography style={{ color: "darkBlue", marginTop: "10px" }}>
					Details:
				</Typography>
				<Typography>
					Phone:{detailPlace.phone} http://{detailPlace.website} email:
					{detailPlace.email}
				</Typography>
				<Typography style={{ color: "darkBlue", marginTop: "10px" }}>
					Company:
				</Typography>
				<Typography>
					{detailPlace.company.name}-{detailPlace.company.catchPhrase},{" "}
					{detailPlace.company.bs}
				</Typography>
				<Button
					onClick={() => {
						history.goBack();
					}}
				>
					Back
				</Button>
			</Box>
			<MapContainer
				style={{ height: "100vh", width: "100vw" }}
				center={[
					Number(detailPlace.address.geo.lat),
					Number(detailPlace.address.geo.lng)
				]}
				zoom={8}
			>
				{" "}
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker
					position={[
						Number(detailPlace.address.geo.lat),
						Number(detailPlace.address.geo.lng)
					]}
				>
					<Popup>
						<Typography>{detailPlace.name}</Typography>
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default DetailPage;
