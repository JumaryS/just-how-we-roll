const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 ******************************************************************/

​
const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
​
  return result;
}
​
const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }
​
  return arr.slice().sort(byNumber);
}
​



/******************
 * BUTTON QUERIES *
 ******************/
const diePicture6=document.querySelector('#d6-roll')
const doubleSixes1= document.querySelector('#double-d6-roll-1')
const doubleSixes2= document.querySelector('#double-d6-roll-2')

/******************
 * CLICK HANDLERS *
 ******************/
const rollD6Outcome = function (){
  let value = getRandomNumber(6)
  sixes.push(value)
  diePicture6.src = "images/d6/"+ value +".png"
}


const double = function (){
  let first6die = getRandomNumber(6)
  let second6die = getRandomNumber(6)
  doubleSixes.push(first6die + second6die)
  doubleSixes1.src = "images/d6/" + first6die + ".png"
  doubleSixes2.src = getImagePathD6(second6die)
}
/*******************
 * EVENT LISTENERS *
 *******************/
diePicture6.addEventListener('click',rollD6Outcome)
doubleSixes1.addEventListener('click',double)
doubleSixes2.addEventListener('click',double)

/****************
 * MATH SECTION *
 ****************/



/********************
* MATH-AREA QUERIES *
********************/


