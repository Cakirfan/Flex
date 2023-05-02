const bringDaten = () => {
  fetch("./tv-shows.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Url de hata var!");
      }
      return res.json();
    })
    .then((data) => ekranaBastir(data));
};

document.querySelector(".button").onclick=()=>{
    bringDaten();
    document.querySelector("body").style.backgroundColor="#4e4d4d"
}

document.querySelector(".button-reset").onclick=()=>{
    document.querySelector(".tvShowList").innerHTML = "";
    document.querySelector("body").style.backgroundColor="#fff"
}


const ekranaBastir = (data) => {
  data.forEach((item) => {
    document.querySelector(".tvShowList").innerHTML += `
        <div class="col-md-3"> 
            <div class="card" >
            <img src=${item.show.image.medium} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${item.show.name}</h5> 
                <a class= "btn btn-success"  href=${item.show._links.previousepisode.href}>Detaylar</a>
                <p> </p>
            </div>
            </div>
        </div> `;
  });
};
