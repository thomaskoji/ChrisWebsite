document.addEventListener("keydown", function(event)
{
    if (event.key === "d" || event.key === "D") {
        document.body.classList.toggle("debug");
        console.log("hi");
    }
});