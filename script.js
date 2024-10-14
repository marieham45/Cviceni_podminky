/*
Registrace na očkování
V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.
*/

/*
1. Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
*/
const jmeno = prompt("Jméno:");
const vek = Number(prompt("Věk"));
const heslo = prompt("Heslo:");

/*
2. Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
*/

document.body.innerHTML += `
<p>${vek >= 65 ? "Věk v pořádku." : "Nízký věk"}</p>`;

/* využívám ternární operátor, ale lze i pomocí if/else takto:

if (vek >= 65) {
document.body.innerHTML += "<p>Věk v pořádku.</p>"
} else {
 document.body.innerHTML += "<p>Nízký věk.</p>"

 }

*/

/*
3. Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).

*/

if (vek >= 65) {
  document.body.innerHTML += "<p>Věk v pořádku.</p>";

  {
    if (heslo.length <= 8) {
      document.body.innerHTML += "<p>Slabé heslo.</p>";
    }
  }
} else {
  document.body.innerHTML += "<p>Nízký věk.</p>";
}
// tady už máme vnořenou podmínku a ternární operátor není vhodný
