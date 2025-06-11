console.log("Fronted: beginning");
let createField = document.getElementById("create-field");

function itemTemplate(item){
   return `<li
            class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Ozgartirish</button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">ochirish</button>
            </div>
            </li>`;
}

document.getElementById("create-form")
   .addEventListener("submit", function(e){
      e.preventDefault();

      axios
         .post("/create-item", {reja: createField.value})
         .then((response) => {
            document.getElementById("item-list")
               .insertAdjacentHTML("beforeend", itemTemplate(response.data))
               createField.value = "";
               createField.focus();
         })
         .catch((err) => {
            console.log("ERROR! insert again")
         });
});


document.addEventListener("click", function(e){
   console.log(e.target)
   if(e.target.classList.contains("delete-me")) {
      if(confirm("Are you sure you want to delete this item?")){
         axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
         .then((response) => {
            console.log(response.data);
            e.target.parentElement.parentElement.remove();

         })         
         .catch((err) => {   
            console.log("Try again!");
         })
      } 
   }
   if(e.target.classList.contains("edit-me")) {
      alert("edit button pushed");
   }
})

