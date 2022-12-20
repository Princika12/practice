// const arr1 = [1,2,3,4,5,6,7,8]; //array of numbers
// const arr2 = ["s1", "s2", "s3","s4"]; //array of strings
// const arr3 = [true,false,true,true,false]; //array of boolean data


// const arr4 = [
//      const email =
//       {
//          firstname: "princi017",
//           lastname: "kardam@017",
//           contactNo: "8869809275",
//           from:"princi",
//           to: "kardam",
//         },
//           const detail = {firstname: "princi017",
//           lastname: "kardam@017",
//           contactNo: "8869809275",
//           from:"princi",
//           to: "kardam",},
//           const email = {firstname: "princi017",
//           lastname: "kardam@017",
//           contactNo: "8869809275",
//           from:"princi",
//           to: "kardam",},
//           const email = {firstname: "princi017",
//           lastname: "kardam@017",
//           contactNo: "8869809275",
//           from:"princi",
//           to: "kardam",},
//     {name: "Princi" , age: 20},
//     {name: "Kardam" , age: 20},
//     {name: "princi" , age: 20},
//     {name: "kardam" , age: 20}
// ]

// array is used to store multiple data of any datatype is String,number,Boolean
// array of an object is an array which hold objects as its value

// network tab stores the data of a full stack website
// console.log(a["detail.name"]);


const resultModels = [
    {
      name: "Ashutosh Mishra 1",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 2",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 3",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 4",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 5",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 6",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 7",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
    {
      name: "Ashutosh Mishra 7",
      branch: "ECE",
      rollno: "2019041035",
      session: "2019-2023",
      "college name": "MMMUT,GKP",
      age: 10,
    },
  ];
  //  console.log(resultModels[4].name);
// console.log(arrayname[objectno].name);

// for (i=0, i<8, i++ ) {
//   resultModels.age=50;
// }
// console.log(resultModels.age);

// for(let candidate of resultModels){
//     candidate.age=50;
// }
// console.log(resultModels.age);

// update rollno of ashutosh mishra3 to 1000

for( let candidate of resultModels){
  if(candidate.name === "Ashutosh Mishra 5" ){
    candidate["college name"] = "IIT Bombay";
  }
}
console.log(resultModels);
