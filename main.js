


const bikeOptions = document.getElementById("bikeOptions");
const bikeGenerator = document.getElementById("bikeGenerator");

bikeGenerator.addEventListener("click", generateBike);


async function generateBike () {
  
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await fetch("https://community-citybikes.p.rapidapi.com/valenbisi.json", config);

  const jokes = await response.json();

 bikeOptions.innerHTML = bikes.bikes1;
}