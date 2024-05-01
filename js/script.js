

function saleTime() {
    let now = new Date();
    let saleDate = new Date("2024-07-08T00:00");
    let finishTime = saleDate - now;

    if (finishTime <= 0 ) {
        document.querySelectorAll(".timeValue").forEach((e)=> e.innerHTML = "00");
    }
    else {

        let day = document.querySelectorAll(".timeValue")[0];
        let hour = document.querySelectorAll(".timeValue")[1];
        let minuts = document.querySelectorAll(".timeValue")[2];
        let sekunt = document.querySelectorAll(".timeValue")[3];

        day.textContent = Math.floor(finishTime/(24*60*60*1000));
        hour.textContent = Math.floor((finishTime%(24*60*60*1000)) / (60*60*1000));
        minuts.textContent = Math.floor((finishTime%(60*60*1000)) / (60*1000));
        sekunt.textContent = Math.floor((finishTime%(60*1000)) / 1000);

    }
    // console.log(day);
}



// Pop up


let saleBtn = document.querySelector(".saleButton")
let saleForm = document.querySelector(".request_wrapper")


saleBtn.addEventListener("click", handleSaleForm)

function handleSaleForm () {
    saleForm.style.display = "flex";
}


saleForm.addEventListener("click", function(event){
    let elem = event.target
    console.log(elem);
    if (elem.classList == "request_wrapper") {
        saleForm.style.display = "none";
    }
})









setInterval(() => {
    
    saleTime();
    
}, 1000);





//  setInterval(saleTime(), 1000);



// // Yaxlitlash

// console.log(Math.floor(4.9));
// console.log(Math.floor(4.1));


// console.log(Math.ceil(4.9));
// console.log(Math.ceil(4.1));


// console.log(Math.round(4.9));
// console.log(Math.round(4.1));