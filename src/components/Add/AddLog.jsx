import ButtonSub from "../Button/ButtonSub.jsx";
import "./add.css";
import { useState } from "react";
//import { useParams } from "react-router-dom";

function AddPet({petID}) {
  //const params = useParams();

  const [petData, setMyData] = useState({
    pet_id: petID,
    description: "",
    status: "",
  });

  const inputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    //... pridedu visus buvusius ordertData elementus ir ...

    setMyData((oldPetData) => ({
      ...oldPetData,
      [name]: value,
    }));
    // console.log(name, value);
    // console.log(oldPetData);
    console.log(petData);
  };

  const addPet = (event) => {
    event.preventDefault();
    console.log(petData);

    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/logs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petData),
    })
      .then((res) => res.json())
      .then((data) => window.location.reload())

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <div className="main">
        <form onSubmit={addPet}>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={petData.description}
            onChange={inputChange}
            required
          />
          <br />
          <input
            type="text"
            id="status"
            name="status"
            placeholder="status"
            value={petData.status}
            onChange={inputChange}
            required
          />
          <br />
          <ButtonSub />
        </form>
      </div>
    </div>
  );
}

export default AddPet;
