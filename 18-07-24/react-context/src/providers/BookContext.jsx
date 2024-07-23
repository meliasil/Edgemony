import { useState, createContext, useEffect } from "react";


export const BookContext = createContext();
export const SetBookContext = createContext();


function BookProvider({children}) {

    const [books, setBooks] = useState([]);


return (
    <BookContext.Provider value={{books}}>
        <SetBookContext.Provider value= {{setBooks}}>
            {children}
        </SetBookContext.Provider>
    </BookContext.Provider>
)
}

export default BookProvider;
