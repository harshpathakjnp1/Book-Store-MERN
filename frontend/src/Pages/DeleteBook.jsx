import { useState } from 'react'
import axios from 'axios'
import BackButton from '../Components/BackButton'
import { Spinner } from '../Components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'



const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const id = useParams()
  const handleDeleteBook = () => {
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`).then(() => {
      setLoading(false)
      navigate('/')
    }).catch((error) => {
      setLoading(false)
      alert('An Error Occured,please check console')
      console.log(error)
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className=''></div>


    </div>
  )
}

export default DeleteBook
