import { useContext, useEffect, useState } from 'react'
import './App.css'
import { SetBookContext } from './providers/BookContext'

function App() {

  const [bookList, setBookList] = useState([]);
  const { setBooks } = useContext(SetBookContext);
  

  const handleAdd = (book) => {
    setBooks((prevState) => prevState + 1)
  }

useEffect(() => {
  fetch("http://localhost:3000/books")
  .then((res) => res.json())
  .then((res) => setBookList(res))
}, [])
  

  return (
    
      <div>
        <ul>
        {bookList.map((book) => {
          return (
            <li key={book.id} className='flex flex-col justify-center items-center gap-5 font-bold bg-green-100 p-32 box-border'>
              <h1 className='text-green-900 text-xl'>"{book.title}"</h1>
              <p className='text-green-900'>{book.author}</p>
              <p className='text-green-900'>{book.year}</p>
              <button onClick={() => handleAdd(bookList)} className='bg-lime-400 p-4 rounded-full text-sm font-bold'>Add</button>
            </li>
          )
        })}
        </ul>
      </div>
    
  )
}

export default App
