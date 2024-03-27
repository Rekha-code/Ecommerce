import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box made">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E commerce is the process of buying and selling goods and services
          online. It has become increasingly popular in recent years, as it
          offers a convenient and efficient way to shop. There are many
          advantages to using e commerce, including the ability to compare
          prices, access a wider range of products, and enjoy greater
          convenience. It is also typically faster and more convenient than
          traditional shopping methods.
        </p>
        <p>
          There are many advantages to using e commerce, including the ability
          to compare a wider range of products, and enjoy greater convenience.
          It is also typically faster and more convenient than traditional
          shopping methods.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
