import http from "../http-common";

const getAll = () => {
    return http.get("/list");
};

const get = title => {
    return http.get(`/book/${title}`);
};

const create = data => {
    return http.post("/add", data);
};

const update = (title, data) => {
    return http.put(`/${title}/update`, data);
};

const remove = title => {
    return http.delete(`/${title}/delete`);
};

const BookService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default BookService;