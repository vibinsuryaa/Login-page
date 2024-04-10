loginData = document.querySelector("#login");
userName = document.querySelector('#userId')
password = document.querySelector('#password')

userData = []

fetch('./user.json')
.then((res) => {
    return res.json()
})
.then((data) => {
    userData = [...data]
})


loginData.addEventListener("submit", (event) => {
    event.preventDefault()
    uname = userName.value
    pass = password.value
    OnLogin()
});

function loginUser(uname, pass) {
    console.log(uname, pass)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(userData)
            const user = userData.find(
                (user) => user.username === uname && user.password === pass
            );
            if (user) {
                resolve(user);
            } else {
                reject(new Error("Invalid email or password"));
            }
        }, 1000);
    });
}

async function OnLogin() {
    const user = await loginUser (uname, pass);
    if(user){
        window.location.href = '../Timetracker/index.html'
    }
    console.log(user);
}
