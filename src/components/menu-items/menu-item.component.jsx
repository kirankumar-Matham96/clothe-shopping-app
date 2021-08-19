import React from 'react';
import '../../styles/menu-item.component.scss';

const MenuItem = ({ title, imageUrl, size = null }) => (
  <div className={size ? `${size} menu-item` : 'menu-item'}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
