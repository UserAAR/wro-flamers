// pages/index.js

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import the FireMap to avoid SSR issues with Leaflet
const FireMap = dynamic(() => import("../components/FireMap.jsx"), { ssr: false });

export default function Home({ fireData }: any) {
  return (
    <div>
      <FireMap fireData={fireData} />
    </div>
  );
}

// Simulate fire data (you can replace this with an API call if needed)
export async function getServerSideProps() {
  const fireData = [
    {
      lat: 36.5,
      long: -119.5,
      cause: "Lightning",
      gis_acres: 1000,
      date: "2021-01-01",
      fire_name: "Fire 1",
    },
    {
      lat: 36.8,
      long: -120.1,
      cause: "Human",
      gis_acres: 2000,
      date: "2021-02-01",
      fire_name: "Fire 2",
    },
    {
      lat: 37.0,
      long: -120.5,
      cause: "Arson",
      gis_acres: 1500,
      date: "2021-03-01",
      fire_name: "Fire 3",
    },
  ];

  return {
    props: {
      fireData,
    },
  };
}
