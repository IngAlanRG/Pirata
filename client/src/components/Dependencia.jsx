import TextField from '@mui/material/TextField';
import { Alert, Button, FormGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DomicilioForm = () => {
	const [values, setValues] = useState({
		dependencia_economica: '',
		numero_dependientes: ''
	});
	const [error, setError] = useState(null);

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
			axios.defaults.withCredentials = true;
			const response = await axios.post('http://localhost:4090/dependencia', values);
			console.log(response.data);
			// eslint-disable-next-line react/prop-types
			navigate('/casa');
		} catch (error) {
			console.log(error);
			if (error.response && error.response.data && error.response.data.message) {
				setError(error.response.data.message);
			} else {
				setError('Ocurrió un error en el servidor');
			}
		}
	};
	return (
		<div>
			{error && <Alert color="error" severity="error">{error}</Alert>}

			<Typography variant="h1" gutterBottom component="h2" textAlign="center" fontSize="3em" marginTop="3%" marginBottom="3%" padding="0">
				De quien dependes económicamente
			</Typography>
			<form onSubmit={handleSubmit} encType="multipart/form-data">
				<FormGroup>
					<TextField
						type="text"
						id="dependencia_economica"
						name="dependencia_economica"
						label="De quien dependes económicamente"
						value={values.dependencia_economica}
						onChange={handleChange}
						required
						sx={{
							margin: "7px"
						}}
					/>

					<TextField
						type="number"
						id="numero_dependientes"
						name="numero_dependientes"
						label="¿cuantas personas aparte de ti dependen de esa persona?"
						value={values.numero_dependientes}
						onChange={handleChange}
						required
						sx={{
							margin: "7px"
						}}
					/>

					<Button type="submit" variant='contained'>Siguiente</Button>
				</FormGroup>
			</form>
		</div>
	);
};

export default DomicilioForm;
