console.log("lesson 2")

let email = 'arneltilekov4@gmail.com';
let password = "it\'s me";
let username = "arnel3000";

let posts = 0;
let followers = 1_000_000_000;
let followings = 10;

let inPrivate = true; // 1
let isOfficial = true; // 0
let isPopular = followers > 500_00;

let dateOfBirth;
let phoneNumber = null;

console.log("is popular",isPopular);
console.log("my DOB", dateOfBirth);
console.log("my mobile", phoneNumber);


// let size = 314;
// let miniSize = 143;
// console.log(miniSize * 100 / size + " % ");

let istaProfile = {
    email: " tilekovarnel4@gmail.com", // key : value
    posts: 0,
    followers: 5_000_000,
    followings: 25,
    inPrivate: true,
    isOfficial: false,
};

if (inPrivate){
    console.log(username + "🔒");
}

if (isOfficial){
    console.log(username + "✅")
}
//
// let points = 45;
// let lessons = 2;
//
// if(points > 40 && lessons > 4){
//     console.log("next month")
// }

if(followers < 1000){
    console.log(followers)
}else if(followers >= 1000 && followers < 1_000_000){
    let temp = (followers / 1000).toFixed(1);
    console.log(temp + "k");
}
if(followers < 1000){
    console.log(followers)
}else if(followers >= 1_000_000 && followers < 1_000_000_000){
    let temp = (followers / 1_000_000).toFixed(1);
    console.log(temp + "M");
}
if(followers < 1000){
    console.log(followers)
}else {
    let temp = (followers / 1_000_000_000).toFixed(1);
    console.log(temp + "B");
}




