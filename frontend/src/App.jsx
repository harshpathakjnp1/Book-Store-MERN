import { Routes, Route } from 'react-router-dom'
import CreateBook from './Pages/CreateBook'
import DeleteBook from './Pages/DeleteBook'
import { EditBook } from './Pages/EditBook'
import { Home } from './Pages/Home'
import { ShowBook } from './Pages/ShowBook'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='books/create' element={ <CreateBook/>} />
      <Route path='/books/details/:id' element={ <ShowBook/>} />
      <Route path='/books/edit/:id' element={<EditBook/> } />
      <Route path='/books/delete/:id' element={<DeleteBook/> } />
    </Routes>
  )
}

export default App


