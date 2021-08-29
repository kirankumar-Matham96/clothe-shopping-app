import React from 'react';
import '../../styles/preview-collections.component.scss';

const previewCollection = ({ title, items }) => (
  <div className={'collection-preview'}>
    <h1 classNamer={'title'}>{title.toUpperCase()}</h1>
    <div className={'preview'}>
      {items
        .filter((item, ind) => ind < 4)
        .map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default previewCollection;
