// objects
let employee = {};
console.log(employee);
console.log(typeof employee);

let name1 = 'pName';
let player = {
    pName : 'Virat',
    pid : 18,
    prole : 'batsman'
}
console.log(player.pName);          // Virat
console.log(player.pid);            // 18
console.log(player[name1]);         // Virat

let car = {
    cName : 'Thar',
    cColor : 'Black',
    cPrice : '14lakhs' 
}
console.log(car.cName);             // Thar
console.log(car.cPrice);            // 14lakhs

let b = 'bName';
let c = 'bPrice';
let book = {
    bName : 'rich dad poor dad',
    bAuthor : 'Robort kyosaki',
    bPrice : 200
}
console.log(book[b]);               // rich dad poor dad
console.log(book[c]);               // 200

// eg
let student = {
    sname : 'Ab Devilliers',
    sid : 17,
    sage : 40,
    laptop2 : {
        lname : 'macbook',
        lcolor : 'black',
        lcost : 150000
    }
}
console.log(student);
console.log(student.laptop2);
console.log(student.laptop2.lname);             // macbook
console.log(student.laptop2.lcolor.length);     // 5

// Nullish Coalescing Operator(?)
console.log(student.laptop?.lcost);             // undefined

//delete student.laptop2;
console.log(student);                   // { sname: 'Ab Devilliers', sid: 17, sage: 40 }

// for in loop
for(let i in student) {
    //console.log(i);
    //console.log(i, student.laptop2);
    //console.log(i.sname);
    console.log(i, student[i]);

}

// assignment print the properties for laptop2
for(let j in student.laptop2) {
    // console.log(j);
    // console.log(j, student.laptop2);
    console.log(j, student.laptop2[j]);    
}
