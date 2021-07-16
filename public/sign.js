// login
function logIn() {
    const email = document.getElementById("email").value  
    const password = document.getElementById("password").value
  axios.post("/users/login", {
   email: email,
   password: password,
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
