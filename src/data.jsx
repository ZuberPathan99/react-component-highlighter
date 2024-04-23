import React from 'react';
import Child from './Components/Child';
import Parent from './Components/Parent';

// Data structure representing the component hierarchy
export const data = {
  name: 'Super Parent',
  children: [
    <Parent name="Parent 1">
      <Child name="Child 1" />
      <Child name="Child 2" />
      <Parent name="Parent 1.1">
        <Child name="Child 1.1.1" />
        <Child name="Child 1.1.2" />
      </Parent>
    </Parent>,
    <Parent name="Parent 2">
      <Child name="Child 2.1" />
      <Child name="Child 2.2" />
    </Parent>,
  ],
};