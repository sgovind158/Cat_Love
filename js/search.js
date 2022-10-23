
import { navbar  } from "../Component/navbar.js";
document.getElementById("navbar").innerHTML= navbar();


(async function findBread(){
    let api = `https://api.thecatapi.com/v1/breeds`;
    let res = await fetch(api);
    let data = await res.json();
    displayBread(data)
})()

let displayBread = (data)=>{
    // console.log(data )
    let showBreedList = document.querySelector("#show-breedList")
    showBreedList.innerHTML = null
  
     
    data.map((el)=>{
        let div = document.createElement("div")
        div.addEventListener("click",()=>{
            showBreadUsingScroll(el.id)
        })
        let p = document.createElement("p")
        p.innerHTML = `Bread Name :- ${el.id}`
        div.append(p)
        showBreedList.append(div)
    })
   

}

let findBtn = document.querySelector("#findFunBtn")
console.log(findBtn.addEventListener("click",()=>{
    findFun()
}))
function findFun(){
    console.log("hii")
    let q = document.querySelector("#input").value;

    fetchFuc(q);
  };

  let fetchFuc = async (q) => {
    let api = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${q}`;
    let res = await fetch(api);
    let data = await res.json();
    displayData(data);
  };

  let displayData = (data) => {
    let showDiv = document.querySelector("#show");
    showDiv.innerHTML = null;
// console.log(data,"data1")
    data.map((el) => {
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("class", "img1");
      img.src = el.url;

      div.append(img);
      showDiv.append(div);
    });
  };



   let showBreadUsingScroll = (el)=>{
    let q = document.querySelector("#input")
    q.value = el
// console.log(el)
   }