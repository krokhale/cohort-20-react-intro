import React, {useState, useEffect} from 'react';

function Button(props) {

    const renderColor = () => {
        let color = 'py-3 px-4 rounded bg-blue-500 text-white'
        if(props.color == 'green'){
            color = 'py-3 px-4 rounded bg-green-500 text-white'
        } else if(props.color == 'red'){
            color = 'py-3 px-4 rounded bg-red-500 text-white'
        }

        return color
    };

    return (
        <>
            <div className={'p-5 flex justify-center'}>
                <button className={renderColor()}>{props.buttonText}</button>
            </div>

        </>
    );
}

export default Button;
