let productElPost=document.getElementById('product-content')

async function fetchnewapi() {
    let response=await fetch('https://fast-everglades-78238.herokuapp.com/users/customer')
    let data=await response.json()
    let val=data
console.log(data);

    // dataArr.forEach(val => {
      for (let i = 0; i < val.length; i++) {
        productElPost.innerHTML+=`<div class="col-sm-12 space" >
        <div class="card">
          
          <div class="card-body">
            <p class="card-title">${val[i].fullname}</p>
            <a href="#" class="btn btn-primary" data-bs-target="#exampleModal${i}" data-bs-toggle="modal">
            Details</a>
        </div>
        </div>
        </div>
    
<!-- Button trigger modal -->
<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-success id="exampleModalLabel">Meet Our Customers</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5 class="card-title">Name: ${val[i].fullname}</h5>
        <h5 class="card-title">Email: ${val[i].email}</h5>
        <h5 class="card-title">Gender: ${val[i].gender}</h5>
        <h5 class="card-title">Phone: ${val[i].phone}</h5>
        <h5 class="card-title">Address: ${val[i].address}</h5>
        <h5 class="card-title">Notes: ${val[i].notes}</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
  </div>
</div>
        </div>
      
        
    
      `
    };
}

fetchnewapi()