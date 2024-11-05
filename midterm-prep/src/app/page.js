"use client" //remember to add this in order to use useState in next js

import { useState } from "react";

//To Do
// - add button
// - fetch data
// - function to add data to state
// - make it responsive
// - display data
// - function to clear data
// - component for empty state
// - component for data state
// - error handling if the data doesn't come back (bonus)
// Nasa API link on github: https://github.com/nasa/apod-api

export default function Home() {

  //If useState !null, probably fetching or loading data, or have data
  // If useState === data, we can display our data
  const [astronomyData, setAstronomyData] = useState(null);
  const [loading, setLoading] = useState(null);
  
  async function fetchAstronomyData() {
    //fetch data here
    setLoading(true);
    //using await keyword no instance pause and wait until get result
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5");

    const data = await response.json();

    setAstronomyData(data);
    setLoading(false);
  };

  const DisplayData = () => {
    //display if we have data
    //loading state (maybe data?)
    //fulfilled state (data exists)
    //empty state (!data)

    //stringify the data
    const formattedData = JSON.stringify(astronomyData);

    if(loading) {
      return (
        <div>Loading</div>
      );
    } 
    
    //title, url, explanation
    if(astronomyData) {
      const dataThatIsFormattedForDisplay = [];
      //(entry, i) entry is the key, i is the itterater
      astronomyData.forEach((entry, i) => {
        dataThatIsFormattedForDisplay.push(
          <article key={i}>
            <img className="bg-[length:200px_200px]" src={entry.url}/>
            <h3 className="text-lg font-semibold text-fuchsia-300">{entry.title}</h3>
            <p>{entry.explanation}</p>
          </article>
        )
      })
      return (
      <section>
        <h2 className=" pt-2 pb-2 text-fuchsia-400 font-black text-xl">Display Data Below ▼</h2>
        <div>{dataThatIsFormattedForDisplay}</div>
      </section>
      );
    }

    return(
      <div>
        No data fetch yet!
      </div>
    );
  };

  const Header = () => {
    //building the UI that grabs data
    //dont forget to add return if you have multiple line
    return (
      <>
        <header>Welcome to my MIDTERM PREP</header>
        <button 
        disabled={loading}
        onClick={fetchAstronomyData}
        className="border-white border-solid border-2 p-2">{loading ? "Fetch Astronomy Data..." : "Display Content"}</button>
      </>
    );
  }


  return (
    <div className="m-8">
      <Header/>
      <DisplayData/>
    </div>
  );
}

