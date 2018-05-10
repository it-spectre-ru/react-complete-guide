import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationsItems}>
      <NavigationItem link="/" exact>Burger builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;