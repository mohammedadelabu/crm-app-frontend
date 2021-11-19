let productElPost=document.getElementById('product-content')

async function fetchnewapi() {
    let response=await fetch('https://emperors-app.herokuapp.com/api')
    let data=await response.json()
    let dataArr=data['data']


    dataArr.forEach(val => {
        productElPost.innerHTML+=`<div class="col-sm-3 space" >
        <div class="card">
          <img
            src="${val['images'][0]}"
            class="card-img-top"
            height="300px"
            alt="..."
          />
          <div class="card-body">
            <p class="card-title">${val['productDescription']}</p>
            <p class="card-text"><strong>$</strong>${val['price']}</p>
            <a href="#!" class="btn btn-warning d-grid">Add Cart</a>
            <a href="checkout.html" class="btn btn-success d-grid btn-color"
              >checkout</a
            >
          </div>
        </div>
      </div>`
    });
}

fetchnewapi()