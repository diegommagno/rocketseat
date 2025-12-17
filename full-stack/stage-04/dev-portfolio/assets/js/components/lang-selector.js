export function initLangSelector() {
    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");
    const selector = document.getElementById("langSelector");

    if (!langBtn || !langMenu || !selector) return;

    langBtn.addEventListener("click", () => {
    const isOpen = langMenu.classList.toggle("open");
    langBtn.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
    if (!selector.contains(e.target)) {
        langMenu.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
    }
    });

    document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        langMenu.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
    }
    });
}