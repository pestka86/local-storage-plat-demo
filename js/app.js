const platilist = document.getElementById("platilist");
const platiform = document.getElementById("platiform");

const allPlats = [];

// constructor to create new playtpus
function Platypus(name) {
  this.name = name;
  this.render = function () {
    const listItem = document.createElement("li");
    listItem.textContent = this.name;
    platilist.appendChild(listItem);
  };
}

// form for the user to create new objects
function handleFormSubmit(event) {
  event.preventDefault();
  const newplat = new Platypus(event.target.newplat.value);
  allPlats.push(newplat);
  platiform.reset();
  newplat.render();
  localStorage.setItem("allPlats", JSON.stringify(allPlats));
}
