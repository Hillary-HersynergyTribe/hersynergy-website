import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const herSynergyMarkers: {
  markerOffset: number;
  name: string;
  coordinates: [number, number];
}[] = [
  {
    markerOffset: 5,
    name: "Nigeria",
    coordinates: [9.082, 8.6753],
  },
  {
    markerOffset: 5,
    name: "Kenya",
    coordinates: [37.9062, 0.1236],
  },
  { markerOffset: 5, name: "USA", coordinates: [-106.5348, 38.7946] },
  { markerOffset: 5, name: "Canada", coordinates: [-106.3468, 56.1304] },

  { markerOffset: 5, name: "Netherlands", coordinates: [0.0913, 47.1326] },
  { markerOffset: 5, name: "UK", coordinates: [-3.4360, 55.3781] },

  { markerOffset: 5, name: "South Africa", coordinates: [22.9375, -30.5595] },

  { markerOffset: -20, name: "Germany", coordinates: [10.4515, 51.1657] },
];

const MapChart = () => {
  return (
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#CEBBC9"
              stroke="#B69AAF"
            />
          ))
        }
      </Geographies>
      {herSynergyMarkers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            className=" scale-75"
            fill="none"
            stroke="#612351"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fontFamily: "nunito",
              fill: "#612351",
              fontSize: "8px",
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
