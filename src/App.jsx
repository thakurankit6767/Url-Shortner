import { useState } from 'react';
import './App.css';

import Input from './components/Input';
import Result from './components/Result';

function App() {
  const [inputValueData, setInput] = useState("");

  return (
    <div className="maincontainer_div">
      <Input setInput={setInput} />

      <Result inputValueData={inputValueData} />
    </div>
  );
}

export default App;