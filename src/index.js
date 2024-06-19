import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextInput } from './lib';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <h1>Hello React</h1>
      <TextInput
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));