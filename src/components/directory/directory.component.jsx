import React from 'react';
import MenuItem from '../menu-items/menu-item.component';
import '../../styles/directory.component.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl:
            'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          id: 1,
          // linkUrl: 'shop/hats',
          linkUrl: 'hats',
        },
        {
          title: 'jackets',
          imageUrl:
            'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2,
          // linkUrl: 'shop/jackets',
          linkUrl: 'jackets',
        },
        {
          title: 'sneakers',
          imageUrl:
            'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 3,
          // linkUrl: 'shop/sneakers',
          linkUrl: 'sneakers',
        },
        {
          title: 'womens',
          imageUrl:
            // 'https://images.unsplash.com/photo-1556159992-e189f8e50104?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1514069419621-1adbe445edf1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG1vZGVsfGVufDB8fDB8YmxhY2t8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          size: 'large',
          id: 4,
          // linkUrl: 'shop/women',
          linkUrl: 'women',
        },
        {
          title: 'mens',
          imageUrl:
            'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          size: 'large',
          id: 5,
          // linkUrl: 'shop/men',
          linkUrl: 'men',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
