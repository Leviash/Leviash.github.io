function login() {
    let key = document.getElementById("key").value;
    if (key == "190624") {
        window.location.href = "./pages/card.html";
        window.event.returnValue = false;
    }
    else {
        alert("key is wrong!")
    }
}