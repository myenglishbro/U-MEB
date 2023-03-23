const precios =document.getElementById("precios");
const tab=document.getElementById("myTab");
const nuevo=document.getElementById("nuevo");
fetch("/data/precios.json")
.then((response)=>{
    if(!response.ok){
        throw new Error("Erro 404")
    }
    return response.json();
})
 .then((data)=>{
    data.forEach(item => {
        precios.innerHTML+= Card(item);
        tab.innerHTML+= Card2(item);
        nuevo.innerHTML+=Card3(item);
    });
 } )
 .catch((err)=>console.log(err.message));

 function Card({tipo_curso,precio,tiempo,url}){
    return `
    
    <div class="precios-cards  col-md-4 col-sm-12 card-border" >
    <img src="${url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>


  <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
        
      </div>
    `
 }
 function Card2({tipo_curso,precio,tiempo,url}){
  return `
  
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">${tipo_curso}</button>
        </li>
  `
}

function Card3({tipo_curso,precio,tiempo,url}){
  return `
  
  <div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
  `
}