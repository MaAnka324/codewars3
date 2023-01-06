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
