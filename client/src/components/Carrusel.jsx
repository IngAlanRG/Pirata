import {Carousel} from 'react-responsive-carousel'
import {Link} from 'react-router-dom'
import sliderImg1 from '../assets/img/sliderImg1.png'
import sliderImg2 from '../assets/img/sliderImg2.png'
import sliderImg3 from '../assets/img/sliderImg3.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function UncontrolledExample() {
	const content = [
		{
			img: sliderImg1,
			to: 'new',
		},
		{
			img: sliderImg2,
			to: 'new',
		},
		{
			img: sliderImg3,
			to: 'new',
		},
	]

	const arrowStyles = {
		position: 'absolute',
		zIndex: '2',
		top: 'calc(50% - 15px)',
		width: '30px',
		height: '30px',
		cursor: 'pointer',
		color: '#000000',
	}

	const arrowPrevStyles = {
		...arrowStyles,
		left: '10px',
	}

	const arrowNextStyles = {
		...arrowStyles,
		right: '10px',
	}

	const renderArrowPrev = (onClickHandler, hasPrev, label) =>
		hasPrev && (
			<button
				type='button'
				onClick={onClickHandler}
				title={label}
				style={{...arrowPrevStyles}}
			>
				{'<'}
			</button>
		)

	const renderArrowNext = (onClickHandler, hasNext, label) =>
		hasNext && (
			<button
				type='button'
				onClick={onClickHandler}
				title={label}
				style={{...arrowNextStyles}}
			>
				{'>'}
			</button>
		)

	return (
		<Carousel
			autoPlay
			infiniteLoop
			interval={5000}
			renderArrowPrev={renderArrowPrev}
			renderArrowNext={renderArrowNext}
		>
			{content.map((image, index) => (
				<div key={index}>
					<Link to={image.to}>
						<div>
							<img
								className='d-block w-100'
								src={image.img}
								alt={`Slide ${index}`}
							/>
						</div>
					</Link>
				</div>
			))}
		</Carousel>
	)
}

export default UncontrolledExample
