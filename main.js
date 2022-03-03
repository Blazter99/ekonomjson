const url = "https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json";

fetch("https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json").then(res => res.json()).then(function(data) {
    console.log(data);
  })





