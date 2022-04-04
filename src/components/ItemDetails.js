import React from "react";

const ItemDetails = ({name, sku, ups, description}) => {

    return (
        <div className="teal card">
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">
                    <i className="info green circle icon"></i>
                    {description || 'No discription found for the product'}            
                </div>
            </div>
            <div className="ui secondary  segment">
                <div className="meta">Sku <i className="ui icon arrow alternate circle right" />&nbsp;{sku}</div>
                <div className="meta">Ups <i className="ui icon arrow alternate circle right" />&nbsp;{ups}</div>  
            </div>
       </div >
    )
}

export default ItemDetails