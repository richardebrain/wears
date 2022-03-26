import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../component/collection-preview/collectionPreview.component';
class ShopPage extends React.Component{
constructor(props){
  super(props);
  this.state={
    collections: SHOP_DATA
  }
}
render(){
  return(
    <div className='shop-page'>
    
    {this.state.collections.map(({id,...otherCollectionsProp})=>(
       <CollectionPreview key ={id} {...otherCollectionsProp}/>
    ))
      
    }
    </div>
  )
}
}
export default ShopPage