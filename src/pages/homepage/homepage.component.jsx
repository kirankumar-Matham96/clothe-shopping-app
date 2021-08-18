import React from 'react';
import '../../styles/homepage.component.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Directory title={'JACKETS'} />
      </div>
    </div>
  );
};

export default HomePage;
