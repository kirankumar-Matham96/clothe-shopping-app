import React from 'react';
import Collections from '../../Data/ShopData/shopData';
import CollectionPreview from '../../components/Preview-Collections/preview-collection.component';

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: Collections,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className={'shop-page'}>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default Shop;
