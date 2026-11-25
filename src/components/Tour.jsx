
import React, { useState } from "react";

const Tour = ({ data, removeTour }) => {
  const [description, setDescription] = useState(false);

  function show() {
    setDescription(true);
  }

  function hide() {
    setDescription(false);
  }

  return (
    <article>

      {description ? (
        <>
          <p>{data.description}</p>
          <button onClick={hide}>Show less</button>
        </>
      ) : (
        <>
          <p>{data.description.slice(0, 200)}</p>
          {data.description.length > 200 && (
            <button onClick={show}>Show more</button>
          )}
        </>
      )}

      <button onClick={() => removeTour(data.slug)}>
        Remove
      </button>

    </article>
  );
};

export default Tour;
