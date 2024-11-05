"use client";

import { useState } from "react";
import MainTemplate from "../components/templates/MainTemplate";

export default function Home() {
    const [astronomyData, setAstronomyData] = useState(null);
    const [loading, setLoading] = useState(null);

    async function fetchAstronomyData() {
        setLoading(true);
        try{
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5');
            const data = await response.json();
            setAstronomyData(data);
        } catch(error) {
            console.error("Failed to fetch data", error);
        } finally {
            setLoading(false);
        }
    }

    return(
        <MainTemplate
            fetchData={fetchAstronomyData}
            loading={loading}
            data={astronomyData}
        />
    );
}