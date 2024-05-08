const nameInput = document.getElementById("name");
const xpInput = document.getElementById("xp");
const showLevelBtn = document.getElementById("button");
const message = document.getElementById("message");

showLevelBtn.addEventListener("click", function () {
  message.innerHTML = "";
  const hero = { name: nameInput.value, xp: xpInput.value };
  let text = null;
  if (!hero.name) {
    text = "Por favor, Informe o nome do Heroi!";
  } else {
    let level = "Ferro";
    if (hero.xp >= 1001 && hero.xp <= 2000) level = "Bronze";
    if (hero.xp >= 2001 && hero.xp <= 5000) level = "Prata";
    if (hero.xp >= 5001 && hero.xp <= 7000) level = "Ouro";
    if (hero.xp >= 7001 && hero.xp <= 8000) level = "Platina";
    if (hero.xp >= 8001 && hero.xp <= 9000) level = "Ascendente";
    if (hero.xp >= 9001 && hero.xp <= 10000) level = "Imortal";
    if (hero.xp >= 10001) level = "Radiante";
    text = `O Herói de nome ${hero.name} está no nível de ${level}`;
  }
  message.appendChild(document.createTextNode(text));
});
