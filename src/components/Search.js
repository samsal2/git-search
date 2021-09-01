import React, { useState } from 'react'

export const Search = ({ searchCall, clearCall, showClear, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = (event) => setText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (text === "") {
      setAlert({ msg: "Please enter something", type: "light" });
    } else {
      searchCall(text);
      setText("");
      setAlert(null);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" name="text" placeholder="Search Users" value={text} onChange={onChange} />
        <input className="btn btn-dark btn-block" type="submit" value="Search" />
      </form>
      {showClear && <button className="btn btn-light btn-block" onClick={clearCall} >
        Clear
      </button>}
    </div>
  );
}

export default Search;