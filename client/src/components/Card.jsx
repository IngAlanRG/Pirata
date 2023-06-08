import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {Box} from '@mui/material'
import Img1 from '../assets/img/tescha.jpg'
import Img2 from '../assets/img/tescha2.jpg'

const cardsData = [
	{
		img: Img1,
		title: 'Lizard 1',
		description:
			'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	},
	{
		img: Img2,
		title: 'Lizard 2',
		description:
			'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	},
	{
		img: Img2,
		title: 'Lizard 3',
		description:
			'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	},
]

function CardComponent({img, title, description}) {
	return (
		<Box sx={{maxWidth: 345, display: 'flex', flexDirection: 'column'}}>
			<CardMedia component='img' alt='green iguana' height='140' image={img} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Share</Button>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Box>
	)
}

export default function ImgMediaCard() {
	return (
		<Card
			sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}
		>
			{cardsData.map(cardData => (
				<CardComponent key={cardData.title} {...cardData} />
			))}
		</Card>
	)
}
