const main = document.querySelector(".main")
const dolorCon = document.querySelector(".dolor_container")




function createDollor(){
    const dollor = document.createElement("img")
    
    dollor.setAttribute("src", "./726014d0-fe36-4f24-acce-454071fbe3cf.jpg")

    dolorCon.appendChild(dollor)
}



 function createPlane(){
     const div = document.createElement("div")
     const img = document.createElement("img")

     div.className = "plane"
     img.setAttribute("src", "./d4092312-9f3b-4db3-bf99-4705adaede41.png")

     div.appendChild(img)

     main.appendChild(div)
 }


 