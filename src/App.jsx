import React, { useState } from 'react';
import Parent from './Components/Parent';
import { data } from './data';

/**
 * App component
 * @returns {JSX.Element} - Rendered App component
 */
const App = () => {
  const [isSuperParentHighlighted, setIsSuperParentHighlighted] = useState(false);

  /**
   * Handles mouse enter event for the super parent component
   */
  const handleMouseEnterSuperParent = () => {
    setIsSuperParentHighlighted(true);
  };

  /**
   * Handles mouse leave event for the super parent component
   */
  const handleMouseLeaveSuperParent = () => {
    setIsSuperParentHighlighted(false);
  };

  return (
    <div
      className={`super-parent-component ${isSuperParentHighlighted ? 'highlighted' : ''}`}
      onMouseEnter={handleMouseEnterSuperParent}
      onMouseLeave={handleMouseLeaveSuperParent}
    >
      {data.children.map((child) => (
        <Parent
          key={`parent-${child.props.name}`}
          name={child.props.name}
          children={child.props.children}
          isSuperParentHighlighted={isSuperParentHighlighted}
          handleMouseEnter={handleMouseEnterSuperParent}
          handleMouseLeave={handleMouseLeaveSuperParent}
        />
      ))}
    </div>
  );
};

export default App;