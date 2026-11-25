
import React, { useState, useEffect, useCallback } from "react";
import Loading from "./Loading.jsx";
import Tours from "./Tours.jsx";

const App = () => {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tours from API
  const fetchTours = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://www.badhistorian.com/api/tours.json"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch tours");
      }

      const data = await res.json();
      setTourData(data.tours);

    } catch (error) {
      console.log(error);
      setError("Unable to load tours. Please try again.");

    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  // Remove selected tour
  function removeTour(slug) {
    setTourData((previousTours) => {
      return previousTours.filter((tour) => tour.slug !== slug);
    });
  }

  return (
    <main id="main">

      {loading ? (
        <Loading />
      ) : error ? (
        <>
          <p>{error}</p>
          <button onClick={fetchTours}>Retry</button>
        </>
      ) : tourData.length === 0 ? (
        <>
          <h2>No tours left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </>
      ) : (
        <Tours
          tourData={tourData}
          removeTour={removeTour}
        />
      )}

    </main>
  );
};

export default App;
