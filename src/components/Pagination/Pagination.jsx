import "./Pagination.css";

function Pagination({
  pageNumber,
  currentPage,
  nextPageFn,
  previousPageFn,
  currentPageFn,
  isPreviousActive,
  isNextActive,
}) {

  const list = [];

  for (let i = 1; i <= pageNumber; i++) {
    list.push(
      <button
        className={`pageButton ${currentPage === i && "currentPage"}`}
        id={i + "page"}
        key={i + "page"}
        onClick={() => currentPageFn(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <div className="pageNavigation">
        <button
          className={`pageButton ${isPreviousActive && "active"}`}
          onClick={previousPageFn}
        >
          {"<"}
        </button>
        <div style={{ display: "inline" }}>{list}</div>
        <button
          className={`pageButton ${isNextActive && "active"}`}
          onClick={nextPageFn}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default Pagination;
