import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import DIRECTORY_DATA from './directoryData';

import './directory.styles.scss';

const Directory = () => {
  const sections = DIRECTORY_DATA;
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
};


export default Directory;
