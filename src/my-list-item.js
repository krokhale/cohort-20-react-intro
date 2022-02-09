import React, {useState, useEffect} from 'react';

function MyListItem(props) {
    return (
        <>
            <li className={'p-2 border-b'}>{props.listItem}</li>
        </>
    );
}

export default MyListItem;
