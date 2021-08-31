import React from 'react';
import CollectionItem from '../Collection-Items/Collection-item.component';
import '../../styles/collection-preview.component.scss';

const CollectionPreview = ({ title, items }) => (
  <div className={'collection-preview'}>
    <h1 classNamer={'title'}>{title.toUpperCase()}</h1>
    <div className={'preview'}>
      {items
        .filter((item, ind) => ind < 4)
        .map(({ id, ...otherItemsProps }) => (
          <CollectionItem key={id} {...otherItemsProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
