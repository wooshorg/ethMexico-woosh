import SearchResults from './SearchResults';

const Search = (props) => {
  return (
    <div>
      <div className="relative flex items-center">
        <input
          placeholder="Search by username or email"
          className="w-full rounded-100vw px-6 py-4"
          onChange={props.onInputName}
        />
        <button type="submit" className="absolute right-0 px-6" onClick={props.onSearchContact}>
          <img src="/assets/search.svg" />
        </button>
      </div>
      
      <SearchResults 
        results={props.results}
      />
    </div>
  );
};

export default Search;
