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
        window.alert(error);
      }
    });

    // UPDATE CUSTOMERS
    document
    .querySelector("#update-customer-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const formElement = document.getElementById("update-customer-form");
      const formData = new FormData(formElement);
    
      const customer = {};
      for (let key of formData.keys()) {
        const item = formData.find((elem) => elem.id === id)

          if(item) customer[key] = formData.append(key, updateCustomer(item));
      }

      const res = await callApi("", "PUT", customer);
      console.log(res);
      if (res["status"] === "success") {
        window.alert("Customer updated successfully");
        window.location.reload();
        // window.location.href = "index.html";
      } else {
        window.alert(error);
      }
    });

    function updateCustomer (user, updatedCustomer) {
        user.Fullname = updatedCustomer.Fullname ? updatedCustomer.Fullname : user.Fullname;
        user.Email = updatedCustomer.Email ? updatedCustomer.Email : user.Email;
        user.Gender = updatedCustomer.Gender ? updatedCustomer.Gender : user.Gender;
        user.Phone = updatedCustomer.Phone ? updatedCustomer.Phone : user.Phone;
        user.Address = updatedCustomer.Address ? updatedCustomer.Address : user.Address;
        user.Notes = updatedCustomer.Notes ? updatedCustomer.Notes : user.Notes;
        user.Publisher = updatedCustomer.Publisher ? updatedCustomer.Publisher : user.Publisher;
        return user
      } 

// DELETE CUSTOMERS
document
.querySelector("#delete-customer-form")
.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formElement = document.getElementById("delete-customer-form");
  const formData = new FormData(formElement);

  const customer = {};
  for (let key of formData.keys()) {
    customer[key] = formData.delete(key);
  }

  const res = await callApi("", "DELETE", customer);
  console.log(res);
  if (res["status"] === "success") {
    window.alert("Customer deleted successfully");
    window.location.href = "index.html";
  } else {
    window.alert(error);
  }
});

}
