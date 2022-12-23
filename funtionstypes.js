// Functions are of two types:
// on the basis of returning property-
// 1. Non Returning function : which just perform the task assigned
// and return nothing at the end
// 2. Returning functions : do the task assigned and also return the result

// Returning functions end with the keywords "return data;", 
// whereas non-returning doesn't return anything

// While calling returning functions, we need to store the returning value of the function
// in a variable, whereas, non-returning doesn't need such variable

// eg.
const returningfunction1 = ()=>{
    let a = 5;
    let b = 10;
    let c = a+b;
    return 5525;
};

let result = returningfunction1();
console.log(result);



// non-returning
const securityfunction = ()=>{
    console.log("security work is done");

};
securityfunction();



