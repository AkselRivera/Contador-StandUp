import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import welcome from '../images/welcome.jpg';
import loading from '../images/loading.gif';

import win from '../images/win.jpg';
import lose from '../images/lose.jpg';

const Home = () => {

    const Navigate =useNavigate();

    const [imageRender, setImageRender] = useState(welcome);
    const [clicked, setClicked] = useState(false)

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    

    const handleClick = async ()=>{
        setClicked(true);
        setImageRender(loading);
            await timeout(2000);
                const resultado = Math.floor(Math.random() * (2 - 0)) + 1;
                console.log(resultado);
                if(resultado===1)
                setImageRender(win);
                else
                setImageRender(lose);
                
            await timeout(2000);
            Navigate(`/presentacion/${resultado}`)
                setClicked(false);
    }


return (
    <div className='text-center'>
        <div className='py-1'>
            <h1 className='display-1 '>Titulo de la empresa</h1>
        </div>

        <div className='px-5'>
        <div className=''>
            <img className='lobbyImage rounded shadow-lg ' src={imageRender} alt='' width='50%'/>
        </div>
            {
            !clicked &&
            <button className='btn btn-outline-light btn-lg m-3' onClick={handleClick} >Holis bobis</button>
            }
        </div>
    </div>
)
}


export default Home