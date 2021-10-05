//1
function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
      if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz")
    }
        else if(i % 3 === 0) {
        console.log("Fizz")
    }
        else if(i % 5 === 0) {
          console.log("Buzz")
    } 
    else {
        console.log(i)
    }
  }
}

//2
function fizzBuzz(number){
  let answer = []
  for(let i = 1; i <= number; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
          answer.push("FizzBuzz");
      }
      else if (i % 3 === 0){
          answer.push("Fizz")
      }
      else if (i % 5 === 0){
          answer.push("Buzz")
      }
      else {
          answer.push(i)
      }
  }
  return answer;
}