// Remove waring when user edits input
var arrayInput = document.getElementsByTagName('input');
for (let i = 0; i < arrayInput.length; i++) {
    arrayInput[i].oninput = function () {
        arrayInput[i].parentElement.querySelector('span').innerText = '';
    }
}

// Check Mail
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

// Check phone number
function is_phonenumber(phonenumber) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (phonenumber.match(phoneno)) {
        return true;
    }
    else {
        return false;
    }
}

// Pop up warning
function error(element, messsage) {
    var spanDisplay = element.parentElement.querySelector('span');
    spanDisplay.innerText = messsage;
}

// 
function summit() {
    var inputUser = document.getElementsByTagName('input')
    var summitSuccess = true;

    // Check name
    if (inputUser[0].value.trim().length == 0) {
        summitSuccess = false;
        error(inputUser[0], 'Vui lòng nhập tên đầy đủ của bạn');
    }

    // check address
    if (inputUser[1].value.trim().length == 0) {
        summitSuccess = false;
        error(inputUser[1], 'Vui lòng nhập địa chỉ đầy đủ của bạn');
    }

    // Check phone number
    if (inputUser[1].value.trim().length == 0 || !is_phonenumber(inputUser[2].value)) {
        summitSuccess = false;
        error(inputUser[2], 'Vui lòng nhập chính xác số điện thoại');
    }

    // Check email
    if (inputUser[1].value.trim().length == 0 || !ValidateEmail(inputUser[3].value)) {
        summitSuccess = false;
        error(inputUser[3], 'Trường này phải là email');
    }

    if (summitSuccess) {
        alert("Gửi thông tin thành công!");
    }

}
