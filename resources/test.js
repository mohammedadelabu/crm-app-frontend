// let house = {
//     windows: 4,
//     doors: 10,
//     rooms: 15
// }

// for (let key in house) {
//     console.log(key, house[key]);   
// }


let schools = [
    {
       "id": 10,
       "fullname": "October Young",
       "email": "john@example.com",
       "gender": "f",
       "phone": "+2347085647535",
       "address": "1, rantech stop",
       "notes": "This Customer is owing 10k"
    },
    {
       "id": 11,
       "fullname": "john doe",
       "email": "john@example.com",
       "gender": "m",
       "phone": "+2347085647535",
       "address": "1, rantech stop",
       "notes": "This Customer is owing 10k"
    }
]
let customer = {};
for (let key of schools) {
    console.log(key);
}
// const formData = new FormData(formElement)
//     // const customer = {}
//    for(let key of formData.keys()){
//        customer[key] = formData.get(key)
//    }

{/* <form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc">
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile">
  </div>
  <input type="submit" value="Submit!">
</form>

let myForm = document.getElementById('myForm');
let formData = new FormData(myForm); */}

let number = 10;
let result = 0
for (let i = 1; i < number; ++i) {
    console.log(i);
    console.log(result += i); 
}