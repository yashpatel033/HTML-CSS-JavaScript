let elements = document.querySelectorAll(".icon");
console.log(elements);

for(element of elements){
    element.addEventListener("click", function(){
        this.setAttribute("data-clicked", "true");
    });
}