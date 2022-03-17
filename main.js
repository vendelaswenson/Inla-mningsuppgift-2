class Character {
  constructor(name, gender, height, mass, hairColor, pictureUrl, id) {
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.mass = mass;
    this.hairColor = hairColor;
    this.pictureUrl = pictureUrl;
    this.id = id;
  }

  compLength(data) {
    const heightComp = Math.floor(this.height) - Math.floor(data.height);
    const heightComp2 = Math.floor(data.height) - Math.floor(this.height);
    if (+this.height > +data.height) {
      if (this == infoOne) {
        info1.innerHTML = `<h3>My height is ${this.height} cm and ${data.name}'s height is ${data.height} cm! That's ${heightComp} cm less than me!</h3>`;
      } else if (this == infoTwo) {
        info2.innerHTML = `<h3>My height is ${this.height} cm and ${data.name}'s height is ${data.height} cm! That's ${heightComp} cm less than me!</h3>`;
      }
    } else if (Number(this.height) < Number(data.height)) {
      if (this == infoOne) {
        info1.innerHTML = `<h3>My height is ${this.height} cm and ${data.name}'s height is ${data.height}cm! That's ${heightComp2} cm more than me!</h3>`;
      } else {
        info2.innerHTML = `<h3>My height is ${this.height} cm and ${data.name}'s height is ${data.height}cm! That's ${heightComp2} cm more than me!</h3>`;
      }
    } else {
      if (this == infoOne) {
        info1.innerHTML = `<h3>We both have the same height of ${this.height} cm!</h3>`;
        info2.innerHTML = `<h3>We both have the same height of ${this.height} cm!</h3>`;
      }
    }
  }

  compWeight(data) {
    const weightComp = Math.floor(this.mass) - Math.floor(data.mass);
    const weightComp2 = Math.floor(data.mass) - Math.floor(this.mass);
    if (+this.mass > +data.mass) {
      if (this == infoOne) {
        info1.innerHTML = `<h3>My weight is ${this.mass}kg and ${data.name} 's weight is ${data.mass} kg. That's ${weightComp} kg less than me!</h3>`;
      } else if (this == infoTwo) {
        info2.innerHTML = `<h3> My weight is ${this.mass} kg and ${data.name} 's weight is ${data.mass} kg. That's ${weightComp} kg less than me!</h3>`;
      }
    } else if (Number(this.mass) < Number(data.mass)) {
      if (this == infoOne) {
        info1.innerHTML = `<h3>My weight is ${this.mass} kg and ${data.name} 's weight is ${data.mass} kg. That's ${weightComp2} more than me :(</h3>`;
      } else {
        info2.innerHTML = `<h3>My weight is ${this.mass}kg and ${data.name} 's  weight is ${data.mass} kg. That's ${weightComp2} more than me :(</h3>`;
      }
    } else {
      if (this == infoOne) {
        info1.innerHTML = `<h3>We have the same weight of ${this.mass}kg!</h3>`;
        info2.innerHTML = `<h3>We have the same weight of ${this.mass}kg!</h3>`;
      }
    }
  }

  compGender(data) {
    if (this == infoOne) {
      if (
        (this.gender === "none" && data.gender === "none") ||
        (this.gender === "n/a" && data.gender === "n/a") ||
        (this.gender === "n/a" && data.gender === "none") ||
        (this.gender === "none" && data.gender === "n/a")
      ) {
        info1.innerHTML = `<h3>Niether of us know what our gender is :((</h3>`;
      } else if (data.gender === "n/a" || data.gender === "none") {
        info1.innerHTML = `<h3>My gender is ${this.gender} but ${data.name} doesn't know wich gender he/she has</h3>`;
      } else if (this.gender === "n/a" || this.gender === "none") {
        info1.innerHTML = `<h3>I don't know what my gender is :( ${data.name}'s gender is ${data.gender}</h3>`;
      } else if (this.gender == data.gender) {
        info1.innerHTML = `<h3>We both have the same gender of ${this.gender}!</h3>`;
      } else {
        info1.innerHTML = `<h3>My gender is ${this.gender} and ${data.name}'s gender is ${data.gender}!</h3>`;
      }
    } else {
      if (
        (this.gender === "none" && data.gender === "none") ||
        (this.gender === "n/a" && data.gender === "n/a") ||
        (this.gender === "n/a" && data.gender === "none") ||
        (this.gender === "none" && data.gender === "n/a")
      ) {
        info2.innerHTML = `<h3>Niether of us know what our gender is :((</h3>`;
      } else if (this.gender == data.gender) {
        info2.innerHTML = `<h3>We both have the same gender of ${this.gender}!</h3>`;
      } else if (data.gender === "n/a" || data.gender === "none") {
        info2.innerHTML = `<h3>My gender is ${this.gender} but ${data.name} doesn't know wich gender he/she has</h3>`;
      } else if (this.gender === "n/a" || this.gender === "none") {
        info2.innerHTML = `<h3>I don't know what my gender is :( ${data.name}'s gender is ${data.gender}</h3>`;
      } else {
        info2.innerHTML = `<h3>My gender is ${this.gender} and ${data.name}'s gender is ${data.gender}!</h3>`;
      }
    }
  }

  compHaircolor(data) {
    if (this == infoOne) {
      if (
        (this.hairColor === "none" && data.hairColor === "none") ||
        (this.hairColor === "n/a" && data.hairColor === "n/a") ||
        (this.hairColor === "n/a" && data.hairColor === "none") ||
        (this.hairColor === "none" && data.hairColor === "n/a")
      ) {
        info1.innerHTML = `<h3>Niether of us have hair :((</h3>`;
      } else if (this.hairColor === "none" || this.hairColor === "n/a") {
        info1.innerHTML = `<h3>I don't have any hair :( ${data.name} has really beautiful ${data.hairColor} hair</h3>`;
      } else if (data.gender === "n/a" || data.gender === "none") {
        info1.innerHTML = `<h3>My hair color is ${this.hairColor} but ${data.name} doesn't have any hair</h3>`;
      } else if (this.hairColor == data.hairColor) {
        info1.innerHTML = `<h3>We both have the same haircolor!</h3>`;
      } else {
        info1.innerHTML = `<h3>My hair color is ${this.hairColor} and ${data.name} has ${data.hairColor} hair!</h3>`;
      }
    } else {
      if (
        (this.hairColor === "none" && data.hairColor === "none") ||
        (this.hairColor === "n/a" && data.hairColor === "n/a") ||
        (this.hairColor === "n/a" && data.hairColor === "none") ||
        (this.hairColor === "none" && data.hairColor === "n/a")
      ) {
        info2.innerHTML = `<h3>Niether of us have hair :((</h3>`;
      } else if (this.hairColor === "none" || this.hairColor === "n/a") {
        info2.innerHTML = `<h3>I dont have any hair :( ${data.name} has really beautiful ${data.hairColor} hair</h3>`;
      } else if (data.gender === "n/a" || data.gender === "none") {
        info2.innerHTML = `<h3>My hair color is ${this.hairColor} but ${data.name} doesn't have any hair</h3>`;
      } else if (this.hairColor == data.hairColor) {
        info2.innerHTML = `<h3>We both have the same haircolor!</h3>`;
      } else {
        info2.innerHTML = `<h3>My hair color is ${this.hairColor} and ${data.name} has ${data.hairColor} hair!</h3>`;
      }
    }
  }
}

