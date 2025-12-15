document.addEventListener("input", (event) => {
    const titleToDo = document.getElementById("title_to_do");
    if (titleToDo.validity.tooShort) {
        console.log("is to shoort");
    }
})