//Print even numbers from 0 to 10
const even = () =>{
    for(let i = 0; i <= 10; i++){
      if(i % 2 === 0){
        console.log(i);
      }
    }
  }
  even();
  
  
  //Print multiplication tables from 1 to 10
  
  const tables = () =>{
    for(let i = 1; i <= 10; i++){
      for(let j = 1; j<= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
      }
    }
  }
  tables();
  
  //return boolean if divisible by 10
  const boo = () =>{
    let i = 24;
    if(i % 10 === 0){
      console.log(true);
    }else{
      console.log(false);
    }
  }
  boo();
  
  //Object destructring
  const people = {
    name: "Vivek",
    favFood: "Biryani",
    address:{
      street: "25 Bertha avenue",
      city: "Toronto"
    }
  }
  
  const { name: x1, favFood:x2, address: { street:x3, city:x4 }} = people;
  console.log(x4);
  
  
  //Find Factorial
  const factorial = arg =>{
    for(let i = arg - 1; i > 0; i--){
      arg = arg * i;
    }
    return arg;
  }
  factorial(6);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  