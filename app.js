function chunkArrayInGroups(arr,size){
//     //break it up
 var groups = [];
while (arr.lenght > 0) {
groups.push(arr.slice(0,size));
// arr = arr.slice(size);
}
return groups;
}

chunkArrayInGroups["a", "b", "c", "d"], 2;



// var letters = ["a", "b", "c", "d"];
// console.log(letters.slice(0))

// console.log("letter is :", letters);

// Falsy Bouncer assignment!!!!!!!!!!

// function bouncer(arr) {
// Dont show a false ID to this bouncer
//     var truthies = [];

//     for (var elem of arr) {
//         if (elem)truthies.push(elem)
//     }

//     return truthies
// }

function bouncer(arr) {
    // Dont show a false ID to this bouncer
return arr.filter(function(elem){
    return elem;
});
}

bouncer([7, "ate", "", false, 9, "hey", undefined]);

var nums = [1, 2, 3, 4, 5, 6];

// nums.filter(function(item){
    return item > 4;
// });