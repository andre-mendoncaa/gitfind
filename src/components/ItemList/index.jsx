import React from 'react';
import './styles.css';

function ItemList({tittle, description}) {
    return  (
    <div className="item-list">
        <strong>{tittle}</strong>
        <p>{description}</p>
        <hr></hr>
    </div>
    );
}

export default ItemList;