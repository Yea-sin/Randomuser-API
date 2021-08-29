// default function 

const fetchData = async url => {
    const res = await fetch(url);
    const data = await res.json()
    
    return data;
}

// /////////////////////////////////////

fetchData(`https://randomuser.me/api/?results=500`)
.then(data => displayData(data.results))

const displayData = datas => {
    
    datas.forEach(data => {
        // console.log(data)
        const {title, first, last } = data.name;
        const {email} = data;
        const {date} = data.dob;
        const {large} = data.picture;
        const displayDiv = document.getElementById('display-div');
        displayDiv.innerHTML =`
        <div class="row g-0">
        <div class="col-md-5">
          <img src="${large}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h2 class="card-title text-success">Name :${title} ${first} ${last}</h2>
            <h4 class="card-text">Email :${email}</h4>
            <h4 class="card-text">Birthdate :${date}</h4>  
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-5">
          <button onclick="location.reload()" type="button" class="btn btn-dark btn-lg">Prev</button>
          <button onclick="location.reload()" type="button" class="btn btn-primary btn-lg">Next</button>
      </div>
        `
    })
}