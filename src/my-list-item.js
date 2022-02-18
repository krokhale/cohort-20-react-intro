import React, {useState, useEffect} from 'react';

function MyListItem(props) {

    return (
        <>
            {/*<li className={'p-2 border-b'} onClick={props.someFunc}>{props.listItem}</li>*/}
            <li className={'p-2 border-b'} onClick={() => props.someFunc(props.listItem)}>{props.listItem}</li>
        </>
    );
}

export default MyListItem;
