import React, { useState } from 'react';
import './PostActions.css';

const PostActions = ({SocialLabel}) => {
  const [rows, setRows] = useState([{ action: 'Like', link: '' }]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const addRow = () => {
    setRows([...rows, { action: 'Like', link: '' }]);
  };

  return (
    <div className="post-actions-container">
      <h1 className='socialLabel'>{SocialLabel}</h1>
      {rows.map((row, index) => (
        <div className="post-action-row" key={index}>
          <select
            value={row.action}
            onChange={(e) => handleChange(index, 'action', e.target.value)}
          >
            <option value="Like">Like</option>
            <option value="Comment">Comment</option>
            <option value="Share">Repost</option>
          </select>

          <input
            type="text"
            placeholder="Post link"
            value={row.link}
            onChange={(e) => handleChange(index, 'link', e.target.value)}
          />

          {index === rows.length - 1 && (
            <button className="add-button" onClick={addRow}>+</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostActions;
