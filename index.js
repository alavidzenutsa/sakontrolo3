GetData();

function GetData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
            posts.forEach((post) => {
                createElement(post);
            });
        })
        .catch((err) => console.log(err));
}

const container = document.getElementById("container");

function createElement(post) {
    const card = document.createElement("div");
    const titleContainer = document.createElement("div");
    const bodyContainer = document.createElement("div");
    const title = document.createElement("h4");
    const body = document.createElement("p");

    card.classList.add("card");
    titleContainer.classList.add("titleContainer");
    bodyContainer.classList.add("bodyContainer");
    title.classList.add("title");
    body.classList.add("body");

    title.innerHTML = post.title;
    body.innerHTML = post.body;

    titleContainer.append(title);
    bodyContainer.append(body);
    card.append(titleContainer);
    card.append(bodyContainer);
    container.append(card);
}
