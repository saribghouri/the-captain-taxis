"use client";
import React, { useState } from 'react';

// This is a container component to handle full-width dropdown positioning
const DropdownContainer = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  return (
    <div 
      className="full-width-dropdown-container"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      {children}
    </div>
  );
};

export default DropdownContainer;
