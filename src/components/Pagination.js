import { useGlobalContext } from "../context";

const Pagination = () => {
  const { page, nbPages, prevButton, nextButton } = useGlobalContext();
  return (
    <div className='pagination-container flex'>
      <button className='btn' onClick={prevButton}>
        Prev
      </button>
      <p className='pagination__page-tracker'>
        {page + 1} of {nbPages}
      </p>
      <button className='btn' onClick={nextButton}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
