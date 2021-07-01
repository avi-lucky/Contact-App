// const axios = require('axios')

axios.get('/contact', {
  // name: name,
  // number: number,
  // email: email
})
.then(function (response) {
  console.log(response);
  console.log(response.data[1])

//   let list = [
//     'name',
//     'phone',
//     'email'
// ],

// var list = document.getElementById('list');

// document.getElementById("list").appendChild(ul);

// list.forEach(function (list) {
//   let li = document.getElementById('li');
//   ul.appendChild(li);

//   li.innerHTML += list;
// });


// list.forEach(function (list) {
// let li = document.getElementById('li');
// ul.appendChild(li);

// li.innerHTML = list;
// });

//   var list = document.getElementById('list');
document.getElementById("list").innerHTML = response.data[1].name;

//  document.getElementById("list")  = response.data[1].email
//  ol = document.getElementById("list").appendChild(response.data[1].email)

//   // document.getElementById('list').appendChild(ol);

})
.catch(function (error) {
  console.log(error);
});

function addContact() {
  const name = document.getElementById("name").value
  const number = document.getElementById("number").value
  const email = document.getElementById("email").value

  
  axios.post("/contact", {
    name: name,
   number: number,
   email: email
  })
  .then(function (response) {
    console.log(response);
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

{
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

}