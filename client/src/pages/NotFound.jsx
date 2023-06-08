import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ImgFailed from '../assets/img/failed.gif'
export default function BoxSx() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				marginBottom: '20px',
				marginTop: '20px',
			}}
		>
			<Typography variant='h2' gutterBottom>
				La App no funciona
			</Typography>
			<img src={ImgFailed} />
		</Box>
	)
}
