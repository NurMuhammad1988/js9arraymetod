

// let arr =  new Array();


// let array = 'string';




// let arr = [ 1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,2,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,2,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,2,1,2,3,4,5,6,7,8,9,'string', 123, true, false, null, undefined];

// document.write(arr.length);
// console.log(arr);





// let fruits = ["Apple", "Orange", "Plum" ];

// console.log(fruits);

// fruits.shift();//arrayni birinchi elementini o'chiradi//

// console.log(fruits );



// let fruits = ["Apple", "Orange", "Plum" ];

// console.log(fruits);

// fruits.unshift('olma');//arrayni birinchi qatoriga element qo'shadi//

// console.log(fruits );



// let fruits = ["Apple", "Orange", "Pear"];

// alert( fruits.pop() ); //pop ohirgi elementni birinchiga alohida qo'yadi//

// alert( fruits ); 



// let fruits = ["Apple", "Orange"];

// fruits.push("Pear");

// alert( fruits ); // ohirgi elementyni joyida qoldiradi// 


// let fruits = ["Apple", "Orange"];

// fruits.concat("Pear");//ohirgi elementni y'oq qilib qo'yadi//

// alert( fruits ); 










// let fruits = ["Apple", "Orange", "Plum" ];

// alert( fruits ); // Apple,Orange,Plum//





// let fruits = [ "banan", "Apple", "Orange", "Plum"];

// alert( fruits[fruits.length-4] ); // Plum






// let fruits = ["Apple", "Orange", "Plum"];

// alert( fruits.length ); // 3





// function sumInput() {
 
//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("A number please?", 0);
  
//       // should we cancel?
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() ); 








let inp = document.getElementById('inp');


inp.onclick = function(){

console.log(inp.value);

}
