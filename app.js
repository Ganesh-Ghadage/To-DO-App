let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    let li = document.createElement("li");
   
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("del");

    li.innerText = inp.value;

    li.appendChild(delBtn);
    ul.append(li);

    inp.value = "";

});

ul.addEventListener("click", (event) => {
    if(event.target.nodeName === "BUTTON"){
        let li = event.target.parentElement;
        console.log(li);
        li.remove();
        console.log("deleted !");
    }
});