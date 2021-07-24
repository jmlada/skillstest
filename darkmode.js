let darkMode=localStorage.getItem("darkMode");
const checkbox = document.getElementById('checkbox');

const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", "null");
};

checkbox.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled"){
        enableDarkMode();
        console.log(darkMode);
    } else{
        disableDarkMode();
        console.log(darkMode);
    }
});