let user = getCookie("isLogin")
if (user == "" || user == undefined) {
    setCookie("isLogin", 0)
}

console.log(document.cookie)
console.log(user)

function userValidation() {
    if (user != '1')
        window.location.href = "/"
}

function setLogin() {
    setCookie("isLogin", 1)
    console.log(document.cookie)
}

function setLogout() {
    setCookie("isLogin", 0)
    console.log(document.cookie)
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}