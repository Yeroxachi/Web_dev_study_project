//Анимация панели//
let form= document.getElementsByClassName("form");
let bcgr=document.getElementById("gray");
let btn=document.getElementsByClassName("regbutton");
let img=document.getElementById("xicon")
let forma= document.getElementById("forma");
let xicon= document.getElementById("xicon1");
let showMenu = false;
let passRegistration = true;
let menu=document.getElementById("mmmm");
let users = [];
let gtst=document.getElementsByClassName("btn clever-btn");
let btnmn =document.getElementById("clicker");
btnmn.onclick=function show4()
{
    if(!showMenu)
    {
        menu.style.marginTop = '380px';
        menu.style.marginRight = '-125px';
        menu.style.display="block";
        showMenu = true;
    }
    else
    {
        menu.style.display = 'none';
        showMenu = false;
    }
}
try {
    gtst[0].onclick= function show2()
{
    form[0].style.display= "block";
    bcgr.style.display= "block";
}
} catch (error) {
    
}
if(localStorage.getItem('Proging-users') !== null)
{
    users = JSON.parse(localStorage.getItem('Proging-users'));
}

btn[0].onclick = function show()
{
    form[0].style.display= "block";
    bcgr.style.display= "block";
}

img.onclick=function close()
{
    form[0].style.display= "none";
    bcgr.style.display= "none";
}
btn[1].onclick=function show1()
{
    forma.style.display= "block";
    bcgr.style.display= "block";
}
xicon.onclick=function close1()
{
    forma.style.display= "none";
    bcgr.style.display= "none";
}

//Валидация//
document.getElementById('first-name').oninput = function(event)
{
    let reg = /^[A-Z][a-z]+/.test(this.value) && !/\s/.test(this.value) && !/[0-9]/.test(this.value);
    if(reg)
    {
        this.style.borderColor = 'darkblue';
        passRegistration = true;
    }
    else
    {
        this.style.borderColor = 'red';
        passRegistration = false;
    }
}

document.getElementById('last-name').oninput = function(event)
{
    let reg = /^[A-Z][a-z]+/.test(this.value) && !/\s/.test(this.value) && !/[0-9]/.test(this.value);
    if(reg)
    {
        this.style.borderColor = 'darkblue';
        passRegistration = true;
    }
    else
    {
        this.style.borderColor = 'red';
        passRegistration = false;
    }
}

document.getElementById('mail').oninput = function(event)
{
    let reg = /.+\@\w+\.\w+/.test(this.value) && !/\s/.test(this.value);
    if(reg)
    {
        this.style.borderColor = 'darkblue';
        passRegistration = true;
    }
    else
    {
        this.style.borderColor = 'red';
        passRegistration = false;
    }
}

document.getElementById('mail-check').oninput = function(event)
{
    let reg = /.+\@\w+\.\w+/.test(this.value) && !/\s/.test(this.value) && this.value == document.getElementById('mail').value;
    if(reg)
    {
        this.style.borderColor = 'darkblue';
        passRegistration = true;
    }
    else
    {
        this.style.borderColor = 'red';
        passRegistration = false;
    }
}

document.getElementById('password').oninput = function(event)
{
    let reg = /([A-Za-z]+\d+|\d+[A-Za-z]+)/.test(this.value) && !/\s/.test(this.value);
    if(this.value.length >= 8 && reg)
    {
        this.style.borderColor = 'darkblue';
        passRegistration = true;
    }
    else
    {
        this.style.borderColor = 'red'; 
        passRegistration = false;
    }
}

document.getElementById('password-check').oninput = function(event)
{
    let reg = /([A-Za-z]+\d+|\d+[A-Za-z]+)/.test(this.value) && !/\s/.test(this.value) && this.value == document.getElementById('password').value;
    if(this.value.length >= 8 && reg)
    {
        this.style.borderColor = 'darkblue';
        passRegistration = true;
    }
    else
    {
        this.style.borderColor = 'red';
        passRegistration = false;
    }
}

document.getElementById('date').oninput = function(event)
{
    let x = new Date(Date.now()).getUTCFullYear();
    if(x - this.value.slice(0, 4) < 10 || x - this.value.slice(0, 4) > 98)
    {
        this.style.borderColor = 'red';
        passRegistration = false;
    }
    else
    {
        this.style.borderColor = 'darkblue';
        passRegistration = true;
    }
}

document.getElementById('submit').onclick = function(event)
{
    if(!passRegistration)
    {
        alert('You don\'t pass registration');
        return false;
    }
    else
    {
        users.push(new User(
            document.getElementById('mail').value,
            document.getElementById('first-name').value,
            document.getElementById('last-name').value,
            document.getElementById('password').value,
            document.getElementById('male').checked ? "Male" : "Female",
            document.getElementById('robot').checked));
        localStorage.setItem('Proging-users', JSON.stringify(users));
        sessionStorage.setItem('proging-pass-registration', 'true');//Для того чтобы узнать ты прошел ли регестрацию
        document.location.reload();
    }
}

let passIn = true;

document.getElementById('in-email').oninput = function(event)
{
    if(findObject(users, 'Email', this.value) > -1)
    {
        this.style.borderColor = 'darkblue';
        passIn = true;
    }
    else
    {
        this.style.borderColor = 'red';
        passIn = false;
    }
}

document.getElementById('in-password').oninput = function(event)
{
    if(findObject(users, 'Password', this.value) > -1)
    {
        this.style.borderColor = 'darkblue';
        passIn = true;
    }
    else
    {
        this.style.borderColor = 'red';
        passIn = false;
    }
}

document.getElementById('in-submit').onclick = function(event)
{
    if (document.getElementById('in-email').value == 'admin@admin.site' && document.getElementById('in-password').value == 'password123')
    {
        sessionStorage.setItem('proging-pass-registration', 'true');
        sessionStorage.setItem('proging-is-admin', 'true');
        document.location.reload();
    }
    else if(!(passIn && findObject(users, 'isEnable', true) > -1))
    {
        alert('Some thing is wrong');
        return false;
    }
    else
    {
        sessionStorage.setItem('proging-pass-registration', 'true');
        sessionStorage.setItem('proging-user-name', users[findObject(users, 'Email', document.getElementById('in-email').value)].Firstname);
        sessionStorage.setItem('proging-is-admin', 'false');
        document.location.reload();
    }
}

function findObject(where, property, how)
{
    for (let i = 0; i < where.length; i++)
    {
        if(where[i][property] == how)
        {
            return i;
        }
    }
    return -1;
}

function User(email, firstname, secondname, password, gender, isRobot)
{
    this.Email = email;
    this.Firstname = firstname;
    this.Secondname = secondname;
    this.Password = password;
    this.Gender = gender;
    this.IsRobot = isRobot;
    this.isEnable = true;
}