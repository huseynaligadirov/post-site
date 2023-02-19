import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Item({ x }) {
  const [photos, setPht] = useState([]);
  useEffect(() => {
    fetch(`http://elanlar.im/app/item.php?mod=getimages&item=${x.id}`)
      .then((photo) => photo.json())
      .then((photo) => setPht(photo));
  });
  return (
    <Link to={"/details/" + x.id} key={x.id} class="product">
      <div className="photo">
        {photos.length ? (
          <img
            style={{ width: "100%", height: "100%" }}
            src={`https://elanlar.im/uploads/item/${photos[0].image}`}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <div class="texts">
        <span>
          <b>{x.price}$</b>
        </span>
        <h2>{x.title}</h2>
        <p>{x.info.slice(0, 12)}</p>
      </div>
    </Link>
  );
}

export default Item;
