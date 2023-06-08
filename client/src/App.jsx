import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/AspiranteForm'
import CreateAccount from './components/CreateAccount'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Admision from './components/Admision'
import About from './components/About'
import Mision from './components/MisionVision'
import Aspirant from './components/Aspirant'
import CarreraS from "./components/Carrera_solicitada"
import CarreraOtra from "./components/Carrera_solicitada_otraOp"
import Preparatoria from "./components/Preparatoria"
import Domicilio from "./components/Domicilio"
import Datos from "./components/Datos"
import Padres from "./components/Padres"
import Madre from "./components/Madre"
import IngresoPadre from "./components/IngresosPadre"
import IngresoPadreMadre from "./components/IngresosPadre copy"
import IngresoHermanos from "./components/IngresosPadre copy 2"
import IngresoPropio from "./components/IngresosPadre copy 3"
import IngresoOtro from "./components/IngresosPadre copy 4"
import Dependencia from "./components/Dependencia"
import Casa from "./components/Casa"
import Mostrar from "./components/MotrarAspirante"
function App() {
	return (
		<div>
			<Navbar />
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='create' element={<CreateAccount />} />
					<Route path='metodo_admision' element={<Admision />} />
					<Route path='mision' element={<Mision />} />
					<Route path='about' element={<About />} />
					<Route path='aspirant' element={<Aspirant />} />
					<Route path='carreraS' element={<CarreraS />} />
					<Route path='carreraOtra' element={<CarreraOtra />} />
					<Route path='preparatoria' element={<Preparatoria />} />
					<Route path='domicilio' element={<Domicilio />} />
					<Route path='datos' element={<Datos />} />
					<Route path='padres' element={<Padres />} />
					<Route path='madres' element={<Madre />} />
					<Route path='ingresoPadre' element={<IngresoPadre />} />
					<Route path='ingresoMadre' element={<IngresoPadreMadre />} />
					<Route path='ingresoHermanos' element={<IngresoHermanos />} />
					<Route path='ingresoPropio' element={<IngresoPropio />} />
					<Route path='ingresoOtros' element={<IngresoOtro />} />
					<Route path='dependencia' element={<Dependencia />} />
					<Route path='casa' element={<Casa />} />
					<Route path='mostrar' element={<Mostrar />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default App
