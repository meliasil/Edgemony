import "./App.module.css";
import Layout from "./components/Layout";

const handleFilter = (e) => {
  setFilter(e.target.id);
};

function App() {
  return (
    <>
      <Layout>
        <button id="on presence event" onClick={handleFilter}>
          On presence Events
        </button>
        <button id="remote event" onClick={handleFilter}>
          Remote Events
        </button>
      </Layout>
    </>
  );
}

export default App;
