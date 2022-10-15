import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { handleSearch } = useGlobalContext();
  return (
    <form className='form flex fd-column' onSubmit={(e) => e.preventDefault()}>
      <label className='form__label'>Search Hacker News</label>
      <input
        type='text'
        className='form__input'
        placeholder='React'
        onChange={(e) => handleSearch(e)}
      />
    </form>
  );
};

export default SearchForm;
