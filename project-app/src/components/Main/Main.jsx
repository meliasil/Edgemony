import "./Main.css";
import posts from "./data.json";

function Main(props) {

  const {className} = props;

  return (
    <main className="main-content">
      <div className="container">
        <div className="wrapper">
            <MainMenu/>;
        </div>
      </div>
    </main>
  );
}

function MainMenu({props}) {

  const posts10 = posts.slice(0, 10);

  return (
    <section>
      <ul className="posts-list">
        <MainMenuItem key={item.userId} title={item.title} body={item.body} />
      </ul>
    </section>
  )
}

function MainMenuItem(props) {
  const { userId, title, body = "#" } = props;

  return (
    <li>
      <img
          src="https://smashballoon.com/wp-content/uploads/2020/04/types-of-instagram-posts-624x297.jpg"
          alt="posts"
        />
        <h3>{item.title}</h3>
        <p>{item.body}</p>
    </li>
  );    
    
}

export { Main };
