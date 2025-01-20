import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/students';

export const getAllStudents = async () => axios.get(`${BASE_URL}/view`);
export const addStudent = async (student) => axios.post(`${BASE_URL}/add`, student);
export const updateStudent = async (student) => axios.put(`${BASE_URL}/update`, student);
export const deleteStudent = async (id) => axios.delete(`${BASE_URL}/delete/${id}`);