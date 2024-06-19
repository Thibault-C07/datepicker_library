import React from 'react';

const TextInput = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{ padding: '8px', fontSize: '16px' }}
  />
);

export default TextInput;