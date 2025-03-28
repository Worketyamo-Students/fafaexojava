const element = document.getElementById("maliste");
const elementli = element.getElementsByTagName("li");
let elementnum = 0

console.log(elementli);
for (let i = 0;  i < elementli.length; i++) {
    elementli[i].innerHTML = `${elementnum}. ${elementli[i].innerHTML}`;
    elementnum++;
}


const monparagraph = document.getElementById("monparagraph");
for( let i=1; i<=10; i++){
    const p= document.createElement("p");
    p.textContent= `paragraphe ${i}`
    monparagraph.appendChild (p)
}
const couleur = ["green" ,"red" ,"yellow","pink","blue",]
const montableau = document.getElementById("montableau");
const td = montableau.getElementsByTagName("td");
console.log(td)
for(let i=0; i<td.length; i++){
    td[i].style.backgroundColor=
    couleur[Math.floor(Math.random()* couleur.length)];
}
const listepaire= document.getElementById("listepaire")
const li = listepaire.getElementsByTagName("li")
for(let i = li.length - 1; i>=0; i--){
    if (i%2===0){
        listepaire.removeChild(li[i])
    }
}
const  fruit = ["orange", "pomme", "pastèque","ananas"]
const atebalist= document.getElementById("atebalist")

for(let i=0; i< fruit.length; i++){
    const li= document.createElement("li");
    li.textContent = fruit[i]
    atebalist.appendChild(li)
}

// exo2222222222222222222222222222222222222222222222222222
let divs = document.querySelectorAll("div");
divs.forEach((div)=>{
    let paragraphe= document.createElement("p");
    paragraphe.textContent="enfants ajouter";
    div.appendChild(paragraphe);
}

)
let elementul= document.getElementById(monul);
let elemntli = document. getElementsByTagName("li");
for(let i=0; i< elemntli.length ; i++){
elementul.removeChild(elemntli[i]);


II-3

let body = document.body
let section = document.createElement("section"); body.appendChild(section)
let div = document.createElement("div"); section.appendChild(div)
let span = document.createElement("span"); div.appendChild(span)
var parentspan = span.parentElement
console.log(parentspan)
while(parentspan !== body){
    parentspan = parentspan.parentElement
    console.log(parentspan)
}
let body=document.getElementById("body")
let madiv = document.getElementById("madiv");
let newsection = document.createElement("section");
// body.replaceChild(newsection,madiv)
madiv.replaceWith(newsection)
console.log(body.innerHTML)
let body = document.getElementById("body")
let div = document.createElement("div")
let ul = document.createElement("ul")
for(i=0; i<3;i++){
    let li = document.createElement("li");
    li.textcontent =`element ${i}`;
    ul.appendChild(li)
    }
    div.appendChild(ul);
    body.appendChild(div)

console.log(body.innerHTML)

exooooooooooooooooooo333333333333333333333333333333333333333
let bro = document.getElementById("bro")
bro.previousElementSibling.style.backgroundColor='red'
bro.nextElementSibling.style.backgroundColor='purple'

let parent = document.getElementById("parent")
let enfants = document.getElementById("l2")
const premierenfant = parent.firstElementChild;
const dernierenfant = parent.lastElementChild;
console.log( premierenfant, dernierenfant )

let parent = document.getElementById("parent")
let li2 = document.getElementById("li2")
let next = li2.nextElementSibling
li2.before(next)
console.log(parent)

let ulist = document.getElementById("ulist")
let p1= document.getElementById("p1")
let next = p1.nextElementSibling
ulist.removeChild(next)

 let ulist = document.getElementById("ulist")
 let p1= document.getElementById("p1")
 let p1copy = p1.cloneNode(true)
 console.log(p1copy)



exo44444444444444444444444444444444444444444444444444
const tab = [['name','age'],['kalach',25],['patricia','30']]
 let table = document.createElement("table")
 body.appendChild(table)
 for( let i=0; i<=2; i++){
     let tr = document.createElement("tr"); table.appendChild(tr)
     if(i==0){
         let th1 = document.createElement("th"); table.appendChild(th1)
         th1.innerText = tab[i][0]
         let th2 = document.createElement("th"); tr.appendChild(th2)
         th2.innerText = tab[i] [1]
     }else{
         let td1 = document.createElement("td"); tr.appendChild(td1)
        td1.innerText = tab[i] [0]
        let td2 = document.createElement("td"); tr.appendChild(td2)
        td1.innerText = tab[i] [1]
    }
 }

// 4.2

 let tr = document.createElement("tr"); table.appendChild(tr)
 tr.innerHTML = '<td>fa</td>  <td>10</td>'

// 4.3
 const bcd = ["b" ,"c","d"]
 let ul = document.createElement("tr"); table.appendChild(ul)
 for(let i=0; i< bcd.length; i++){
     let li = document.createElement("li")
     ul.appendChild(li)
     li.innerText=bcd[i]
    

     if(i==1){
         li.style.fontWeight = 'bold'
    }
 }


// 4.4444444444444444444444
 const tab1 = ["red","blue"]
 const tab2 = ["orange","yellow"]
 const tab3 = [].concat(tab1,tab2)
 let ul = document.createElement('ul'); body.appendChild(ul)
 for(let i=0; i<tab3.length;i++){
     let li =document.createElement('li')
     ul.appendChild(li)
     li.innerText = tab3[i]
 }

//  4.555555555555555555555555555

const tab =[
    {
        nom: 'Fafa' ,
        age:10,
    
    },
    {
        nom: 'styve',
        age:6,
    }
]
let ul = document.createElement('ul'); body.appendChild(ul)
for(let i=0; i<tab.length; i++){
    let li = document.createElement('li')
    ul.appendChild('li')
    li.innerText = tab(1).nom + '('+tab[i].age +'ans)'
}
