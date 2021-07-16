// signup
function signUp() {
    const name = document.getElementById("name").value  
    const email = document.getElementById("email").value  
    const password = document.getElementById("password").value 
  axios.post("/users", {
     name: name,
     email: email,
     password: password
  })
  .then(function (response) {
    // localStorage.setItem('token', token)
    // res.send({ user, token })
    console.log(response);
    console.log(response.data)
    // res.send({ user, token })
  })
  .catch(function (error) {
    console.log(error);
  })
}