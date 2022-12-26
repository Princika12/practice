let a = 15;
let b = 20;
let c = a + b;
console.log(c);

let d = 23;
let e = 24;
 let f = d + e;
 console.log(f);



//  whenwver we observe a similar kind of code repeated on our codeebase, then we can define
// a function in which we will mention the codes. now whenever we are in need of the code we 
// we call the function 
// functions run only when called

// returninmg functions doesnt execute after the

const sumhandler = (firstname,lastname)=> {
   const fullname = firstname+ lastname;
   return fullname;
};

  const sum = sumhandler("Princi", "Kardam");
  console.log(sum);

const sum2 = sumhandler("Rani", "Singh");
console.log(sum2);

// adding
const add = (a,b)=>{
 let c = a + b;
 return c;
}; 

let sol1 = add (4,5);
let sol2 = add (10,5);
let sol3 = add(4,5);
let sol4 = add (5,5);
let sol5 = add(30,5);
console.log(sol1);
console.log(sol2);
console.log(sol3);
console.log(sol4);
console.log(sol5);

// subtraction
const subt = (a,b)=>{
    let c = a - b;
    return c;
   }; 
   
   let sub1 = subt (4,5);
   let sub2 = subt (10,5);
   let sub3 = subt (20,5);
   let sub4 = subt (25,5);
   let sub5 = subt (18,5);
   console.log(sub1);
   console.log(sub2);
   console.log(sub3);
   console.log(sub4);
   console.log(sub5);


   // multiplication
const mult = (a,b)=>{
    let c = a * b;
    return c;
   }; 
   
   let mul1 = mult (4,5);
   let mul2 = mult (10,5);
   let mul3 = mult (2,5);
   let mul4 = mult (10,7);
   let mul5 = mult (1,8);
   console.log(mul1);
   console.log(mul2);
   console.log(mul3);
   console.log(mul4);
   console.log(mul5);

   // division
const divi = (a,b)=>{
    let c = a / b;
    return c;
   }; 
   
   let div1 = divi (4,5);
   let div2 = divi (10,5);
   let div3 = divi (25,5);
   let div4 = divi (40,5);
   let div5 = divi (10,2);
   console.log(div1);
   console.log(div2);
   console.log(div3);
   console.log(div4);
   console.log(div5);


// using one function add,sub,mult,div
const operation = (a,b,type)=>{
   if(type=== add){
    let c = a + b;
    return c;
   }
   else if(type===sub){
    let d = a - b;
    return d;
   }
   else if(type===mult){
    let e = a + b;
    return d;
   }
   else if(type===div){
    let f = a + b;
    return f;
   }
   };

   const  sol10 = operation(2,2,add);
    console.log(sol1);
