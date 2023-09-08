import React from 'react';
import './Spinner.css';
function Spinner(){

    return (
        <div>
            <div className="spinner"></div>
            <p className='text-slate-600 text-lg font-semibold'>Loading...</p>
        </div>
    )

}

export default Spinner;