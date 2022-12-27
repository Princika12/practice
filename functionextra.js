// functions can return any data or entity
// create a function ,whuich turn an array of top n even numbers, where n is the input given during function call

// const handleevenNumbers =(n)=>{
//    let arr=[];
    
//    for(let i=0;i<2*n;i=i+2){
//        arr.push(i);
//    }

//     return arr;
// };

// const evenNumbertill5 = handleevenNumbers(5)
// console.log(evenNumbertill5);

// create a function which turns an array of an AP sequence, where a is the first element, d is common diff
// and n is total no of elements. All a,d,n are given as arguments during function call


const apseries =(a,d,n)=>{
    let arr=[];
    let counter = 0; 
    for(let i = a; counter < n; i = i + d){
        arr.push(i);
        counter = counter + 1;
    }

     return arr;
 };
// Dry run
 const apseries2 = apseries(2,5,9);
 console.log(apseries2);

// this function returns an object which contains username and phonrnumber given during
// function call as argument

// this is a form filling function
 const createobject = (name,number) =>{

    const newobject = {
        username: name,
        userphone: number,
    };
    return newobject;
 };

 const formfunc = createobject("Princi", 8869809275);
 console.log(formfunc);


//  name email contactno age

const myobject = (name, email,number,age , address) =>{

    const oneobject = {
        username: name,
        useremail: email,
        userphone: number,
        userage: age,
        useraddress: address,
    };
    return oneobject;
 };

 const detail = myobject("Princi","abc@gmail.com", 8869809275, 50, "mmmut");
 console.log(detail);
