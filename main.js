const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 *******************************************************************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

  const sortByNumber = function (arr){
  const byNumber = function(item1, item2){

    return item1 - item2
  }
  return arr.slice().sort(byNumber);
}


/******************
 * BUTTON QUERIES *
 ******************/
const diePicture6 = document.querySelector('#d6-roll')
const doubleSixes1 = document.querySelector('#double-d6-roll-1')
const doubleSixes2 = document.querySelector('#double-d6-roll-2')
const twelveDice = document.querySelector('#d12-roll')

/******************
 * CLICK HANDLERS *
 ******************/
const rollD6Outcome = function () {
  let value = getRandomNumber(6)
  sixes.push(value)
  diePicture6.src = "images/d6/" + value + ".png"
}


const double = function () {
  const first6Die = getRandomNumber(6)
  const second6Die = getRandomNumber(6)
  doubleSixes.push(first6Die + second6Die)


  doubleSixes1.src = "images/d6/" + first6Die + ".png"
  doubleSixes2.src = "images/d6/" + second6Die + ".png"

}

const twelve = function(){
  let twelveSided = getRandomNumber(12)

twelves.push(twelveSided)
twelveDice.src = "images/numbers/" + twelveSided + ".png"
}
/*******************
 * EVENT LISTENERS *
 *******************/
diePicture6.addEventListener('click', rollD6Outcome)
doubleSixes1.addEventListener('click', double)
doubleSixes2.addEventListener('click', double)
twelveDice.addEventListener('click', twelve)

/****************
 * MATH SECTION *
 ****************/



/********************
 * MATH-AREA QUERIES *
 ********************/