const dataOne = document.querySelector(".data1");
const dataTwo = document.querySelector(".data2");
const showBtn = document.querySelector(".showBtn");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const infoWrapper = document.querySelector(".infoWrapper");

const getPictureUrl = (id) => {
  switch (id) {
    case "1":
      return "Bilder/LukeSkywalker.png";
    case "2":
      return "./Bilder/C-3PO.jpeg";
    case "3":
      return "./Bilder/R2-D2.jpeg";
    case "4":
      return "./Bilder/DarthVader.jpeg";
    case "5":
      return "./Bilder/LeiaOrgana.jpeg";
    case "6":
      return "./Bilder/OwenLars.jpeg";
    case "7":
      return "./Bilder/BeruLars.png";
    case "8":
      return "./Bilder/R5-D4.jpeg";
    case "9":
      return "./Bilder/BiggsDarklighter.png";
    case "10":
      return "./Bilder/ObiWanKenobi.jpeg";
    default:
  }
};

let btnComp = (data, compData, elem, btn) => {
  if (data.id == elem) {
    if (btn.className == "weight") {
      data.compWeight(compData);
    } else if (btn.className == "length") {
      data.compLength(compData);
    } else if (btn.className == "hairColor") {
      data.compHaircolor(compData);
    } else if (btn.className == "gender") {
      data.compGender(compData);
    }
  }
};

const btn = (data) => {
  const compareBtn = document.querySelectorAll("#compareBtn");
  compareBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      infoWrapper.classList.remove("hidden");
      let elem = btn.getAttribute("data-id");
      if (data === infoOne) {
        btnComp(infoOne, infoTwo, elem, btn);
      } else {
        btnComp(infoTwo, infoOne, elem, btn);
      }
    });
  });
};

let infoOne;
let infoTwo;
let inputValue;
let inputValue2;

showBtn.addEventListener("click", () => {
  const e = document.querySelector("#char-1");
  const elem = document.querySelector("#char-2");
  inputValue = e.value;
  inputValue2 = elem.value;

  if (inputValue == "null" || inputValue2 == "null") {
    alert("You need to pick two characters!");
  } else if (inputValue === inputValue2) {
    alert("You need to choose two different characters!");
  } else {
    info1.innerHTML = "";
    info2.innerHTML = "";

    getInfo(inputValue).then((data) => {
      infoOne = data;
      console.log(infoOne);
      dataOne.innerHTML = `
      <div class="char">
      <img src="${data.pictureUrl}" alt="${data.name}">
      <h2 class="name">${data.name}</h2>
      <div class="buttonContainer">
      <button id="compareBtn" class="weight" data-id="${data.id}">Weight</button>
      <button id="compareBtn" class="length" data-id="${data.id}">Length</button>
      <button id="compareBtn" class="hairColor" data-id="${data.id}">Hair Color</button>
      <button id="compareBtn" class="gender" data-id="${data.id}">Gender</button>
  </div>
      </div>`;
      btn(infoOne);
    });

    getInfo(inputValue2).then((data2) => {
      infoTwo = data2;
      console.log(infoTwo);
      dataTwo.innerHTML = `
      <div class="char">
      <img src="${data2.pictureUrl}" alt="${data2.name}">
      <h2 class="name">${data2.name}</h2>
      <div class="buttonContainer">
      <button id="compareBtn" class="weight" data-id="${data2.id}">Weight</button>
      <button id="compareBtn" class="length" data-id="${data2.id}">Length</button>
      <button id="compareBtn" class="hairColor" data-id="${data2.id}">Hair Color</button>
      <button id="compareBtn" class="gender" data-id="${data2.id}">Gender</button>
      </div>
      </div>`;
      btn(infoTwo);
    });
  }
});

const getInfo = async (id) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await response.json();
  return new Character(
    data.name,
    data.gender,
    data.height,
    data.mass,
    data.hair_color,
    getPictureUrl(id),
    id
  );
};
