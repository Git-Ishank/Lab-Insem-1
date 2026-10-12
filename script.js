
const categoryButtons = document.querySelectorAll(".category");
const cards = document.querySelectorAll(".course-card");
const search = document.getElementById("search");
const empty = document.getElementById("empty");

let selectedCategory = "All";

// Search and filter courses
function filterCourses() {
    const keyword = search.value.toLowerCase();
    let visibleCount = 0;

    cards.forEach(card => {
        const matchesCategory =
            selectedCategory === "All" ||
            card.dataset.category === selectedCategory;

        const matchesSearch =
            card.textContent.toLowerCase().includes(keyword);

        const visible = matchesCategory && matchesSearch;

        card.style.display = visible ? "" : "none";

        if (visible) {
            visibleCount++;
        }
    });

    empty.style.display =
        visibleCount === 0 ? "block" : "none";
}

// Category button events
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");
        selectedCategory = button.dataset.category;

        filterCourses();
    });
});

// Search event
search.addEventListener("input", filterCourses);

// Enrollment button events
document.querySelectorAll(".enroll").forEach(button => {
    button.addEventListener("click", () => {
        const courseName = button
            .closest(".course-card")
            .querySelector("h3").textContent;

        alert(
            "You selected: " + courseName +
            "\nYou can connect an enrollment page here!"
        );
    });
});
