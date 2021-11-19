async function callApi(path, method, body) {
    if(method === "GET"){
        const response = await fetch(`https://emperors-app.herokuapp.com/api${path}`);
        return await response.json();
    } else {
        const response = await fetch(`https://emperors-app.herokuapp.com/api${path}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    }
}

document.querySelector("#add-product-form").addEventListener("submit", async function(e){
    e.preventDefault(); 
    const inputs = document.forms["add-product-form"].getElementsByTagName("input");
    const product = {};
    for (index = 0; index < inputs.length; ++index) {
        // deal with inputs[index] element.
        const name = inputs[index].name;
        const value = inputs[index].value;
        if(name) product[name] = value;
    }
    product.images = product.images.split(",");
    console.log(product);
    const res = await callApi("", "POST", (product));
    if(res.success) {
        alert("Product added successfully");
        window.location.reload();
    } else {
        alert(res.error);
    }
});
document.querySelector("#delete-product-form").addEventListener("submit", async function(e){
    e.preventDefault(); 
    const inputs = document.forms["delete-product-form"].getElementsByTagName("input");
    const product = {};
    for (index = 0; index < inputs.length; ++index) {
        // deal with inputs[index] element.
        const name = inputs[index].name;
        const value = inputs[index].value;
        if(name) product[name] = value;
    }
    console.log(product);
    const res = await callApi(`?productId=${product.productId}`, "DELETE", product);
    console.log(res)
    if(res.success) {
        alert("Product deleted successfully");
        window.location.reload();
    } else {
        alert(res.error);
    }
});

document.querySelector("#update-product-form").addEventListener("submit", async function(e){
    e.preventDefault(); 
    const inputs = document.forms["update-product-form"].getElementsByTagName("input");
    const product = {};
    for (index = 0; index < inputs.length; ++index) {
        // deal with inputs[index] element.
        const name = inputs[index].name;
        const value = inputs[index].value;
        if(name) product[name] = value;
    }
    product.images = product.images.split(",");
    console.log(product);
    const res = await callApi("","PUT", product);
    if(res.success) {
        alert("Product successfully updated");
        window.location.reload();
    } else {
        alert(res.error);
    }
});