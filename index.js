/*1.Ways to print in JS
//console.log("Helloworld", 4 + 6, "Tarak");
// alert("me");
// document.write("Hello Tarak")


//2.Console API  
console.warn("warning");
console.clear();
console.error("error");*/


// 3. JS variables 

// Basic Data type 
// var num1 = 45;
// var num2 = 34;
// console.log(num1 + num2);


// //4. Data Type in Js

// //A. Number
// var num1 = 45;
// var num2 = 50;


// //B. String 
// var str1 = "hello";
// console.log(89);



// //C. Object
// var marks = {
//     Bhola: 99,
//     Tarak: 30,
//     Daya: 10
// }
// console.log(marks);


// //D. Boolean 
// var a = true;
// var b = false; 
// console.log(a, b);


// //E. Undefined
// var c;
// console.log(c);


// //F.Null
// var n = null;
// console.log(n);


// //G. ARRAY
// var arr=[1,2,"Tarak",3,5];
// console.log(arr);



//05. Operators In Js

//a) Arithmetic Operator
// var a=5;
// var b=6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);


// //b. Assignment Operator
// var c=b;
// c +=2;
// c -=2;
// c *=2;
// c %=8;
// console.log(c);



// //c. Comparision Operator 
// var a =90;
// var b=45;
// console.log(a==b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a>b);
// console.log(a<b);



//d. Logical Operators

// And Operator
// console.log(true  && true);
// console.log(true  && false);
// console.log(false && false);

// // Or Operator
// console.log(true  || true);
// console.log(true  || false);
// console.log(false || false);

// //Not Operator 
// console.log(!false);
// console.log(!true);





//06 .Function in JS
// Function use for Implementing the Dry Principal
// DRY = Do not repeat Yourself
// function avg(a,b)
// {
//     return(a+b)/2;
// }
// c1=avg(4,6);
// c2=avg(5,5);
// console.log(c1,c2);






//07 . Conditional Statement
//var age = 7;
// If-else Statement
// if(age>8)
// {
//     console.log("Hello");
// }
// else{
//     console.log("Hi");
// }

// age =11;
// //If - else ladder
// if(age>12)
// {
//     console.log("Hey");
// }
// else if(age>1)
// {
//     console.log("Hello");
// }
// else if(age>2)
// {
//     console.log("Tarak");
// }

//     console.log("Bhola");


// Using Function In if else Statement
// function condn(a)
// {
//     if(a>5)
//     {
//         console.log("Bhola");
//     }
//     else{

//         console.log("Tarak");
//     }
// }
// c1 = condn(6);
// console.log(c1);





//08. Loops In Js

//a.  For Loop
//var arr = [1, 2, 3, 4, 5, 6];
// for(var i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

//b. For-each loop
// arr.forEach(function(element)
// {
//    console.log(element);
// })

// Constant variable
// const ac=10;
// ac++;  

//C. While loop
// var is the old version Let is the new Version 
// let arr = [1, 2, 3, 4, 5, 6];
// let j = 0;
// while(j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }

// //D. Do-while loop
// do{
//     console.log(arr[j]);
//     j++;
// } while(j<arr.length);






//09. Break & Continue Statement

//a) Break
// let arr =[1,2,3,4,5,6];
// for(let i=0; i<arr.length; i++)
// {
//     if(i==2)
//     {
//         break;
//     }
//     console.log(arr[i]);
// }


//b) Continue
// let arr =[1,2,3,4,5,6];
// for(let i=0; i<arr.length; i++)
// {
//     if(i==2)
//     {
//         continue;
//     }
//     console.log(arr[i]);
// }





//10. Arrays Method In Js

// let arr=["hey", 3,"hi", 5];
//a.)  arrays length
//console.log(arr.length);

//b). Pop method 
// arr.pop();
// console.log(arr);


//c). Push Method
// arr.push("ho");
// console.log(arr);

//d). shift method 
// arr.shift();
// console.log(arr);


//e). Unshift method
// arr.unshift("Bhola");
// console.log(arr);

//f). Newlength
// let newlen = arr.unshift("tarak");
// console.log(newlen);





// 11. String Methods In Js

// a.) String length
//  let myStr = "Bhola is a good boy Bhola";
//  console.log(myStr.length);


//b).Indexof
// console.log(myStr.indexOf("Bhola"));


//c). LastIndexOf 
// console.log(myStr.lastIndexOf("Bhola"));


//d). Slice method 
//  console.log(myStr.slice(1,3));

//e). Replace method
// console.log(myStr.replace("Bhola", "tarak"));






//12.  Dates In Js
// let myDate = new Date();
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getTime());


//13.  Dom Manipulation

//a). GetElement By Id
// let lid =document.getElementById('click');
// console.log(l);

//b). Get Class name
let el = document.getElementsByClassName("container");
// console.log(el);
  
// //C). setting the background of class
// // lclass[0].style.background='yellow';

// //d). Changing fontsize of id 
// let a = document.getElementById('click');
// a.style.fontSize = '30px';

////e). ClassList
// el[0].classList.add("bg-primary");
// el[0].classList.add("text-primary");

////f). Inner Html
// console.log(el[0].innerHTML);

////g). InnerText
// console.log(el[0].innerText);


//h). Get Tag Name
//tn= document.getElementsByTagName('button');
// tn2= document.getElementsByTagName('div');
// console.log(tn2);



//i). Append and Replace child
  
//Append 
  // createdElement = document . createElement('p');
  // createdElement . innerText = "This is para";
  // el[0].appendChild(createdElement);

  // //Replace 
  // createdElement2 = document . createElement('b');
  // createdElement2 . innerText = "This is para";
  // el[0].replaceChild(createdElement2,createdElement);


// //j). Selecting Using Query

//// sel = document. querySelector(.container);
//// console.log(sel);

// sel2 = document.querySelectorAll('#click');
// console.log(sel2);




//14). JavaScript Events

//a).Onclick function
// function clicked()
// {
//     console.log('The button was clicked');
// }


// //b).Onload 
// window.onload = function(){
//     console.log('The document was loaded');
// }


// //C). addListener
// firstcontainer.addEventListener('click', function(){
//   console.log("Click on Container");

// })


// //d). MouseOver 
// firscontainer.addEventListener('mouseover' , function(){
//     console.log("Mouse in Container");
// })


// //e). MouseOut
// firscontainer.addEventListener('mouseout' , function(){
//   console.log("Mouse out Container");
// })


// //f). Mouseup
// firscontainer.addEventListener('mouseup' , function(){
//   console.log("Mouse up Container");
// })


// //g). Mousedown
// firscontainer.addEventListener('mousedown' , function(){
//   console.log("Mouse down Container");
// })

//h). Arrow funtion
// sum = (a,b)=>{
//     return a+b;

// }


//CH-15 SET-TIME OUT & SET-INTERVAL

 // logkaro = ()=>{
//   // document.write("Hi I am Bhola");
//  document.write("Hi i am Bhola");
// }

// //clr=setTimeout(logkaro,3000);
// // clr = setInterval(logkaro,1000);


// CH -16 LOCAL STORAGE
// localStorage.setItem('name' , 'Bhola')
// undefined
// localStorage
// Storage {name: 'Bhola', length: 1}
// localStorage.getItem('name')
// 'Bhola




// CH-17 ABOUT JSON
// obj = {name:"harry",length: 1}
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso); 
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);





