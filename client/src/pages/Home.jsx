import Carrusel from '../components/Carrusel'
import Card from '../components/Card'
export default function Home() {
	return (
		<div>
			<Carrusel />
			<div>
				<Card />
			</div>
			<div
				style={{
					margin: '15px',
					width: '70%',
					backgroundColor: 'red',
				}}
			>
			</div>
		</div>
	)
}
