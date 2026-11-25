
import React from "react";
import Tour from "./Tour.jsx";

const Tours = ({ tourData, removeTour }) => {
  return (
    <section>
      {tourData.map((data) => {
        return (
          <div key={data.slug}>
            <h1>{data.title}</h1>

            <Tour
              data={data}
              removeTour={removeTour}
            />

            <img
              src={data.cover_image_url}
              alt={data.title}
            />

            <small>${data.price_usd}</small>
          </div>
        );
      })}
    </section>
  );
};

export default Tours;
