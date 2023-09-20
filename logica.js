let url='jsonplaceholder.typicode.com/users';
let boton=document.getElementById("btn");

let nombre=document.getElementById("name");
let apellido=document.getElementById("ape");
let date=document.getElementById("fecha");

boton.addEventListener('click', () => {

fetch(url, {
headers: { 'Content-Type': 'application/json; charset=utf-8' },
method: 'POST',
body: JSON.stringify({
    name:nombre.value,
    apell:apellido.value,
    nacimineto:date.value,

}),


})

.then((response) =>response.json)
.then((data)=>{
    console.log(data);
})




});
