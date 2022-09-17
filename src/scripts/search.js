
function searcher() {
    const searchInput = document.getElementById("searchInput");
    const names = document.getElementsByClassName("player");
    searchInput.addEventListener("keyup", (event) => {
        const {
            value
        } = event.target;
        const searchQuery = value.toLowerCase();
        for (const nameElement of names) {
            let name = nameElement.textContent.toLowerCase();

            if (name.includes(searchQuery)) {
                if (window.screen.width < 426) {
                    nameElement.style.display = "block"
                }
                else {
                    nameElement.style.display = "flex";
                }
            } else {
                nameElement.style.display = "none";
            }
        }
    });
}
export default searcher()