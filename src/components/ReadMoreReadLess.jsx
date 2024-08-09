"use client"
import { useState } from 'react';
import { Collapse } from 'react-collapse';

const ReadMoreReadLess = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const previewText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return (
    <div>
      <Collapse isOpened={isExpanded}>
        <p style={{marginBottom: "4px !important"}} >{text}</p>
      </Collapse>
      {!isExpanded && <p>{previewText}</p>}
      <button onClick={toggleReadMore} style={{color:"#8E2E0F"}}>
        {isExpanded ? 'Read Less ▼' : 'Read More ▼'}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;
