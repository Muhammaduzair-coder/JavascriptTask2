//  ============  CHAP 21 - 25 ====================



// Task no : 1
// var firstname = prompt("enter your first name")
// var lastname = prompt("enter your last name");
// var username = (firstname + lastname);

// document.write(" <h3> Thanks </h3>" +username + " to come to our pretty website");


// Task no : 2

// var favMbl = prompt("enter your fav mobile model");
// var favMbl = favMbl.toUpperCase()
// var num = favMbl.length
// document.write("My Favourite Mobile is :" + favMbl , "<br> Length Of string ; " + num);


// Task no : 3


// var x = "Pakistani";
// var abc = x.indexOf("n")
// document.write("String :  " + x + "<br>" , "Index of n : " + abc)

// Task no : 4

// var x = "Hello World";
//  var abc = x.lastIndexOf("l")
//  document.write("String :  " + x + "<br>" , "Index of l is  : " + abc)


// Task no : 5


//  var x = "Pakistani";
//  var abc = x[3];
//  document.write("String :  " + x + "<br>" , "Character AT index 3 : " + abc)


// Task no : 06
// var firstname = prompt("enter your first name")
// var lastname = prompt("enter your last name");
// var username = (firstname + lastname);

// document.write(" <h3> Thanks </h3>" +username + " to come to our charmful website");


//Task No : 07

// var city = "Hyderabad";
// var city1 = city.replace("Hyder" , "Islam");
// document.write("City : " + city , "<br> After Replacement : " + city1 ) ;

//Task no 08


// var message = "Ali and Sami are best friends. They play cricket and football together";
// var rep = message.replace(/and/g , "&" );
// document.write(rep);

//Task no : 09

// var stringNum = "472";
// var s1  = Number(stringNum)

// var Numstring = 472;
// var s2  = Numstring.toString()

// document.write("Value : " + s1 + "<br>Type : String " , "<br> Value : " + s1 +"<br>Type : Number "  )




//Task no : 10
//  var userinp = prompt("type your letter")

// var user1 = userinp.toUpperCase()
// document.write("User Input : " + userinp + " <br> Upper Case : " + user1 )


//task No 11

// var input = prompt("enter your text")
// var inputcapatalize = input[0].toUpperCase() + input.slice(1)
// document.write("User Input : " + input , " <br>Title case : " + inputcapatalize)


//Task No : 12
// var num = 35.26;
// var st = num.toString();
// var sm = st.split(".").join("");
// document.write("Number : " + num , "<br>Result : " + sm);

//task no : 13
// var x = document.getElementById("put");
// var x = x.value;
// document.write(x)
// function abc(){
   
//     var specialchar = "!@#$%^&%&*()_+|:"
//     for (i = 0; i < specialchar.length; i++) {
//         if (x === i) {
//             alert("please enter a valid useranme")
//         }
//         else { alert("valid username") }
//     }



// TAsk no 14

// var chk = prompt("chk your items");
// var chk1 = chk.toLowerCase();
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (i = 0; i < A.length; i++) {
//     if (A[i] === chk1) {
//         alert(chk1 + " is available at index " + i + " available at our bakery")
//         break;
//     } else {
//         alert("We are sorry " + chk1 + " is not available at our bakery")
//         break;
//     }
// }


// task no 15

// var inp = prompt("enter password")

// document.write(inp)
// var specialchar = ["!" , "@" , "#" , "$" , "%" , "^" , "&"]
// for (i=0; i<specialchar.length; i++){
// if (inp === specialchar[i]){
//     alert("plz do not use of !@ #%^&&**")
// }
// else {document.write("crcr")}
// }

///task no 16

// var university = "University of Karachi";

// for (i=0; i<university.length; i++){
//    document.write(university.split(""))
// }


//Task No 17

// var user = prompt("enter ")
// var chk = user.slice(-1);
// document.write("User input : " + user)
// document.write(" <br>LAst char of input : " +  chk)


// task no 18
// var word = "The quicka brown fox jumps over the lazy dog";
// count = 0 ;
// var ss = word.toLowerCase();
// for(i=0; i<ss.length; i++){
//     if (ss[i] === "" ){
        
//         count++;
        
//     }
// }
// document.write(count)