import React from 'react';         
import CollectionPreview from '../../component/collection-preview/collectionPreview.component';
import { selectShopData } from '../../redux/shop-redux/shop.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const ShopPage=({collections})=>{
  
  return(
    <div className='shop-page'>
    
    {collections.map(({id,...otherCollectionsProp})=>(
       <CollectionPreview key ={id} {...otherCollectionsProp}/>
    ))
      
    }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  collections:selectShopData
})
export default connect(mapStateToProps)(ShopPage)