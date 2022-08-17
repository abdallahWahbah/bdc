import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../Assets/background.png';
import Card from './Card';
import applyImage from '../Assets/apply.png'
import viewImage from '../Assets/view.png'
import ViewEnjaz from './ViewEnjaz';

const Home = () => 
{
    const navigate = useNavigate();
    const [showEnjaz, setShowEnjaz] = useState(false);

    const goToDetails = () => navigate("/details");
    const goToApply = () => navigate("/form");

    return ( // css file: pages/home, base/typo
        <div className='home'>
            <div className='home__background--container'>
                <img className='home__background' src={Background} alt='home'/>
                <div className='home__background--text-container'>
                    <h1 className='header__primary'>Enjaz</h1>
                    <p className='paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Euismod odio eu risus in in felis. Sem eleifend eu tempus, sit vitae eget.
                    </p>
                </div>
            </div>
            <div className='home__actions'>
                <div className='home__actions--container'>
                    <h3 className='header__secondary'>Lorem ipsum dolor sit amet</h3>
                    <Card onClick={goToApply} applyImage={applyImage} title="Apply for Enjaz"/>
                    <Card onClick={()=>setShowEnjaz(true)} applyImage={viewImage} title="View for Enjaz"/>
                </div>
            </div>
            {showEnjaz && (
                <ViewEnjaz closeEnjaz={() => setShowEnjaz(false)} />
            )}
        </div>
    )
}

export default Home