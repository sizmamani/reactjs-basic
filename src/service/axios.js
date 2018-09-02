const axios = require('axios');



// Optionally the request above could also be done a
// Want to use async/await? Add the `async` keyword to your outer function/method.
async function login() {
  try {
    const response = await axios.post('http://localhost:3030/authentication',{
        email: "sizmamani@yahoo.com",
        password: "123456",
        strategy: "local" 
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
export default login