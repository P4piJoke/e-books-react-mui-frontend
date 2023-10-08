import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BookService from "../services/BookService";
import { Button, Container, Paper, Stack } from "@mui/material";
import { Typography, TextField, Box, Alert } from '@mui/material';
import { toast } from "react-toastify";

const EditBook = () => {

    let navigate = useNavigate();

    const { titleToUpdate } = useParams();

    const [book, setBook] = useState({
        title: "",
        author: "",
        year: ""
    })

    const { title, author, year } = book

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadBook()
    }, [])

    const onSubmit = async (e) => {
        await BookService.update(titleToUpdate, book)
            .then(() => {
                toast.success("Book: " + titleToUpdate + " was updated")
                navigate("/")
            }
            ).catch((err) => {
                toast.error("Book:" + titleToUpdate + " wasn't updated due to: " + err.message)
            })
    }

    const loadBook = async () => {
        await BookService.get(titleToUpdate)
            .then(res => {
                setBook(res.data)
                toast.success("Book was loaded");
            })
            .catch(err => {
                toast.error("Book loading was failed due to: " + err.message)
                navigate("/")
            })

    }

    return (
        <Container >
            <Paper elevation={3} align="center" sx={{
                display: "block",
                mx: "auto",
                width: 450,
                my: 1,
                py: 3
            }}>

                <Typography variant="h4" sx={{
                }}>Upload new book</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}>


                    <Stack spacing={4} margin={2} padding={3}>

                        <TextField type="text" value={title} id="title" label="Enter book title" variant="standard"
                            name="title"
                            onChange={(e) => onInputChange(e)} />

                        <TextField type="text" value={author} id="author" label="Enter book author" variant="standard"
                            name="author"
                            onChange={(e) => onInputChange(e)} />

                        <TextField type="text" value={year} id="year" label="Enter publish year" variant="standard"
                            name="year"
                            onChange={(e) => onInputChange(e)} />
                    </Stack>

                    <Box sx={{
                        width: 200,
                        display: "flex",
                        m: "auto",
                        justifyContent: "space-evenly"
                    }}>
                        <Button variant="contained" onClick={(e) => onSubmit(e)}>Edit</Button>
                        <Button component={Link} to="/" color="primary" variant="error">Cancel</Button>
                    </Box>
                </Box>

            </Paper>
        </Container >
    );
}

export default EditBook;