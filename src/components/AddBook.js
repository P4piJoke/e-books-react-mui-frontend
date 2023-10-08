import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookService from "../services/BookService";
import { Button, Container, Paper, Stack } from "@mui/material";
import { Typography, TextField, Box } from '@mui/material';
import { toast } from "react-toastify";

const AddBook = () => {

    let navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        author: "",
        year: ""
    })

    const { title, author, year } = book

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        await BookService.create(book)
            .then(() => {
                toast.success("Book was added successfuly")
                navigate("/")
            })
            .catch((err) => {
                toast.error("Book wasn't added due to: " + err.message)
            });
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
                        <Button variant="contained" onClick={(e) => onSubmit(e)}>Upload</Button>
                        <Button component={Link} to="/" color="primary" variant="error">Cancel</Button>
                    </Box>
                </Box>

            </Paper>
        </Container >
    );
}

export default AddBook;