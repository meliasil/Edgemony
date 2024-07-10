import { useState } from "react";
import styles from "./Layout.module.css";

const initialState = [
  {
    id: self.crypto.randomUUID(),
    title: "Wine Tasting",
    location: "on presence event",
  },
  {
    id: self.crypto.randomUUID(),
    title: "English Course",
    location: "remote event",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Cooking Class",
    location: "remote event",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Kasabian Concert",
    location: "on presence event",
  },
];

const initialInput = { title: "", location: "" };

function Layout({children}) {
  const [events, setEvents] = useState(initialState);
  const [input, setInput] = useState(initialInput);
  const [filter, setFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEvents([
      ...events,
      {
        id: self.crypto.randomUUID(),
        title: input.title,
        location: input.location,
      },
    ]);

    setInput({ initialInput });
  };

  const handleChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };



  return (
    <div className={styles.container}>
      <h1>Event Catalogue</h1>
      <form onSubmit={handleSubmit}>
        <label>Event Title</label>
        <input
          name="title"
          value={input.title}
          placeholder="Insert Event Title"
          onChange={handleChange}
        />

        <label>Event Location</label>
        <input
          name="location"
          value={input.location}
          placeholder="Insert Event Location"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {children}

      <ul>
        {events
          .filter((event) => event.location.includes(filter))
          .map((event) => {
            return (
              <li key={event.id}>
                {event.title}, {event.location}
              </li>
            );
          })}
      </ul>

      
    </div>
  );
}

export default Layout;
