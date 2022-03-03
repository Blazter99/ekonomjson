const url = "https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json";
const main = document.getElementById("main");



fetch("https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json")

async function getINFO() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const [{konto}] = data;
  
  console.log([{konto}]);
}


getINFO();

  

  