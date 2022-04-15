const go_to_login = document.getElementById("sign_up_page");
go_to_login.onclick = function (){
    var sign_up_page = document.getElementById("sign_up");
    sign_up_page.style.display="block";
    var login_page = document.getElementById("login_page");
    login_page.style.display = "none";
}

const login_page_open = document.getElementById("login_page_open");

login_page_open.onclick = function(){
    var sign_up_page = document.getElementById("sign_up");
    sign_up_page.style.display="none";
    var login_page = document.getElementById("login_page");
    login_page.style.display = "block";
}

// next sign up page 

function next_sign_page(){
    var first_filds = document.getElementsByClassName("first_filds")[0];
    var next_filds = document.getElementsByClassName("next_filds")[0];
    first_filds.style.display = "none";
    next_filds.style.display = "block";
    return false;
}

// back to sign up page

function back_to(){
    var first_filds = document.getElementsByClassName("first_filds")[0];
    var next_filds = document.getElementsByClassName("next_filds")[0];
    first_filds.style.display = "block";
    next_filds.style.display = "none";
    return false;
}