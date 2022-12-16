// uses of for loop
// 1. whenever we want to repeat a given code a no. of times of loop
// 2. whenever we want to print an array
// 3. whhenever we want to implement a code/codes, which is to be updated,
// after every iteration

// const Array1 = ["princi", "rani", "avantika", "sania", "anjali"];

// for loop has a property because of which the x gets updated after every iteration
// 
// console.log(Array1[0]);
// console.log(Array1[1]);
// console.log(Array1[2]);
// console.log(Array1[3]);
// console.log(Array1[4]);

// other way(using for loop)
// for(let x=0; x< 5; x=x++){
// console.log(x);
// }

// for(let x=0; x<5; x=x++){
//     console.log(array1[x]);
// }


// console.log("two ones are",2*1);
// console.log("two ones are",2*2);
// console.log("two ones are",2*3);
// console.log("two ones are",2*4);
// console.log("two ones are",2*5);
// console.log("two ones are",2*6);
// console.log("two ones are",2*7);
// console.log("two ones are",2*8);
// console.log("two ones are",2*9);
// console.log("two ones are",2*10);

// for(let index = 1; index < 11; index++){
//     console.log(2*index);
// }

// let AP series = 1,6,11,16,21 and so on... d= 5, a=1... 
// complete this AP series upto 50 terms

// let a = 1;
// for(let index = 1; index< 51; index=  index++ ){
//     console.log(a);
//     a = a + 5;
// }

// for(let index = 1; index< 51; index=  index+ (50-1)*){
//     console.log(index);
// }

// let GP series = 3,9,27,... and so on r = 3, a = 3.... upto 50 term


// for(let index = 1; index < 51; index = index+1){

//     b = b*3;
//     console.log(b);
// }
   
// 5 eg of for loop

//  1. table of 3
for(let index = 1; index < 11; index++){
        console.log(3*index);
     }

// 2.check whether given no is even or odd

for(i = 1; i< 7; i++){
    
        if(i%2 == 0){
            console.log(i+ 'is even');
        }
        else {
            console.log(i+ 'is odd');
        }
    
}

// 3.printiong a sentence

let n = 5;
for (let i = 1; i <= n; i++) {
    console.log('Tomorrow is Rani bday.');
}

// 4. printing a no repeatedly

let p = 5;
for (let i = 1; i <= n; i++) {
    console.log(i);     
}

// 5.printing sum

let q = 0;
 for (let index = 0; index < 8; index++){
     q += index;
   console.log(q);

}
