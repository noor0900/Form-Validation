const email = document.getElementById('email');
const password = document.getElementById('password');

submit.addEventListener('click', (e) => {
    const data = JSON.parse(localStorage.getItem('data')) || [];

    if (!email.value) {
        alert('please fill all the details')
    }
    else if (!password.value) {
        alert("please enter your password")
    }
    else {
        console.log("else");
        
        const findUser = data.find((ele) => ele.email == email.value)
        if (findUser) {
            if (password.value == findUser.password) {
                localStorage.setItem('loginUser', JSON.stringify(findUser))
                location.href = "./welcome.html"
            }
            else{                
                alert("wrong password")
            }
            email.value = password.value = "";
        }
        else {
            alert("user not found")
        }
    }
});