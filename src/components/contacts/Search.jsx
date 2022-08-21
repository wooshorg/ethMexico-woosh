const Search = () => {
  return (
    <div>
      <div className="relative flex items-center">
        <input
          placeholder="Search by username or email"
          className="w-full rounded-100vw px-6 py-4"
        />
        <button type="submit" className="absolute right-0 px-6">
          <img src="/assets/search.svg" />
        </button>
      </div>
    </div>
  );
};

export default Search;
