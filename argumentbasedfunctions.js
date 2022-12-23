// non-argument based
const realgenhu = ()=>{
    console.log("genhu is in progress");
    return "genhu completed";

};

let jhola = realgenhu(); // non-argument based function call
// non-argument based function does not require any input when called


const grindingmachine = ()=>{
    console.log(element, "genhu is in progress");
    return '${element} completed';
};

// argument based function require some input variable as arguments
// while function call 

const pisachana = grindingmachine("chana");
console.log(pisachana);
const aata = grindingmachine("genhu");
console.log(aata);
const pisachawal = grindingmachine("chawal");
console.log(pisachawal);

// you can pass as many arguments as you want while calling a function, just make sure, those
// calling arguments are predefined in functions