var button = document.querySelector(".show-cat");
//console.log(buttom);

var cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function () {
    //cat.classList.add("show")
    if (cat.classList.contains("show")) {
        //console.log("Yes")
        cat.classList.remove("show")
        button.innerText = ("Wait, come back!");
        button.classList.add("disappear");

    }
    else {
        //console.log("No");
        cat.classList.add("show")
        button.innerText = ("Shoo, cat!!");
        button.classList.remove("disappear");
    }
});