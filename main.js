


let searchBtn= document.querySelector(".searchbtn")
let searchBox = document.querySelector(".search-field")

let allRecipes = document.querySelector(".all-recipes")


async function clickreceipe(food){
    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?query="+food+"&apiKey=69d08c9721f04453b00ee94e58c7811d")
    const data = await response.json()
    console.log(data)
       

    data.results.forEach((value) => {

        let newDiv = document.createElement("div");
        newDiv.innerHTML = ` 
        
        <div id="r-${value.id}" class="recipe">
            <h3 class="recipe-id" >Id: ${value.id} </h3>
            <img class="recipe-img" src="${value.image}"> </img>
            <h3 class="recipe-name">Title:${value.title} </h3>        
            <br>
            <br>
            <a href="#" class="url" onclick="receipeDetails('${value.id}')">Click here for recipe</a>
            <br>
            <br>
            <hr>
            <br>


        </div>
    `
        allRecipes.appendChild(newDiv);
        
        
    }) 

    
}
    
    searchBtn.addEventListener("click",()=>{
        clickreceipe(searchBox.value);
       
    })
    
        async function receipeDetails(id){

        const response1 = await fetch("https://api.spoonacular.com/recipes/"+id+"/information?apiKey=69d08c9721f04453b00ee94e58c7811d")
        const data1 = await response1.json()

        console.log(data1)

        document.querySelector(`#r-${id} .url`).innerHTML = data1.sourceUrl
        document.querySelector(`#r-${id} .url`).href = data1.sourceUrl
    }



