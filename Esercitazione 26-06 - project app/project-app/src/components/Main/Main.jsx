import "./Main.css";


function Main(props) {

  const { posts } = props;

  return (
    <main>
      <div className="container">
        <div className= "main-grid">
          <aside></aside>
            <div role="list">
              {posts.slice(0, 10).map((post => (
                <Article key={post.id} post={post}/>
              )))}
            </div>
        </div>
      </div>
    </main>
  );
}


function Article(props) {

const {post = {} } = props;

  return (

    <article role="listitem">
      <div className="content">
        <h3>{post.title}</h3>
          <div>
            <small>by User {post.userId}</small>
          </div>
          <p>{post.body}</p>
      </div>
    </article>

  );
}


export { Main };
