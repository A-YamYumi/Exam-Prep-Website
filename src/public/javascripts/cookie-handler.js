let user = getCookie("isLogin")
if (user == "" || user == undefined) {
    setCookie("isLogin", 0)
    user = getCookie("isLogin")
}

if (getCookie("isProfessor") == "" || getCookie("isProfessor") == undefined) {
    setCookie("isProfessor", 0)
}

function setupNavbar() {
    profile = document.getElementById("user-login")
    if (profile != null) {
        if (user == '1') {
            profile.innerHTML = `<a href="#" class="d-inline bi bi-bell text-white"></a>
            <a href="/user/setting" class="d-inline text-white mx-2 text-decoration-none">User_name</a>
                        <a href="#" class="d-inline bi bi-person text-white"></a>`
        } else {
            profile.innerHTML = `
            <a href="/login" class="d-inline text-white mx-2 text-decoration-none">Login</a>
                        <a href="#" class="d-inline bi bi-person text-white"></a>`
        }
    }
}

function userValidation() {
    if (user != '1')
        window.location.href = "/"
}

function setLogin() {
    setCookie("isLogin", 1)
    //reload page
    location.reload()
}

function setLogout() {
    setCookie("isLogin", 0)
    location.reload()
}

function toggleProfessor() {
    if (getCookie("isProfessor") == 0) {
        setCookie("isProfessor", 1)
    } else {
        setCookie("isProfessor", 0)
    }
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