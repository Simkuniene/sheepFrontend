import { useState } from "react";

export default function useSearch(allData) {
  const [filterName, setfilterName] = useState(allData);
  const [isFilter_, setIsFilter] = useState(false);

  const searchChange = (event) => {
   // const { name, value } = event.target; //input name ir value reiksmes
    const { value } = event.target; //input name ir value reiksmes
    console.log(allData);
    const splitData = value.split(" ");
    console.log("splitData ", splitData);
    let filterforEach = allData;
   // let filterDataAll = [];
    splitData.forEach((element) => {
      filterforEach = filterforEach.filter(
        (item) =>
          item.number.toLowerCase().includes(element.toLowerCase()) ||
          item.breed.toLowerCase().includes(element.toLowerCase()) ||
          new Date(item.birth_date).toISOString().split("T")[0].includes(element)
      );

      // filterDataAll = filterforEach;
      //let filterDataAll1 = filterDataAll.concat(filterforEach);
    });

    //  const filterDataAll = allData.filter(
    //     (item) =>
    //       item.name.toLowerCase().includes(value.toLowerCase()) ||
    //       item.client_email.toLowerCase().includes(value.toLowerCase()) ||
    //       new Date(item.dob).toISOString().split("T")[0].includes(value)
    //   );

    setIsFilter(true);
    //setfilterName(filterDataAll);
    setfilterName(filterforEach);
  };

  // console.log("filterName from useSearch AAAAAAAAAAAAAA");
  // console.log(allData);
  return {
    searchChange,
    filterName: isFilter_ ? filterName : allData,
  };
}
