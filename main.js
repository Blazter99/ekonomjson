const url = "https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json";
const main = document.getElementById("main");



fetch("https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json")

async function getINFO() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
 
  function object() {
    data.forEach(element => {
      const ul = document.createElement('ul');
      const faktnr = document.createElement('li');
      const forvaltning = document.createElement('li');
      const konterat = document.createElement('li');
      const konto = document.createElement('li');
      const leverantor = document.createElement('li');    
      const orgnr = document.createElement('li');


      faktnr.innerHTML = data['fakt.nr'];
      forvaltning.innerHTML = data.forvaltning;
      konterat.innerHTML = data.konterat;
      konto.innerHTML = data.konto;
      leverantor.innerHTML = data.leverantor;
      orgnr.innerHTML = data['org.nr'];

      ul.appendChild(faktnr);
      ul.appendChild(forvaltning);
      ul.appendChild(konterat);
      ul.appendChild(konto);
      ul.appendChild(leverantor);
      ul.appendChild(orgnr);
      main.appendChild(ul);
      
    });
  }
  
  object(data);
 }

getINFO();



  

  