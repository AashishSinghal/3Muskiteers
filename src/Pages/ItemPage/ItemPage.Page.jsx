import React from 'react'
import './ItemPage.Style.scss'
import CustHeader from '../CustHomePage/CustHeader/CustHeader.Component';

class ItemPage extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    } 

    render(){
        return(
            <>
            <CustHeader />
            </>
        )
    }
}

export default ItemPage;