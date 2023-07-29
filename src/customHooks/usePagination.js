// - handlePageChange - fukncija kuri pashiftins elementus į priekį arba atgal pagal puslapį
// - dabartinį puslapį (Initial data)
// - kiek elementų puslapiuoti (tarkime 5 per puslapį)

import { useEffect, useState } from "react";

export default function usePagination(
  allData,
  // currentPage,
  itemInPage
  //  handlePageChange
) {
 // console.log("items from hook");
  //console.log(allData);
  const allDataLength = allData.length;
  const totalPages = Math.ceil(allDataLength / itemInPage);
  // const previousCurrentData = allData.slice(0, itemInPage);
  const [newCurrentPage, setCurrentPage] = useState(1);
  // const [newCurrentData, setCurrentData] = useState(previousCurrentData);


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
   // console.log(current + " currentPage from use");
    filterData(current);
    setCurrentPage(current);
  }

  function filterData(current) {
    const start = (current - 1) * itemInPage;
    const end = start + itemInPage;
    const currentData = allData.slice(start, end);
    // setCurrentData(currentData);
    return currentData;
  }

  const currentData = filterData(newCurrentPage);
  const isPreviousActive = newCurrentPage > 1;
  const isNextActive = newCurrentPage < totalPages;

  return {
    maxPages: totalPages,
    newCurrentPage: newCurrentPage,
    //  pageData: newCurrentPage !== 1 ? newCurrentData : previousCurrentData,
    pageData: currentData,
    isPreviousActive,
    isNextActive,
    nextPage,
    previousPage,
    goCurrentPage,
  };
}
