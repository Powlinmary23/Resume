class guvi {
    constructor(name, email, adhar, type) {
        this.name = name
        this.email = email
        this.adhar = adhar
        this.type = type
    }
}
class display {
    add(guvi) {

        let tableBody;
        tableBody = document.getElementById("tableBody");
        let uilist = `<tr>
    <td>${guvi.name}</td>
    <td>${guvi.email}</td>
    <td>${guvi.adhar}</td>
    <td>${guvi.type}</td>
    </tr>
    `
        tableBody.innerHTML += uilist
    }
}
clear()
{
    let guviform = document.getElementById('registerform');
    guviform.reset();
}

Validate(guvi) 
{
    if (guvi.name.length < 2 || guvi.email.length < 5 || guvi.adhar.length < 12) {
        return false
    }
    else {
        return true
    }
}
Show(type, displaymessage)  
{
    let message = document.getElementById("showmessage");
    message.innerHTML = `<div class="alert alert-${type}" role="alert">
  ${displaymessage}
</div>`
setTimeout(function(){
message.innerHTML='';
},3000)
}
//main function
let guviform = document.getElementById('registerform');
guviform.addEventListener('submit', guviformsubmit)

function guviformsubmit(e) {
    console.log("form is getting submitted")
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let adhar = document.getElementById('adhar').value
    let male = document.getElementById('male').value
    let female = document.getElementById('femail').value
    let gender = male.checked ? male.value : female.checked ? female.value : '';

}
e.preventDefault()
let data = new guvi(name, email, adhar, type);
console.log(data)
let display = new display();

if (display.validate(data)) {

    display.add(data);
    display.clear();
    display.show('success', "registration is success")
}
else {
    display.show('danger', "registration is failed please fill out the form properly...")
    display.clear();
}
//search functionality
let searchform=document.querySelector('form[role="search"]');
searchform.addEventListener('submit',function(e)
{
    e.preventDefault();

    let searchInput = searchform.querySelector('input[type="search"]').value.toLowerCase();


    let tableRows=document.querySelectorAll("#tableBody tr");
    tableRows.forEach (row=>{
        let rowtext = row.innerText.toLowerCase();
    if (rowtext.includes(searchInput)) {
        row.style.display = '';
    } else {
        row.style.display = 'none';
    }
})
})