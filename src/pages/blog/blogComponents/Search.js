import React from "react";

const Search = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-5">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search.."
          className="p-5 border w-[70%]"
        />
        <input
          value="Search"
          type="submit"
          className="bg-[#ff4545] p-5 text-white w-[30%]"
        />
      </form>
    </div>
  );
};

export default Search;
