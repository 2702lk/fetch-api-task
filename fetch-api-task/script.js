const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
    output.innerHTML = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (!response.ok) {
            throw new Error("Data nahi mila");
        }

        const data = await response.json();

        output.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
        `;

    } catch (error) {
        output.innerHTML = "❌ Error aaya data fetch karte time";
    }
});
