import { useEffect, useState } from "react";

export default function usePagination(allData, itemInPage) {
  const allDataLength = allData.length;
  const totalPages = Math.ceil(allDataLength / itemInPage);
  const [newCurrentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    goCurrentPage(1);
  }, [totalPages]);

  function nextPage() {
    if (newCurrentPage < totalPages) {
      filterData(newCurrentPage + 1);
      setCurrentPage(newCurrentPage + 1);
    }
  }
  function previousPage() {
    if (newCurrentPage > 1) {
      filterData(newCurrentPage - 1);
      setCurrentPage(newCurrentPage - 1);
    }
  }

  function goCurrentPage(current) {
    filterData(current);
    setCurrentPage(current);
  }

  function filterData(current) {
    const start = (current - 1) * itemInPage;
    const end = start + itemInPage;
    const currentData = allData.slice(start, end);
    return currentData;
  }

  const currentData = filterData(newCurrentPage);
  const isPreviousActive = newCurrentPage > 1;
  const isNextActive = newCurrentPage < totalPages;

  return {
    maxPages: totalPages,
    newCurrentPage: newCurrentPage,
    pageData: currentData,
    isPreviousActive,
    isNextActive,
    nextPage,
    previousPage,
    goCurrentPage,
  };
}
