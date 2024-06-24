function getMainHTML() {
    const posts = renderPosts();

  return `
        <main>
            <aside>Sidebar</aside>
            ${posts}
        </main>
    `;
}

export { getMainHTML };



function renderPosts() {

    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        return res.json();
    }).then((posts) => {

        const posts = posts.map((item) => `${item.title}, ${item.body}, ${item.id}`).join("");

        const subPostsHTML = '<section class="lista-post">' + posts +  '</section>';


    })
}



export { renderPosts };
