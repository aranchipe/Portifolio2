import './style.css'

import Navbar from '../../Components/Navbar'
import MyTechnologies from '../../Components/MyTechnologies'
import Footer from '../../Components/Footer'

function Tecnologias({ escuro, setEscuro }) {

    return (
        <div className='tecnologias-page' style={escuro === true ? {
            background: 'black',
            color: 'white'
        } : {
            background: '',
            color: ''
        }}>
            <Navbar page='tecnologias' escuro={escuro} setEscuro={setEscuro} />
            <MyTechnologies escuro={escuro} />
            <div style={{ overflowY: 'hidden', marginTop: '10rem' }}>
                <Footer />

            </div>
        </div>
    )
}

export default Tecnologias