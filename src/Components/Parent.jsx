import React, { useState } from 'react';
import Child from './Child';
import '../styles/styles.css';

/**
 * Parent component
 * @param {Object} props - Component props
 * @param {string} props.name - Name of the parent component
 * @param {React.ReactNode[]} props.children - Child components
 * @param {boolean} props.isParentHighlighted - Whether the parent component is highlighted
 * @param {function} props.handleMouseEnter - Function to handle mouse enter event
 * @param {function} props.handleMouseLeave - Function to handle mouse leave event
 * @returns {JSX.Element} - Rendered Parent component
 */
const Parent = ({ name, children, isParentHighlighted, handleMouseEnter, handleMouseLeave }) => {
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Handles mouse enter event for the parent component
   */
  const handleMouseEnterParent = () => {
    setIsHovered(true);
    handleMouseEnter();
  };

  /**
   * Handles mouse leave event for the parent component
   */
  const handleMouseLeaveParent = () => {
    setIsHovered(false);
    handleMouseLeave();
  };

  return (
    <div
      className={`parent-component ${(isHovered || isParentHighlighted) ? 'highlighted' : ''}`}
      onMouseEnter={handleMouseEnterParent}
      onMouseLeave={handleMouseLeaveParent}
    >
      <div className="parent-name">{name}</div>
      <div className="children-container">
        {React.Children.map(children, (child) => {
          // Check if child is a Parent component and limit highlighting to immediate children only
          const isChildParent = child.type.name === 'Parent';
          return React.cloneElement(child, {
            key: `child-${child.props.name}`,
            isParentHighlighted: isHovered && !isChildParent, // Only highlight immediate children of hovered parent
            handleMouseEnter: isChildParent ? handleMouseEnterParent : handleMouseEnter, // Pass down appropriate mouse enter handler
            handleMouseLeave: isChildParent ? handleMouseLeaveParent : handleMouseLeave, // Pass down appropriate mouse leave handler
          });
        })}
      </div>
    </div>
  );
};

export default Parent;
