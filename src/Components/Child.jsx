import React, { useState } from 'react';
import '../styles/styles.css';

/**
 * Child component
 * @param {Object} props - Component props
 * @param {string} props.name - Name of the child component
 * @param {boolean} props.isParentHighlighted - Whether the parent component is highlighted
 * @param {function} props.handleMouseEnter - Function to handle mouse enter event
 * @param {function} props.handleMouseLeave - Function to handle mouse leave event
 * @returns {JSX.Element} - Rendered Child component
 */
const Child = ({ name, isParentHighlighted, handleMouseEnter, handleMouseLeave }) => {
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Handles mouse enter event for the child component
   */
  const handleMouseEnterChild = () => {
    setIsHovered(true);
    handleMouseEnter(); // Call the parent's handleMouseEnter to highlight parent and siblings
  };

  /**
   * Handles mouse leave event for the child component
   */
  const handleMouseLeaveChild = () => {
    setIsHovered(false);
    handleMouseLeave(); // Call the parent's handleMouseLeave to remove highlight from parent and siblings
  };

  return (
    <div
      className={`child-component ${isHovered ? 'highlighted' : ''}`}
      onMouseEnter={handleMouseEnterChild}
      onMouseLeave={handleMouseLeaveChild}
    >
      {name}
    </div>
  );
};

export default Child;