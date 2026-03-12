function guvi(name, email, adhar, type) {
    this.name = name
    this.email = email
    this.adhar = adhar
    this.type = type
}
// add the method to validate the prototype
display.prototype.validate = function (guvi) {
    
    if (guvi.name.lenght < 2 || guvi.email.lenght < 5 || guvi.adhar.lenght < 12) {
        return false
    }
    else {
        return true
    }
}
//clear form
display.prototype.clear = function () {
    let guviform = document.getElementById('registerform');
    guviform.reset();
}

display.prototype.add = function (guvi) {
    tableBody = document.getElementById("tableBody");
    let uilist = `<tr>
    <td>${guvi.name}</td>
    <td>${guvi.email}</td>
    <td>${guvi.adhar}</td>
    <td>${guvi.type}</td>
    </tr>
    `
    tableBody.innerHTML += ilist

}
display.prototype.show=function(type,displaymessage){
    let message=document.getElementById("showmessage");
    message.innerHTML=`<div class="alert alert-${type}" role="alert">
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
    let gender=male.checked?male.value:female.checked?female.value:'';
   
}
    e.preventDefault()
    let data = new guvi(name, email, adhar, type);
    console.log(data)
    let display = new display();

    if (display.validate(data)){

    display.add(data);
    display.clear();
    display.show('success', "registration is success")
}
else {
    display.show('danger', "registration is failed please fill out the form properly...")
display.clear();
}



function display() {

}