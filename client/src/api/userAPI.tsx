import axios from 'axios';


// const API = axios.create({baseURL: 'http://127.0.0.1:5000'})
const API = axios.create({baseURL: 'https://hris-personal-project.onrender.com'})

export const login = (email: string, password: string) => API.post('/user/login', {email, password});

export const signup = (formData: {employeeID: string, firstName: string, email: string, password: string}) => API.post('/user/signup',  {employeeID: formData.employeeID, name: formData.firstName, email: formData.email, password: formData.password});

export const getCurrentUser = (config: object) => API.get('/user/me', config);

// export const updateCurrentUser = (newData, config) => API.patch('/user/update-current-user', {department: newData.department, designation: newData.designation, contact: newData.contact}, config);

export const changeRoles = (role: string, config: object) => API.patch('/user/update-current-user', role, config);

export const getAllUsers = () => API.get('/user/')