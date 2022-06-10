import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import start from '../images/standUp.jpg';

const Timer = ({initialSeconds}) => {

    const Navigate= useNavigate();
    const params = useParams();
    const {id} = params;


    
    const [ minutes, setMinutes ] = useState(  id==1 ? 3 : 2  );
    const [seconds, setSeconds ] =  useState(initialSeconds=0);

    const useHandleClick = ()=>{
        Navigate('/',{ replace:true })
    }

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        
        return ()=> {
            clearInterval(myInterval);
        };
    }, [minutes, seconds]);


    return (
        <div>
        { minutes === 0 && seconds === 0
            ? 
            <div className='container text-center'>
                <div className='p-5 align-middle'>
                    <h1 className='display-1'> 0:00 </h1>
                    <h1 className='display-3'> ¡Tiempo agotado! </h1>
                    <img src={start} alt='' width='50%' className='counterImage mt-2 rounded shadow-lg' />

                    <div className='row mx-auto mt-2'>
                    <div>
                    <button 
                        className='p-3 btn btn-outline-light btn-lg'
                        onClick={useHandleClick}
                        >Regresar
                    </button>
                    </div>
                    </div>
                </div>
            </div>
            : 
            <div className='container text-center'>
                <div className='p-5 align-middle'>
                    <h1 className='display-1'> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
                    <img src={start} alt='' width='50%' className='counterImage rounded shadow-lg mt-5' />
                </div>
            </div>
        }
        </div>
    )
}

export default Timer;