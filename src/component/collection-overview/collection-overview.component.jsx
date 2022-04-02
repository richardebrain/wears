import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './collections-overview.styles.scss';
import CollectionPreview from "../collection-preview/collectionPreview.component";
import { selectCollectionsForPreview } from "../../redux/shop-redux/shop.selector";

const CollectionOverview =({collections})=>(
  <div className="collection-preview">

{collections.map(({id,...otherCollectionsProp})=>(
       <CollectionPreview key ={id} {...otherCollectionsProp}/>
    ))
      
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections:selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview)