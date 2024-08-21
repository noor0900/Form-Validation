const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');


submit.addEventListener('click', (e) => {
  const data = JSON.parse(localStorage.getItem('data')) || [];

  const userdata = {
    name: username.value,
    email: email.value,
    password: password.value
  }

  // const findUser = data.find((ele)=> ele.email == email.value)
  const findUser = data.some((ele) => ele.email == email.value)

  if (findUser) {
    username.value = email.value = password.value = "";
    return alert('user already exist');
  }

  data.push(userdata);

  if (!username.value) {
    alert('please fill all the details')
  }
  else if (!email.value) {
    alert("please enter your email")
  }
  else if (!password.value) {
    alert("please enter your password")
  }
  else {
    localStorage.setItem('data', JSON.stringify(data));
    username.value = email.value = password.value = "";
  }
})
