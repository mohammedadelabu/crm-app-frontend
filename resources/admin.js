async function callApi(path, method, body) {
  if (method === "GET") {
    const response = await fetch(
      `https://fast-everglades-78238.herokuapp.com/users/customer${path}`
    );
    return await response.json();
  } else {
    const formElement = document.getElementById("add-customer-form");
    const response = await fetch(
      `https://fast-everglades-78238.herokuapp.com/users/customer${path}`,
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

const ready = document.querySelector("#accordion");
if (ready) {

    // ADD CUSTOMERS
  document
    .querySelector("#add-customer-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const formElement = document.getElementById("add-customer-form");
      const formData = new FormData(formElement);

      const customer = {};
      for (let key of formData.keys()) {
        customer[key] = formData.get(key);
      }

      const res = await callApi("", "POST", customer);
      console.log(res);
      if (res["status"] === "success") {
        window.alert("Customer added successfully");
        window.location.href = "index.html";
      } else {
        window.alert(res.response);
      }
    });
  

    // UPDATE CUSTOMERS
    async function callApi(objectId, method, body) {
      if (method === "PUT") {
        const response = await fetch(
          `https://fast-everglades-78238.herokuapp.com/users/customer/${objectId}`
        );
        return await response.json();
      } else {
        // const formElement = document.getElementById("add-customer-form");
        const response = await fetch(
          `https://fast-everglades-78238.herokuapp.com/users/customer${objectId}`,
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
    
    
    document
    .querySelector("#update-customer-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      alert("HI")
      // const formElement = document.getElementById("update-customer-form");
      // const formData = new FormData(formElement);
      
      // const customer = {};
      // for (let key of formData.keys()) {
      //   customer[key] = formData.get(key);
      // }
      
      // const res = await callApi("", "PUT", customer);
      // console.log(res);
      // if (res["status"] === "success") {
      //   window.alert("Customer added successfully");
      //   window.location.href = "index.html";
      // } else {
      //   window.alert(res.response);
      // }
    });
  }
    
    // DELETE CUSTOMERS
    async function deleteCustomer(id){
  console.log('fdfdfdfd',id);
    let response=await fetch(
      `https://fast-everglades-78238.herokuapp.com/users/customer/${id}`, 
    {
      method: 'DELETE'
    }
    );
    
    let result= await response.json()
    console.log(result);
    alert(result.data)
    location.reload()
  }


// async function updateCustomer(objectId){
//     let response=await fetch(
//       `https://fast-everglades-78238.herokuapp.com/users/customer/${objectId}`, 
//     {
//       method: 'PUT'
//     }
//     );
    
//     let result= await response.json()
//     console.log(result);
//     alert(result.data)
//     location.reload()
//   }
