import React from "react";

function SearchForm({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label className="BookSearchLabel"><h3>Search For Books</h3></label>
        <br></br>
        <input className="col-12 form-control"
          id="Title"
          value={query}
          type="text"
          name="query"
          placeholder="Enter book title"
          onChange={handleInputChange}
          size="55"
          required
          />
      </div>
      <button type="submit" className="submitBtn btn btn-raised btn-secondary" onClick={handleFormSubmit}>
        Submit</button>
    </form>
  );
}

export default SearchForm;