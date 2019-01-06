
const cafelist = document.querySelector('#cafe-list');
const form =document.querySelector('#add-cafe-forms');

//Create element and render rest
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    let cross = document.createElement('div');


   li.setAttribute('data-id',doc.id);
   name.textContent = doc.data().name;
   city.textContent = doc.data().city;

   cross.textContent = 'X';


   //appending
   li.appendChild(name);
   li.appendChild(city);
   cafelist.appendChild(li);

   li.appendChild(cross);

   //Deleting data
   cross.addEventListener('click',(e) => {
       e.stopPropagation();
       let id = e.target.parentElement.getAttribute('data-id');
        //console.log(id); => ouput example -- 0x97CWfJzOF7Vep94cEi
        db.collection("restaurants").doc(id).delete();
       
   })

}

//Getting Data
db.collection("restaurants").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
         renderCafe(doc);
        // console.log(doc.id);
    })
});

//Saving Data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection("restaurants").add({
        name: form.name.value,
        city:form.city.value
    })
    form.name.value='';
    form.city.value='';
});