const url = "https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json";
const main = document.getElementById("main");



fetch("https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json")

async function getINFO() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const [{konto}] = data;
  const [{forvaltning}] = data;
  const [{leverantor}] = data;
  const [{konterat}] = data;

  
  console.log(konto);
  console.log(forvaltning);
  console.log(leverantor);
  console.log(konterat);

  document.getElementById("konto").innerHTML = konto;

}



getINFO();

  

  