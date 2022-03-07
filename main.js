const url = "https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json";
const main = document.getElementById("main");





async function getURL() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  if(response) {
    show(data);
  }
 
  
}

 getURL();


 function show(data) {
  let tab = 
      `<div>
      <ul>fakt.nr</ul>
      <ul>förvaltning</ul>
      <ul>konterat</ul>
      <ul>konto</ul>
      <ul>leverantör</ul>
      <ul>org.nr</ul>
      </div>`;
  for (let d of data) {
      tab += `<ul> 
  <li>${d.faktnr} </li>
  <li>${d.forvaltning}</li>
  <li>${d.konterat}</li> 
  <li>${d.konto}</li> 
  <li>${d.leverantor}</li>
  <li>${d.orgnr}</li>                 
  </ul>`;
  }
  
  document.getElementById("main").innerHTML = tab;
}


