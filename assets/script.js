const lockPopup = () => {
    let $lockPopupDiv = $('<div>').addClass('lockPopupDiv').html('<p style="text-align:center;font-size:20px;font-family:Courier;">Insert Password to view the page</p>').appendTo($('.wrapper'));
    generatePassKey(randomArrkey);
    // console.log("lockpopuppp:::::::::::::::", $('.wrapper'));
    let $passwordInput = $("<input/>", {
        type: 'password',
        class: 'inputPassword',
        maxlength: 15,
        onkeyup: 'getValue()',
        placeholder: 'Type password here'
    }).appendTo($lockPopupDiv);

}
let passkey = "";
let randomArrkey = [226, 208, 220, 212, 212, 225, 220, 212, 215, 225, 208]
const generatePassKey = (arr) => {
    arr.forEach((key, i) => {
        passkey += String.fromCharCode(arr[i] - 111);
    });
}
const getValue = () => {
    let key = $('.inputPassword').val();
    if (key === passkey) {
        // $('.wrapper').remove();
        window.open("assets/notIndex.html", '_self');
    }
}

const loadScreen = () => {
    // console.log("loadscreen invoked");
}

window.onload = () => {
    lockPopup();
    // loadScreen();
    // $('body').load('notindex.html');
}