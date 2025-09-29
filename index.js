// let username:string= "Ali";
// let age:number= 2;
// let IsActive:boolean=true;
// let Address:any = "sharahefaisal";
// let Salary:null= null;
// console.log(username);
// console.log(age);
// console.log(IsActive);
// console.log(Address);
// console.log(Salary);
// let list:number[] =[1,2,3,4,5,6]
// console.log(list[2]);
// let tuplelist:[number,string,boolean] = [23,"Ali",true]
// console.log(tuplelist[1]);
// let obj:any = 
// {
//     "username": "Saad",
//     "Age":12
// }
// console.log(obj["username"]);
// function abc(){
// console.log("HI world")
// }
// abc();
// function Details(name:string,age:number)
// {
//     console.log(`Name: ${name}\nAge: ${age}`)
// }
// Details("Aina",23);
for (var index = 1; index <= 10; index++) {
    console.log(index);
}
var tuplelist = [23, "Ali", true];
for (var i in tuplelist) {
    console.log(tuplelist[i]);
}
for (var _i = 0, tuplelist_1 = tuplelist; _i < tuplelist_1.length; _i++) {
    var i = tuplelist_1[_i];
    console.log(i);
}
