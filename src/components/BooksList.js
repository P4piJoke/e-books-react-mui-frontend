import { useEffect, useState } from "react";
import BookService from "../services/BookService"
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BooksList = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, [])

    const loadBooks = async () => {
        const result = await BookService.getAll();
        setBooks(result.data);
    }

    const deleteBook = async (title) => {
        await BookService.remove(title)
            .then(() => {
                toast.success("Book: " + title + " was deleted")
                loadBooks();
            })
            .catch((err) => {
                toast.error("Book: " + title + " wasn't deleted due to: " + err.message)
            });
    }

    return (
        <Container sx={{ m: 2 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >#</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell width={200} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            books.map((book, i) => {
                                return (
                                    <TableRow
                                        key={book.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" key={i}>{i + 1}</TableCell>
                                        <TableCell>{book.title}</TableCell>
                                        <TableCell>{book.author}</TableCell>
                                        <TableCell>{book.year}</TableCell>
                                        <TableCell width={200}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-evenly"
                                            }}
                                        >
                                            <Button component={Link} to={`/editbook/${book.title}`}
                                                variant="contained" color="info">Edit</Button>
                                            <Button onClick={() => deleteBook(book.title)}
                                                variant="contained" color="error">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default BooksList;