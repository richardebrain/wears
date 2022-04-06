import React from "react";
import './collection.styles.scss'
import { selectCollection } from "../../redux/shop-redux/shop.selector";
import CollectionItem from "../../component/collection-item/collection-item.component";
import { connect } from "react-redux";
import { withRouter } from "../../component/withRouter";

const CollectionPage =({collection}) =>{
  const {title,items}= collection;
  
  return(
  <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
   {
     items.map(item =><CollectionItem key={item.id} item={item}/>)
   }
    </div>
  </div>
);
}
const mapStateToProps = ( state,ownProps )=>({
  collection:selectCollection(ownProps.router.params.collectionId)(state)

})
export default withRouter(connect(mapStateToProps)(CollectionPage))