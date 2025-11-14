import "../styles/personal-page.css";

export default function PersonalPage() {
    const contentTemplate = document.getElementById("content");

    const contentDiv = document.createElement("div");
    const paragraphContentDiv = document.createElement("p");
    paragraphContentDiv.textContent = "hi";
    contentDiv.appendChild(paragraphContentDiv);

    contentTemplate.appendChild(contentDiv);

    const secondcontent = document.createElement("div");
    const secondparagraphContentDiv = document.createElement("p");
    secondparagraphContentDiv.textContent = "hi";
    contentDiv.appendChild(secondparagraphContentDiv);

    contentTemplate.appendChild(secondcontent);

}