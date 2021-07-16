axios.get('/contact', {
})
.then(function (response) {
  console.log(response);
  console.log(response.data)

  var list = document.getElementById('list')
  list  = '<tr><th>Name</th><th>Phone</th><th>Email</th></tr>'
  for (i=0; i< response.data.length;  i++)
  {
    id = response.data[i]._id
    console.log(id)
    list += '<tr>'
    list += '<td>' + response.data[i].name + '</td>'
    list += '<td>' + response.data[i].phone + '</td>'
    list += '<td>' + response.data[i].email + '</td>'
    list += '<td>' + '<button onclick=deleteContact("' + id + '") action="none" type="submit" value="Delete">Delete Contact</button>'
    list += '<td>' + '<button onclick=updateContact("' + id + '") action="none" type="submit" value="Update">Update Contact</button>'
    list += '</tr>'
  }
  document.getElementById('list').innerHTML = list
  let form = document.getElementById('updateContact');
})
.catch(function (error) {
  console.log(error);
});

// add contact
function addContact() {
  const name = document.getElementById("name").value
  const phone = document.getElementById("phone").value
  const email = document.getElementById("email").value  
  axios.post("/contact", {
   name: name,
   phone: phone,
   email: email
  })
  .then(function (response) {
    console.log(response);
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

// delete contact
function deleteContact(id) {
  console.log("Tet")
  console.log(id)
  axios.delete("/contact/"+ id + "/delete", {
  })
  .then(function (response) {
    console.log(response);
    console.log(response.data)
    location.reload()
  })
  .catch(function (error) {
    console.log(error);
  });
}

// update contact
function updateContact(id) {
  console.log(id)
  const name = document.getElementById("name").value
  const phone = document.getElementById("phone").value
  const email = document.getElementById("email").value
  console.log(name)
  console.log(phone)
  console.log(email) 
  axios.patch("/contact/"+ id + "", {
    name: name,
    phone: phone,
    email: email
  })
  .then(function (response) {
    console.log(response);
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}
