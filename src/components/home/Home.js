import { useNavigate } from 'react-router-dom';
import banner from '../../assets/banner.png'

export const Home = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/pokedex')
    }

    return (
        <div className='container-fluid rect'>
            <div className='row'>
                <div className='col-6 align-self-center'>
                    <div className='section-1'>
                        <h1 className='title'>
                            <b>Find</b> all your favorite <b>Pokemon</b>
                        </h1>
                        <h2 className='subTitle'>
                            You can know the type of Pokemon, its strengths, disadvantages and abilities 
                        </h2>
                        <a 
                            className='btn botonPokemon mt-4'
                            onClick={ handleHome }
                        >
                            See pokemons
                        </a>
                    </div>
                </div>

                <div className='col-6 banner'>
                    <img className='imgBanner' src={banner} alt='banner'/>
                </div>
            </div>
        </div>
    );
};
