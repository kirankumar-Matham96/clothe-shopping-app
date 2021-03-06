import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/menu-item.component.scss';

const MenuItem = ({
  title,
  imageUrl,
  size = null,
  history,
  linkUrl,
  match,
}) => (
  <div
    className={size ? `${size} menu-item` : 'menu-item'}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
