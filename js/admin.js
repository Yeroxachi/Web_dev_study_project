let was = false;
if(sessionStorage.getItem('proging-pass-registration') !== null)
{
    let panel = document.createElement('button');
    if(sessionStorage.getItem('proging-is-admin') == 'true')
    {
        panel.textContent = 'Admin';
        panel.onclick = function(event)
        {
            if(!was)
            {
                let block = document.createElement('div');
                let list = document.createElement('ul');
                block.appendChild(list);
                document.getElementsByClassName('header-area')[0].appendChild(block);
                setStyle(block, 
                    {
                        backgroundColor: '#ff3b51',
                        width: '50%',
                        minHeight: '100px',
                        maxHeight: '300px',
                        overflow: 'auto',
                        position: 'absolute',
                        zIndex: '999999',
                        right: 0,
                        border: "1px solid green",
                        borderRadius: "10px",
                        textAlign:"center"

                    })
                for (let i = 0; i < users.length; i++)
                {
                    let listItem = document.createElement('li');
                    setStyle(listItem, {
                        border: '1px solid white'
                    })
                    let firstNameField = document.createElement('span');
                    let secondNameField = document.createElement('span');
                    let emailField = document.createElement('span');
                    setStyle(firstNameField, {
                        display: 'inline-block',
                        padding: '10px 20px',
                        borderRight: '1px solid blue'
                    })
                    setStyle(secondNameField, {
                        display: 'inline-block',
                        padding: '10px 20px',
                        borderRight: '1px solid blue'
                    })
                    setStyle(emailField, {
                        display: 'inline-block',
                        padding: '10px 20px',
                        borderRight: '1px solid blue'
                    })
                    let editButton = document.createElement('button');
                    let removeButton = document.createElement('button');
                    editButton.textContent = 'Edit';
                    removeButton.textContent = 'Delete';
                    setStyle(editButton, {
                        border: '1px solid green',
                        padding: '5px 20px',
                        margin: '0 10px',
                        borderRadius: '15px'
                    })
                    setStyle(removeButton, {
                        border: '1px solid green',
                        padding: '5px 20px',
                        margin: '0 10px',
                        borderRadius: '15px'
                    })
                    removeButton.onclick = function(e)
                    {
                        list.removeChild(listItem);
                        users.splice(i, 1);
                        localStorage.setItem('Proging-users', JSON.stringify(users));
                    }
                    editButton.onclick = function(e)
                    {
                        bcgr.style.display = 'block';
                        let editFrom = document.createElement('div');
                        let fisrtNameInput = document.createElement('input');
                        let secondNameInput = document.createElement('input');
                        let emailInput = document.createElement('input');
                        let rewriteButton = document.createElement('button');
                        emailInput.type = 'email';
                        fisrtNameInput.type = 'text';
                        secondNameInput.type = 'text';
                        rewriteButton.textContent = 'Edit';
                        editFrom.append(fisrtNameInput, secondNameInput, emailInput, rewriteButton);
                        fisrtNameInput.placeholder = 'First name';
                        setStyle(fisrtNameInput, {
                            width: '85%',
                            height: '35px',
                            borderRadius: '20px',
                            textAlign: 'center'
                        })
                        secondNameInput.placeholder = 'Second name';
                        setStyle(secondNameInput, {
                            width: '85%',
                            height: '35px',
                            borderRadius: '20px',
                            textAlign: 'center'
                        })
                        emailInput.placeholder = 'E-Mail';
                        setStyle(emailInput, {
                            width: '85%',
                            height: '35px',
                            borderRadius: '20px',
                            textAlign: 'center'
                        })
                        setStyle(rewriteButton, 
                            {
                                width: '50%',
                                height: '35px',
                                borderRadius: '20px',
                                textAlign: 'center',
                                lineHeight: '35px'
                            })
                        setStyle(editFrom, 
                            {
                                position: 'fixed',
                                width: '40%',
                                padding: '0 5%',
                                zIndex: '999999',
                                backgroundColor: 'aqua',
                                left: 'calc(50% - 20%)',
                                textAlign: 'center',
                                lineHeight: '50px'
                            })
                        rewriteButton.onclick = function(e)
                        {
                            users[i].Firstname = fisrtNameInput.value;
                            users[i].Secondname = secondNameInput.value;
                            users[i].Email = emailInput.value;
                            localStorage.setItem('Proging-users', JSON.stringify(users));
                            document.body.removeChild(editFrom);
                            document.location.reload();
                        }
                        document.body.insertBefore(editFrom, bcgr);
                    }
                    firstNameField.textContent = users[i].Firstname;
                    secondNameField.textContent = users[i].Secondname;
                    emailField.textContent = users[i].Email;
                    listItem.append(firstNameField, secondNameField, emailField, editButton, removeButton);
                    list.appendChild(listItem);
                }
                let createButton = document.createElement('button');
                createButton.textContent = 'Create new user';
                setStyle(createButton, {
                    width: '70%',
                    height: '35px',
                    textAlign: 'center',
                    border: '1px solid green',
                    borderRadius: '20px'
                })
                createButton.onclick = function(e)
                {
                    form[0].style.display= "block";
                    bcgr.style.display= "block";
                }
                let createItem = document.createElement('li');
                createItem.style.textAlign = 'center';
                createItem.style.verticalAlign = 'middle';
                createItem.appendChild(createButton);
                list.appendChild(createItem);
            }
            else
            {
                document.getElementsByClassName('header-area')[0].removeChild(document.getElementsByClassName('header-area')[0].lastChild);
            }
            was = !was;
        }
    }
    else
    {
        panel.textContent = sessionStorage.getItem('proging-user-name');
        panel.onclick = function(e)
        {
            alert('SASAT');
        }
        // panel.textContent = 'User';
    }
    for (const iterator of document.getElementsByClassName('regbutton'))
    {
        iterator.style.display = 'none';
    }
    panel.classList.add('regbutton');
    setStyle(panel, {
        textAlign: 'center'
    })
    // document.getElementById('header-area').insertBefore(panel, document.getElementsByClassName('clever-main-menu')[0]);
    document.getElementById('registration-or-login-buttons-block').appendChild(panel);
}

function setStyle(obj, styleObj = {})
{
    for (const key in styleObj)
    {
        obj.style[key] = styleObj[key];
    }
}