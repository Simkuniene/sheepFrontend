import { useState } from "react";

export default function useSearchNumber(allData) {
  const [filterName, setfilterName] = useState(allData);
  const [isFilter_, setIsFilter] = useState(false);

  const searchChange = (event) => {
    const { value } = event.target;
    const splitData = value.split(" ");
    let filterforEach = allData;

    splitData.forEach((element) => {
      filterforEach = filterforEach.filter((item) =>
        item.number.toLowerCase().includes(element.toLowerCase())
      );
    });

    setIsFilter(true);
    setfilterName(filterforEach);
  };

  return {
    searchChange,
    filterName: isFilter_ ? filterName : allData,
  };
}
