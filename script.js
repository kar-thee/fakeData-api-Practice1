let urlbase = "https://reqres.in/api/users/"
var usrid = [];
var contentdata = [];
firstrun();
//  this below function will populate usrid using for-loop
//   and append to usrid variable
function firstrun(){
    for(let a =1;a<13;a++){
        usrid.push(a);
    }
    process(urlbase)
    //  console.log(urlbase+usrid[0])
}

//this function will add usrid to url and get real time 
//updated url for getting data
function process(url){
    usrid.forEach(ele => {
         let urlupd = url+ele
    //    console.log(urlupd)
       getdetail(urlupd)
    });
}

//this has all basic fetch function essentials
//passes data to main function 
function getdetail(updatedurl){
    fetch(updatedurl).then(res =>{
        return res.json()
    }).then(data => {
        main(data)
    }).catch(err =>{
        console.log(err)
    })
}


let main = function(content){
    var finaldata = content.data
    // contentdata.push(finaldata)
    //  console.log(finaldata)
    // console.log("hi")
    // first_name,last_name,email,avatar
// console.log(contentdata)
// let container = document.querySelector(".container")
let row = document.querySelector(".row")

let column = document.createElement("div")
column.setAttribute("class","col-sm-12 col-md-6 col-lg-6 mb-4 p-3 d-flex")

let card = document.createElement("div")
card.setAttribute("class",'card')

let img = document.createElement("img")
img.src = finaldata.avatar
img.setAttribute("alt","avatar")

let cardbody = document.createElement("div")
cardbody.setAttribute("class","card-body")

let names = document.createElement("h4")
names.setAttribute("class","card-title")
names.innerHTML = "Name : "+finaldata.first_name+" "+finaldata.last_name 

 let email =  document.createElement("p")
// setdetail("p","card-text") 
email.setAttribute("class","card-text")
email.innerHTML = "Email-id :"+finaldata.email 

cardbody.append(names,email)
card.append(img,cardbody)
column.append(card)
row.append(column)
}


// setdetail(tag,classname){
//     let tag = document.createElement(tag);
//     tag.setAttribute("class","classname");
//     return tag;
// }




