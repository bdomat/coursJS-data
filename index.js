// Rappel des types de données
let string = "chaine de caractres";
let number = 33;
let boolean = true;
let maVariable;
console.log(typeof maVariable); // => Undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
console.log(array[1]); // => Toulouse
console.log(array[0][3]); // => d

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
console.log(array2[3][1]); // 2

console.log(array2[4].nom); // Denis

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

console.log(objet.age); // 33
console.log(objet.technos[0][1]); // a

objet.adresse = "22 rue du code";
console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["PHP", "React", "NodeJs"],
    admin: true,
  },
];

//console.log(data[2].pseudo); => Nikola

//---------------------------
// Les structures de contrôle
//---------------------------

if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //Valeur si faux
}

// While
let w = 0;
while (w < 10) {
  w++;
  console.log("La valeur de w est de : " + w);
}

//Do While
let d = 0;
do {
  d++;
  console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

//On déclare la valeur de i | on dit jusqu'ou on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  //console.log(i);
  console.log(data[i].technos);
  document.body.innerHTML += "<h2>" + data[i].technos + "</h2>";
}

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "purple";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//-----------------------------
// Méthodes String
//-----------------------------

// Méthode = fonction intégrée dans Javascript
let string2 = "Javascript est un langage orienté objet";

console.log(typeof string2); // Retourne le type
console.log(eval(parseInt("1") + 2)); //Converti en nombre 1 puis additionne 1+2
console.log(parseInt("42")); //Converti l'élement en nombre
console.log(isNaN(string2)); //Retourn true or false si l'élement testé est un nombre ou non

console.log(string2.length);
console.log(string2[string2.length - 1]); //Retourne la longueur de la chaine (l'index commence à 0, donc on enlève 1)

console.log(string2.indexOf("langage")); //Retourne -1 s'il ne connait pas

let newString = string2.slice(5, 17); //Retourne la chaine comprise entre l'index 5 et 17

console.log(newString);
console.log(string2.split("i")); //Découpe la chaine à chaque fois qu'il rencontre le caractère entre guillemets
console.log(string2.toLowerCase()); //Tout mettre en minuscule
console.log(string2.toUpperCase()); //Tout mettre en majuscule

console.log(string2.replace("Javascript", "PHP")); //Remplace un élément par un autre

//-----------------------------
// Méthodes Numbers
//-----------------------------
let number2 = 42.1234;
let numberString = "42.12 est un chiffre";
console.log(number2.toFixed(1)); //Conserve 1 seul chiffre après la virgule
console.log(parseInt("45")); //Converti en nombre
console.log(parseInt(numberString)); //Retourne 42 - Conserve le 1er chiffre rencontré dans la chaine
console.log(parseFloat(numberString)); //Retourne 42.12 - Conserve nombre à virgule rencontré dans la chaine

//Math
console.log(Math.PI); //Retourne chiffre PI
console.log(Math.round(4.5)); //Arrondi à l'entier sup ou inf
console.log(Math.floor(4.9)); //Arrondi à l'entier inférieur
console.log(Math.ceil(4.1)); //Arrondi à l'entier supérieur
console.log(Math.pow(2, 7)); //Retourne 2 puissance 7
console.log(Math.sqrt(16)); //Retourne la racine carré

console.log(Math.floor(Math.random() * 50)); //Retourne un entier entre 0 et 49

//-----------------------------
// Méthodes Arrays
//-----------------------------

let array3 = ["Javascript", "PHP", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);
console.log(newArray);

let newArray1 = [...array3, ...array4];
console.log(newArray1);

console.log(array3.join("-"));

console.log(array3.slice(1));
console.log(newArray.slice(2, 3));

console.log(array3.indexOf("Python"));

array3.forEach((language) => console.log(language));

console.log(array3.every((language) => language === "PHP"));
console.log(array3.some((language) => language === "PHP"));

//let shift = array3.shift(); //Supprime le 1er element du tableau
//console.log(array3);
console.log(array3.pop()); //Retourne le dernier element du tableau

const restArray = array3.splice(1, 1, "C++");
console.log(array3);

//IMPORTANT//
let arrayNumber = [4, 45, 45, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y)); //additionne tous les éléments du tableau
arrayNumber.push("Coucou"); //ajoute un élément dans un tableau
console.log(arrayNumber);

//FILTER, SORT, MAP

console.log(arrayNumber.filter((number) => number > 10));
console.log(arrayNumber.sort());
console.log(arrayNumber.sort((a, b) => b - a));
console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => b - a));

arrayNumber.map((number) => console.log(number));

/*document.body.innerHTML = arrayNumber
  .map((number) => `<li> ${number}</li>`)
  .join("");
*/
//-----------------------------
// Méthodes Objects
//-----------------------------

/*document.body.innerHTML = data
  .filter((user) => user.admin === false)
  .filter((user) => user.pseudo.includes("i"))
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `<div class="user-card">
  <h2>${user.pseudo}</h2>
  <p> Age: ${user.age}</p>
  <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
</div>
`
  )
  .join("");*/

//-----------------------------
// Les Dates
//-----------------------------

//Date classique

let date = new Date();

// Timestamp
let timestamp = Date.parse(date);

console.log(timestamp);

//IsoString
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}

console.log(dateParser(date)); // retourne : 23 janvier 2023 à 22:47
console.log(dateParser(timestamp)); // retourne : 23 janvier 2023 à 22:47

//-----------------------------
// Destructuring
//-----------------------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;

console.log(moreData.destVar); // EQUIVALENT - Affiche ['Element 1', 'Element 2']
console.log(destVar); // EQUIVALENT - Affiche ['Element 1', 'Element 2']

let array5 = [70, 80, 90];
console.log(array5[0]);
console.log(array5[1]);
console.log(array5[2]);
//EQUIVALENT ^^
let [x, y, z] = array5;
console.log(x);
console.log(y);
console.log(z);

console.log(iso);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  console.log(newDate.split("-"));
  //[y, m, d] = newDate
  console.log(newDate);
};

console.log(dateDestructuring(iso));

//-----------------------------
// Les Datasets
//-----------------------------

const h3js = document.getElementById("javascript");
//console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
//h3.forEach((language) => console.log(language.dataset.lang));

//-----------------------------
// Les Regex
//-----------------------------

let mail = "from_scratch33@gmail.com";
//console.log(mail.search(/from/));

//console.log(mail.replace(/from/, "de"));

//console.log(mail.match(/SCratch/i));
//console.log(mail.match(/[zug]/));
//console.log(mail.match(/[123]/));

//Tous les chiffres
//console.log(mail.match(/\d/));

//Matcher toutes les lettres
//console.log(mail.match(/[a-z]/));

//console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 2655446121212;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
