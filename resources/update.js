let urlId=window.location.search.split("=")
urlId=urlId[urlId.length-1];
const objectId = localStorage.getItem("currentObjectId")

async function getObject(){
    const result = await fetch(`https://fast-everglades-78238.herokuapp.com/users/customer/${objectId}`).then(response=> response.json())
    console.log(result);
    //update fullname
    document.getElementById("fullname").value = result.fullname
    document.getElementById("email").value = result.email
    document.getElementById("gender").value = result.gender
    document.getElementById("phone").value = result.phone
    document.getElementById("address").value = result.address
    document.getElementById("notes").value = result.notes
}

getObject()

document
.querySelector("#update-customer-form")
.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formElement = document.getElementById("update-customer-form");
  const formData = new FormData(formElement);
  
  const customer = {};
  for (let key of formData.keys()) {
    customer[key] = formData.get(key);
  }
  
  const res = await callApi(objectId, "PUT", customer);
  console.log("hassan:",res);
  if (res["status"] === "success") {
      
    window.alert("Customer added successfully");
    window.location.href = "index.html";
  } else {
    window.alert('status is not successful',res.response);
  }
});

async function callApi(objectId, method, body) {
    if (method === "GET") {
      const response = await fetch(
        `https://fast-everglades-78238.herokuapp.com/users/customer/${objectId}`
      );
      return await response.json();
    } else {
      // const formElement = document.getElementById("add-customer-form");
      const response = await fetch(
        `https://fast-everglades-78238.herokuapp.com/users/customer/${objectId}`,
        {
          method: method,
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await response.json();
    }
  }
  

// async function callApi(path, method, body) {
//     if (method === "GET") {
//       const response = await fetch(
//         `https://fast-everglades-78238.herokuapp.com/users/customer${path}`
//       );
//       return await response.json();
//     } else {
//       const formElement = document.getElementById("add-customer-form");
//       const response = await fetch(
//         `https://fast-everglades-78238.herokuapp.com/users/customer${path}`,
//         {
//           method: method,
//           body: JSON.stringify(body),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       return await response.json();
//     }
//   }


// async function callApi(path, method, body) {
//     if (method === "GET") {
//       const response = await fetch(
//         `https://fast-everglades-78238.herokuapp.com/users/customer${path}`
//       );
//       return await response.json();
//     } else {
//       const formElement = document.getElementById("add-customer-form");
//       const response = await fetch(
//         `https://fast-everglades-78238.herokuapp.com/users/customer${path}`,
//         {
//           method: method,
//           body: JSON.stringify(body),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       return await response.json();
//     }
//   }
  

  