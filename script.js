const card = document.querySelector(".card");

window.addEventListener("keydown", (e) => {
  console.log(e);
  card.innerHTML = `
    <div class="key">
       <small>event.key</small>
       '${e.key}' 
    </div>
    
    <div class="key">
       <small>event.key</small>
       '${e.code}' 
    </div>
    
    <div class="key">
       <small>event.key</small>
       '${e.keyCode}'
    </div>`;
});
