//bai 1

// const person = {
//     name: 'Huynh Le Nhan',
//     namSinh: 2003,
// }
// console.log('=> tuoi: '+ (2022-person.namSinh));

//bai 2

// let e0 = Number(prompt('nhap vao phan tu 1: '));
// let e1 = Number(prompt('nhap vao phan tu 2: '));
// let e2 = Number(prompt('nhap vao phan tu 3: '));
// let e3 = Number(prompt('nhap vao phan tu 4: '));
// let e4 = Number(prompt('nhap vao phan tu 5: '));

// let arr = [e0,e1,e2,e3,e4];
// console.log(arr);

//bai3

// const printIntro = (name, birthYear) => {
//     console.log(`xin chao minh ten ${name} `);
//     console.log(`minh sinh nam ${birthYear}`);
//     console.log('rat vui duoc gap ban');
// }
// printIntro('Nhan', 2003)

//bai 4

// const person = {
//     name: 'Huynh Le Nhan',
//     birthYear: 2003,
// }

// const printIntroduction = (user) => {
//     if(typeof user === "object"){
//     console.log(`xin chao minh ten ${user.name} `);
//     console.log(`minh sinh nam ${user.birthYear}`);
//     console.log('rat vui duoc gap ban');
//     }
// }

// printIntroduction(person)

//bai 5

// const user = {};

/*
    function run(user){
    user.name = String(prompt('nhap ten nguoi dung: '));
    user.age = Number(prompt('nhap tuoi nguoi dung: '));
    gioiThieu(user)
    }
*/
// function gioiThieu(user){

//     console.log(`xin chao minh ten ${user.name} `);
//     console.log(`minh sinh nam ${2022-user.age}`);
//     console.log('rat vui duoc gap ban');

// }
// run(user)

//bai 6
// const nguoiDung = {};

// const inTen = function(name){
//     return (`xin chao minh ten ${name} `);
// };
// const inNamSinh = function(namSinh){
//     return (`minh sinh nam ${namSinh}`);
// };

// const printTenVaNamSinh = (user) => {
//     user.name = String(prompt('nhap ho va ten: '));
//     user.age = Number(prompt('nhap nam sinh: '));

//     console.log(inTen(user.name));
//     console.log(inNamSinh(user.age));
// };

// function run(){
//    return printTenVaNamSinh(nguoiDung)
// }
// run()

//bai 7
// function doF(){
//     const doF = Number(prompt('nhap do F: '));
//     return doF
// }
// const changeTemperature = function(){
//     const F = doF();
//     const C = (5/9)*(F-32);
//     console.log(C);
// }
// changeTemperature();



// bai 8

// function typeWidth(){
//     var width = Number(prompt('nhap chieu rong: '));
//     return width
// }
// function typeHeight(){
//     var height = Number(prompt('nhap chieu cao: '));
//     return height
// }
    
// function dTich(size){
//     console.log(size.width*size.height);
// }
// const size = {
//     width: typeWidth(),
//     height: typeHeight()
// }
// dTich(size)

//bai 9
const diemSo = [];
const subject = ['Toan', 'Ly', 'Hoa', 'Anh']
const nhapDiem = (diemSo) => {
    for(let i = 0; i<4; i++){
        diemSo[i] = Number(prompt(`nhap diem mon ${subject[i]}: `));
    }
}
const tinhDiem = (point) => {
    nhapDiem(point);
    var total = 0;
    for(let i = 0; i<point.length; i++){
        total += point[i];
    }
    console.log(total/point.length);
}

tinhDiem(diemSo);

//bai 10

// let myNum
// do{
//     myNum = Number(prompt('nhap so co 3 chu so lon hon 100: '));
// } while(!(myNum > 100 && myNum <1000));

// const numberToArr = (num) => {
//     let numChanged = [];
//     const dvi = Math.floor(num%10);
//     const chuc = Math.floor((num/10)%10);
//     const tram = Math.floor(num/100);
//         numChanged[0] = tram,
//         numChanged[1] = chuc,
//         numChanged[2] = dvi
//     return numChanged;
// }

// console.log(`hang tram: ${numberToArr(myNum)[0]}, hang chuc: ${numberToArr(myNum)[1]}, hang dvi: ${numberToArr(myNum)[2]}`)


//bai 11


// const inTen = function(name){
//     return (`xin chao minh ten ${name} `);
// };
// const inNamSinh = function(namSinh){
//     return (`minh sinh nam ${namSinh}`);
// };
// const nhapTen = String(prompt('nhap ho va ten: '));
// const nhapTuoi = Number(prompt('nhap nam sinh: '));

// const printTenVaNamSinh = (ten, tuoi) => {
//     const luuTru = {};
//     luuTru.name = ten;
//     luuTru.age = tuoi;
//     return luuTru
    
// };

// console.log(inTen(printTenVaNamSinh(nhapTen, nhapTuoi).name), inNamSinh(printTenVaNamSinh(nhapTen, nhapTuoi).age));