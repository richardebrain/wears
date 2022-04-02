import React from 'react';         
import CollectionOverview from '../../component/collection-overview/collection-overview.component';
import { Routes,Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { withRouter } from '../../component/withRouter';


const ShopPage=()=>{

  return(
    <div className='shop-page'>
     < Routes>
     <Route exact path='/' element={ <CollectionOverview/>}/>
     <Route path ='/:collectionId' element={<CollectionPage/>}/>
     </Routes>
   
    </div>
  )
}

export default withRouter(ShopPage)