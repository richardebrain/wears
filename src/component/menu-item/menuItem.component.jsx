import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "../withRouter";




const MenuItem = ({ imageUrl, size, title, linkUrl, router }) => {
  const { location, navigate } = router;
return (
  <div
    className={`${size} menu-item`}
    onClick={() => navigate(`${location.pathname}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)
}

export default withRouter(MenuItem);
