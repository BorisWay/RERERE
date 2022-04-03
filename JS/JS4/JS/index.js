// var firstNameId = 'first-name';

// var firstNameEl = document.getElementById(firstNameId);
// console.log(firstNameEl.value);
// var lastNameId = 'last-name';
// var lastNameEl = document.getElementById(lastNameId);
// Array(lastNameEl);
// var addressId = 'address';
// var addressEl = document.getElementById(addressId);
// var citiesId = 'cities';
// var citiesEl = document.getElementById(citiesId);
// var hobbiesId = 'hobbies';
// var hobbiesEl = document.getElementById(hobbiesId);
// var avatarWrapperId = 'avatar-wrapper';
// var avatarWrapperEl = document.getElementById(avatarWrapperId);
// var avatarId = 'avatar';
// var avatarEl = document.getElementById(avatarId);


// function Array(a)
// {
//     window.alert(a.value);
// }

// firstNameEl.value = 'Andrey';
// // lastNameEl.setAttribute('value', 'Box');



// lastNameEl.className = 'last-name-input default-input error-input';
// lastNameEl.title = 'wrong last name';
// avatarEl.src = 'https://c.dns-shop.ru/thumb/st1/fit/60/60/57833d0598767bfcf1e67c9a426573ac/ebfacfbc938f93f4862193661349a25bc821da833809542e4a0c5178b7a36f42.jpg';
// avatarEl.title = 'I am avatar';
// citiesEl.value = 'Minsk';
// hobbiesEl.value = 'I have no info';
// avatarWrapperEl.innerHTML = '<ul id="list"><li>1</li>';

// var listId = 'list';
// var numberList = document.getElementById(listId);

// window.alert(numberList.innerHTML);

// function logValue(id){
//     console.log(document.getElementById(id));
// }

// function getValue(id){
//     var el=document.getElementById(id);
//     return (document.getElementById(id)).value;
// }

// var firstNameId='first-name';
// var lastNameId='last-name';

// logValue(firstNameId);

// logValue(lastNameId);

// var value=getValue(firstNameId);

// window.alert(value);

function addErrorClass(elementId){
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addErrorClassToAllInputs()
{
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');

}

var sendButton = document.getElementById('send-button');

// sendButton.addEventListener('click', addErrorClassToAllInputs);



function onSendButtonClick(){
    addErrorClass('last-name');
}

function OnFirstNameKeyUp(){
    addErrorClass('first-name');
}


sendButton.addEventListener('click', onSendButtonClick);

var firstName=document.getElementById('first-name');

firstName.addEventListener('keyup', OnFirstNameKeyUp);
