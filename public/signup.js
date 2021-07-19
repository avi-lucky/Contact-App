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
    console.log(response);
    console.log(response.data)
    console.log('Successfully User Created!')
    location.replace('/signin.html')
  })
  .catch(function (error) {
    console.log(error);
  })
}