const sizeEle = document.querySelector("#qr-size");
const textEle = document.querySelector("#qr-name");
const qrImg = document.querySelector("#qrImg");
const submitBtn = document.querySelector("#submit-btn");

function generateQR () {
    const apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=";
    let size = sizeEle.value;
    let txt = textEle.value;
    
    if (txt.trim() === ""){
        alert("Plase enter text or URL.");
        return;
    } 
    qrImg.src = apiURL + size + "&data=" + txt;

}

submitBtn.addEventListener("click", generateQR)

textEle.addEventListener("keydown",function(e){
    if (e.key =="Enter"){
        generateQR();
    }
})