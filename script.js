function showStatus() {
    const statusMessage = document.getElementById("statusMessage");

    const currentTime = new Date().toLocaleString();

    statusMessage.innerHTML =
        "Success! The application is working. Tested at: " + currentTime;
}