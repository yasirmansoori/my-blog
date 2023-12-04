import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pagenotfound from '../Images/inuse/404.png'
import '../CSS/pagenotfound.css'
const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='Body container-fluid ' >
            <img alt='' src={pagenotfound} />
            <div >
                <h1 >404</h1>
                <p>Oh, look! It seems there might be a little hiccup! 🤔<br />
                    (Could it be us? Or maybe it's you?)<br /><br />
                    Regardless, let's figure it out together. You could:<br />
                    a) Head back to the <Link to='/'><strong>homepage</strong></Link>, or<br />
                    b) Exercise a bit of patience - wait for just 4 seconds,<br />
                    and the page will magically redirect itself! ✨😊
                </p>
            </div>
        </div >
    )
}

export default PageNotFound