import React from "react";
import SHOP_DATA from './shop.data.js';
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={SHOP_DATA};
    }

    render(){
        
        const collections = this.state.SHOP_DATA;
        return(
            <div>
                {
                    collections.map(({id,...rest})=>{
                        return (<CollectionPreview key={id} {...rest} />)
                    })
                }
            </div>
        );
    }
}

export default ShopPage;