//Write a function that takes firstname and lastname and returns the first letter of each name. Eg if I put Kayode Abiodun, KA should be returned
function fullName(str){
    let names = str.split(' ');
    let firstLetter = names[0][0].toUpperCase();
    let secondLetter = names[1][0].toUpperCase();
    let initial = firstLetter.concat(secondLetter);
       return initial;
}
function randomNumber(min, max) {
    return Math.floor(Math.random()* (max - min + 1)+ min)
}
export {fullName, randomNumber}