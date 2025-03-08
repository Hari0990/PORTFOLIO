document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.body.classList.toggle("light-mode", currentTheme === "light");
        themeSwitch.checked = currentTheme === "light";
    }

    themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("light-mode");
        const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("theme", theme);
    });
});
