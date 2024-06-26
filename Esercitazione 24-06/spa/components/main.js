

async function getMainHTML() {
    const sidebarHTML = getSidebarHTML();
    

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .catch((e) => {
        console.error(e);
        return [];
    });

    const postsHTML = getPostsHTML(posts);

return `
    <main>
        <div class="container">
            ${sidebarHTML}
            ${postsHTML}
        </div>
    </main>
    `;
}



function getSidebarHTML() {

    return `
        <aside>Sidebar</aside>
    `
}




function getPostsHTML(props) {

    const {posts = [] } = props;

    const postsHTML = posts.map(post => {
        return `
        <article role="listItem">
                    <h3>${post.title}</h3>
                    <div><small>By ${post.userId}</small></div>
                    <p>${post.body}</p>
        </article>`
}).join("");
            



    return `
        <section>
            <h2>Lista post </h2>
            <div role="list">
            ${postsHTML}
            </div>
        </section>
    `;
}




export { getMainHTML };

