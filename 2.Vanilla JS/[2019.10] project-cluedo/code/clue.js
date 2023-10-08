// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "#537f4c",
  description: "He has a lot of connections",
  age: 56,
  image: "assets/new_green.jpg",
  occupation: "Entrepreneur",
  textColor: "#ffffff"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "#e5e4e0",
  description: "Cheerfully plump middle-aged cook with red hair",
  age: 60,
  image: "assets/new_white.jpg",
  occupation: "Housekeeper",
  textColor: "#000000"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "#452441",
  description: "Widely seen as the intellectual",
  age: 62,
  image: "assets/new_plum.jpg",
  occupation: "Professor",
  textColor: "#ffffff"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "#c6533e",
  description: "Young, cunning, and highly attractive",
  age: 39,
  image: "assets/new_scarlet.jpg",
  occupation: "Actress",
  textColor: "#ffffff"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "#6ba2c9",
  description: "The usual classy social butterfly",
  age: 46,
  image: "assets/new_peacock.jpg",
  occupation: "Socialite",
  textColor: "#ffffff"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "#d9c97e",
  description: "A military man both dignified and dangerous",
  age: 63,
  image: "assets/new_mustard.jpg",
  occupation: "Colonel",
  textColor: "#ffffff"
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10,
  image: "assets/rope.png"
}

const knife = {
  name: "Dagger",
  weight: 10,
  image: "assets/dagger.png"
}

const candlestick = {
  name: "Candlestick",
  weight: 21,
  image: "assets/unlit-candelabra.png"
}

const dumbbell = {
  name: "Monkey Wrench",
  weight: 25,
  image: "assets/monkey-wrench.png"
}

const poison = {
  name: "Poison",
  weight: 5,
  image: "assets/poison.png"
}

const axe = {
  name: "Axe",
  weight: 35,
  image: "assets/wood-axe.png"
}

const leadPipe = {
  name: "Lead Pipe",
  weight: 20,
  image: "assets/lead-pipe.png"
}

const trophy = {
  name: "Blunderbuss",
  weight: 15,
  image: "assets/blunderbuss.png"
}

const pistol = {
  name: "Pistol",
  weight: 12,
  image: "assets/revolver.png"
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const study = {
  name: "Study",
  image: "assets/study.jpg"
}

const conservatory = {
  name: "Conservatory",
  image: "assets/conservatory.jpg"
}

const kitchen = {
  name: "Kitchen",
  image: "assets/kitchen.jpg"
}

const lounge = {
  name: "Lounge",
  image: "assets/lounge.jpg"
}

const library = {
  name: "Library",
  image: "assets/library.jpg"
}

const hall = {
  name: "Hall",
  image: "assets/hall.jpg"
}

const billiardRoom = {
  name: "Billiard Room",
  image: "assets/billiard-room.jpg"
}

const ballroom = {
  name: "Ballroom",
  image: "assets/ballroom.jpg"
}

const dinningRoom = {
  name: "Dinning Room",
  image: "assets/dinning-room.jpg"
}

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  leadPipe,
  trophy,
  pistol
]

const rooms = [
  study,
  conservatory,
  kitchen,
  lounge,
  library,
  hall,
  billiardRoom,
  ballroom,
  dinningRoom
]

console.log(suspects)
console.log(weapons)
console.log(rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mistery = {
  killer,
  weapon,
  room
}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerCard = document.getElementById("killerCard")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.classList.add('inner-outline')
  theKiller.style.color = mystery.killer.textColor
  theKiller.style.background = mystery.killer.color
  theKillerCard.innerHTML = 'KILLER'
  theKillerImage.src = mystery.killer.image
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = `<b>Age</b><br> ${mystery.killer.age}`
  theKillerOccupation.innerHTML = `<b>Occupation</b><br> ${mystery.killer.occupation}`
  theKillerDescription.innerHTML = `<b>Description</b><br>${mystery.killer.description}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weapon")
  const theWeaponCard = document.getElementById("weaponCard")
  const theWeaponImage = document.getElementById("weaponImage")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")

  theWeapon.classList.add('inner-outline')
  theWeapon.style.background = '#E3B874'
  theWeaponCard.innerHTML = 'WEAPON'
  theWeaponImage.src = mystery.weapon.image
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = `<b>Weight</b><br>${mystery.weapon.weight}`
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoom = document.getElementById('room')
  const theRoomCard = document.getElementById('roomCard')
  const theRoomName = document.getElementById("roomName")
  const theRoomImage = document.getElementById("roomImage")

  theRoom.classList.add('inner-outline')
  theRoom.style.background = '#E3B874'
  theRoomCard.innerHTML = 'ROOM'
  theRoomName.innerHTML = mystery.room.name
  theRoomImage.src = mystery.room.image
}
// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    alert("No mystery is yet to be revealed.");
  } else {
    alert(`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`);
  }
}