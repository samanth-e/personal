function myFetch(){
  fetch('./data.json')
  .then(function (response) {
    return response.json();
    })
  .then(function (data) {
    let active = document.getElementsByClassName("activebtn"); 
    for(let btn of active){
      console.log(btn);
      btn.classList.remove("activebtn");
    }
        let all1 = document.getElementById("all1"); 
        all1.classList.add("activebtn");

        appendData(data);
        })
  .catch(function (err) {
    console.log('error:' + err);
    });
}

  function appendData(data) {

    let menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = `<div class="sizes menu menu_all row py-0" style="margin:-5px;">
    <div class="col-4 text-center"></div>
        <div class="col"><span></span></div>
        <div class="col thing"><p class="hover"><i>Hover for description</i></p></div>
    </div>`;
    for(let menuitem of data){
      let div = document.createElement("div");
      // Using Bootstrap Card component
      div.classList.add("menu", "menu_all", "row", "py-3");
      div.innerHTML = `
        <div class="col-4 text-right">
          <span class="names fw-normal">${menuitem.name}</span>
        </div>
        <div class="col">
          <span class="fw-lighter">$${menuitem.pricemd}</span>
        </div>
        <div class="col">
          <div class="catalog-img overflow-hidden float-right">
            <img src=${menuitem.image} alt="test image" class="rounded border"/>
          </div>
          <div class="hide rounded fw-bold border">${menuitem.description}</div>
        </div>
      `;  menuContainer.appendChild(div);
    }
  }

myFetch();

function myFetch2(){
  fetch('./data.json')
  .then(function (response) {
    return response.json();
    })
  .then(function (data) {
    let active = document.getElementsByClassName("activebtn"); 
    for(let btn of active){
      console.log(btn);
      btn.classList.remove("activebtn");
    }
    let drinks = document.getElementById("drinks"); 
    drinks.classList.add("activebtn");
    appendData2(data);
    })
  .catch(function (err) {
    console.log('error:' + err);
    });
}

function appendData2(data) {
  let menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = `<div class="sizes menu menu_drinks row py-3">
    <div class="col-4 text-right">
          <span class="fw-bold">Size</span>
        </div>
        <div class="col">
          <span class="fw-bold">12 oz</span>
        </div>
        <div class="col">
          <span class="fw-bold">16 oz</span>
        </div>
        <div class="col">
          <span class="fw-bold">20 oz</span>
        </div>
        <div class="col drinksthing"><p class="drinkshover"><i>Hover for description</i></p></div>
      <hr class="solid">
  </div>`;
  for(let menuitem of data){
    if( menuitem.category == "drink" ) {
      let div = document.createElement("div");
      div.classList.add("menu", "menu_drinks", "row", "py-3");
      div.innerHTML = `
        <div class="col-4 text-right">
          <span class="fw-normal">${menuitem.name}</span>
        </div>
        <!-- sizes prices -->
        <div class="col">
          <span class="fw-lighter">$${menuitem.pricesm}</span>
        </div>
        <div class="col">
          <span class="fw-lighter">$${menuitem.pricemd}</span>
        </div>
        <div class="col">
          <span class="fw-lighter">$${menuitem.pricelg}</span>
        </div>

        <div class="col">
          <div class="catalog-img overflow-hidden float-right">
            <img src=${menuitem.image} alt="test image" class="rounded"/>
          </div>
          <div class="hide rounded fw-bold border">${menuitem.description}</div>
        </div>
      `;
      menuContainer.appendChild(div);
    }
  }
}

buttonAll = document.getElementById("all1");
buttonAll.onclick = () => myFetch(0);

buttonDrinks = document.getElementById("drinks");
buttonDrinks.onclick = () => myFetch2(0);

buttonSnacks = document.getElementById("snacks");
buttonSnacks.onclick = () => myFetch3(0);

function myFetch3(){
  fetch('./data.json')
  .then(function (response) {
    return response.json();
    })
  .then(function (data) {
    let active = document.getElementsByClassName("activebtn"); 
    for(let btn of active){
      console.log(btn);
      btn.classList.remove("activebtn");
    }
    let snacks = document.getElementById("snacks"); 
    snacks.classList.add("activebtn");
    appendData3(data);
    })
  .catch(function (err) {
    console.log('error:' + err);
    });
}

function appendData3(data) {
  let menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = `<div class="sizes menu menu_all row py-0" style="margin:-5px;">
    <div class="col-4 text-center"></div>
        <div class="col"><span></span></div>
        <div class="col thing"><p class="hover"><i>Hover for description</i></p></div>
    </div>`;
  for(let menuitem of data){
    if( menuitem.category == "snack" ) {
      let div = document.createElement("div");
      div.classList.add("menu", "menu_snacks", "row", "py-3");
      div.innerHTML = `
        <div class="col-4 text-right">
          <span class="fw-normal">${menuitem.name}</span>
        </div>
        <div class="col">
          <span class="fw-lighter">$${menuitem.pricemd}</span>
        </div>
        <div class="col">
          <div class="catalog-img overflow-hidden float-right">
            <img src=${menuitem.image} alt="test image" class="rounded"/>
          </div>
          <div class="hide rounded fw-bold border">${menuitem.description}</div>
        </div>
      `;
      menuContainer.appendChild(div);
    }
  }
}