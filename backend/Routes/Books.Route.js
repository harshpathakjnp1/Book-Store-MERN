import express from 'express';
const router = express.Router();
import {Book} from '../models/book.models.js'


//Route for saving new books
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'Send all required fields' })

        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook)
        return res.status(200).send(book)

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })

    }

})

// route for getting all books from database
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({})
        return res.status(200).json({
            count: books.length,
            data: books,
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

// route for getting one books from database
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        return res.status(200).json(book)

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})


//Route for updating a book
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'Send all required fields' })

        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body)
        if (!result) {
            return res.status(404).send({ message: 'Book not Found' })
        }
        return res.status(200).send({ message: "Book Updated Successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })

    }
})

//route for deleting a book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: 'Book not Found' })
        }
        return res.status(200).send({ message: "Book deleted Successfully" })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })

    }
})

export default router