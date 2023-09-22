document.addEventListener("DOMContentLoaded", function () {
    const lesson1 = document.getElementById("lesson1");
    const lesson2 = document.getElementById("lesson2");
    const lesson3 = document.getElementById("lesson3");
    const content = document.getElementById("content");

    lesson1.addEventListener("click", function () {
        content.innerHTML = `
            <h2>Welcome to Lesson 1</h2>
            <p>This is the content for Lesson 1.</p>
        `;
    });

    lesson2.addEventListener("click", function () {
        content.innerHTML = `
            <h2>Welcome to Lesson 2</h2>
            <p>This is the content for Lesson 2.</p>
        `;
    });

    lesson3.addEventListener("click", function () {
        content.innerHTML = `
            <h2>Welcome to Lesson 3</h2>
            <p>This is the content for Lesson 3.</p>
        `;
    });
});
