///////////////////////////////////////Odd or Even? (7)
function oddOrEven(array) {
   //enter code here
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  if(sum %2 === 0){
    return "even"
  }
  else return "odd"
}


//////////////////////////////////Grasshopper - Grade book (8)
function getGrade (s1, s2, s3) {
  // Code here
  let k = (s1 + s2 + s3)/3
  if(90 <= k && k <= 100) return 'A'
  else if(80 <= k && k < 90) return 	'B'
  else if(70 <= k && k < 80) return 	'C'
  else if(60 <= k && k < 70) return 	'D'
  else if(0 <= k && k < 60) return 	'F'
   
}


////////////////////////////////////
function mouthSize(animal) {
  // code here
  if(animal == "alligator" || animal == "ALLIGATOR")return "small"
  else return "wide"
}



//////////////////////////////
function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}



function simpleMultiplication(number){
    
  if(number % 2 == 0 ){
   return number * 8;
  }
  else{
  return number * 9;
  }    
}


const n = [1, 5, 7, 4, 8];
function descendingOrder(n){
  //...
    for (let j=0; j < n.length; j++){
  for (let i=0; i< n.length - 1 - j; i++){
      if (n[i]<n[i+1]){
          const buff = n[i];
          n[i] = n[i+1];
          n[i+1] = buff;
      }
  }
}
console.log(n);
}

///////////////////////////////////////
function litres(time) {
  return Math.floor(time/2)
 
}


///////////////
class SmallestIntegerFinder {
  findSmallestInt(array) {
    for (let n=0; n < array.length; n++){
        for (let i=0; i< array.length - 1 - n; i++){
            if (array[i]>array[i+1]){
                const buff = array[i];
                array[i] = array[i+1];
                array[i+1] = buff;
            }
        }
    }
    return array[0]
  }
}


////////////////////////
const stringToNumber = function(str){
  // put your code here
   return Number(str);
}



////////////////////////////
function rentalCarCost(d) {
  // Your solution here
  if(d<3) return d*40;
  else if(d>=3 && d<7) return d*40 - 20;
  else if(d>=7) return d*40 - 50
}


///////////////////////////
function between(a, b) {
  // your code here
  let k = [a]
  while(a<b){
    a += 1
    k.push(a)
  }
  return k
}

///////////////////////////
function findDifference(a, b) {
  //loading...
  v1 = a[0]*a[1]*a[2]
  v2 = b[0]*b[1]*b[2]
  sum = v1 - v2
  if( sum < 0)return -sum
  else return sum
}


///////////////////////////
function friend(friends){
  //your code here
  let result = friends.filter(f => f.length === 4)
  return result
}
