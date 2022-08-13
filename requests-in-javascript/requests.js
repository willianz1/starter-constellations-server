const axios = require("axios");

const url = "http://localhost:5000/constellations";
const idToDelete = "fRQwdcz";
axios
/* This code is to filter the constellations and only show less then 10
  .get(url)
  .then((response) => {
    const result = response.data.filter((constellation) => {
        return constellation.starsWithPlanets < 10;
    });
    console.log(result);
    //console.log(response.statusText);
    //console.log(response.data);
  })

  This posts (adds) new item into constellations
.post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
  });

  /*.catch((error) => {
    console.log(error.message);
  });*/
  
  .delete(`${url}/${idToDelete}`);