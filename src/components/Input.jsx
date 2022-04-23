import { useState } from "react"

const Input = ({ setInput }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInput(value);
    setValue("");
  }

  return (
    <div className="div_input_Container">
      <h1>URL Shortener Site</h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten the website it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>short the link of website</button>
      </div>
    </div>
  )
}

export default Input