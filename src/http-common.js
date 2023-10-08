import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/api/v1/e-books",
    headers: {
        "Content-type": "application/json"
    }
});