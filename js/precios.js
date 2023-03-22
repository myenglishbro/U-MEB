const precios =document.getElementById("precios");
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
    });
 } )
 .catch((err)=>console.log(err.message));

 function Card({tipo_curso,precio,tiempo,url}){
    return `
    
    <div class="precios-cards  col-md-4 col-sm-12" >
    <img src="${url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
 }