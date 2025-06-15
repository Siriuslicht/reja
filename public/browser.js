console.log("Fronted: beginning");
let createField = document.getElementById("create-field");

function itemTemplate(item){
   return `<li
            class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">EDIT</button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">DELETE</button>
            </div>
            </li>`;
}

document.getElementById("create-form")
   .addEventListener("submit", function(e){
      e.preventDefault();

      axios
      // web browserda yoki Node.jsda http requestlarni
      // (GET, POST, PUT, DELETE) amalga oshiruvchi
      // javascript kutubxonasi

      // it also converts to json data
      // Promise bilan ishlaydi
         .post("/create-item", {reja: createField.value})
         .then((response) => {
            document.getElementById("item-list")
               .insertAdjacentHTML("beforeend", itemTemplate(response.data))// response data haqida
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

   // last update was here 
   if(e.target.classList.contains("edit-me")) {
      let userInput = prompt(
         "Make changes",
         e.target.parentElement.parentElement.
         querySelector(".item-text").innerHTML
      );
      if(userInput){
         axios.post("/edit-item", {
            id: e.target.getAttribute("data-id"), 
            new_input: userInput,
         })
         .then((response) => {
            console.log(response.data);
            e.target.parentElement.parentElement
            .querySelector(".item-text")
            .innerHTML = userInput;
         })
         .catch((err) => {
            console.log("Please, try again!");
         });
      }
   }
});



// clean all

document.getElementById("clean-all").addEventListener("click", function(){
   axios.post("/delete-all", { delete_all: true }).then(response => {
      alert(response.data.state);
      document.location.reload();
   })
});