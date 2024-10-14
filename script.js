/*
Registrace na očkování
V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.
*/

document.body.innerHTML += `<h1>Cvičení: Registrace na očkování</h1>`;

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

/*

Cena vstupenky
Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.


Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.
*/

// 1. Založte si webovou stránku s JavaScriptem.

document.body.innerHTML += `<h1>Cvičení: Cena vstupenky</h1>`;

// 2. Nechte uživatele zadat jeho věk.
const vekUzivatele = Number(prompt("Věk:"));

// 3. Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky a uložte do ní hodnotu 12.
const plnaCena = 12;

/*
4. Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel:
- 0 euro pro návštěvníky mladší 6 let,
- 65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
- 100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
- 50 % ze základní ceny pro ostatní (senior).

1. Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých eurech.

*/

let cena = 0;
let error = false; // vytvářím proměnnou pro případný error na vstupu, zatím je na false, počítáme s tím, že uživatel vyplní údaj správně

if (vek < 6) {
  cena = 0;
} else if (vekUzivatele >= 6 && vekUzivatele <= 26) {
  cena = Math.round(plnaCena * 0.65);
} else if (vekUzivatele >= 27 && vekUzivatele <= 64) {
  cena = plnaCena;
} else if (vekUzivatele > 64) {
  cena = Math.round(plnaCena * 0.5);
} else {
  error = true; // pokud se uživatel netrefí do vymezených možností (zadá např. záporné číslo nebo nějaký nečíselný znak), zobrazíme errorovou hlášku
}

// 2. Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.
if (error) {
  document.body.innerHTML += `<p>Nesprávně zadaný věk, cenu vstupenky nelze stanovit.</p>`;
} else {
  document.body.innerHTML += `<p>Cena vstupenky: ${cena} EUR</p>`;
}
