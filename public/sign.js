// login
function logIn() {
    const email = document.getElementById("email").value 
    const password = document.getElementById("password").value
  axios.post("/users/login", {
   email: email,
   password: password,
  })
  .then(function (response) {
    localStorage.setItem('token', response.data.token)
    // res.send( user, response.data.token )
    console.log(response);
    console.log(response.data.token)
    location.replace('/index.html')
  })
  .catch(function (error) {
    console.log(error);
  })
}

