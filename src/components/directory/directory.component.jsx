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
          // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          imageUrl:
            'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          id: 1,
          // linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          imageUrl:
            'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2,
          // linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          imageUrl:
            'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 3,
          // linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          imageUrl:
            // 'https://images.unsplash.com/photo-1556159992-e189f8e50104?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            // 'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            // 'https://images.unsplash.com/photo-1595781277164-ace075847115?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHdvbWVufGVufDB8fDB8YmxhY2t8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1514069419621-1adbe445edf1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG1vZGVsfGVufDB8fDB8YmxhY2t8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          size: 'large',
          id: 4,
          // linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          imageUrl:
            // 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            // 'https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
