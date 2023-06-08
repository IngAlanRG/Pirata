import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Alert, Button, InputAdornment } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
const RegistroForm = () => {
    const [values, setValues] = useState({
        name_user: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const [error, setError] = useState(null); // Nuevo estado para el error

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4090/user', values);
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message); // Establece el mensaje de error del backend
            } else {
                setError('Ocurrió un error en el servidor'); // Mensaje de error genérico
            }
        }
    };



    return (
        <div className='container__global__form'>
            {error && <Alert color="error" severity="error">{error}</Alert>} {/* Mostrar el mensaje de error si existe */}

            <form onSubmit={handleSubmit} encType="multipart/form-data" className='form'>
                <div className='input__form__textFile'>
                    <TextField
                        type="text"
                        id="name_user"
                        name="name_user"
                        label="nombre de usuario"
                        value={values.name_user}
                        onChange={handleChange}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            margin: "7px"
                        }}
                    />
                    <TextField
                        type="email"
                        id="email"
                        name="email"
                        label="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />
                </div>

                <div className='input__form__textFile'>
                    <TextField
                        type="password"
                        id="password"
                        name="password"
                        label="Ingres tu contraseña"
                        value={values.password}
                        onChange={handleChange}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <VisibilityIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            margin: "7px"
                        }}
                    />
                    <TextField
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        label="Confirma tu contraseña"
                        value={values.confirm_password}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />
                </div>
                <div style={{ display: "block" }}>
                    <Button type="submit" variant='contained'>crear cuenta</Button>
                </div>
            </form>
        </div>
    );
};

export default RegistroForm;
