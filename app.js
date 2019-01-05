
const cafelist = document.querySelector('#cafe-list');

//Create element and render rest
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

   li.setAttribute('data-id',doc.id);
   name.textContent = doc.data().name;
   city.textContent = doc.data().city;

   //appending
   li.appendChild(name);
   li.appendChild(city);
   cafelist.appendChild(li);
}


db.collection("restaurants").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
         renderCafe(doc);
        // console.log(doc.id);
        
    })
})