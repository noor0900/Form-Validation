const h1 = document.querySelector('h1');

  const user = JSON.parse(localStorage.getItem("loginUser")) || [];

  h1.innerText = `Welcome; ${user.name}`