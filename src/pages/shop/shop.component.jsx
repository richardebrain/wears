import React from "react";
import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import { Routes, Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { withRouter } from "../../component/withRouter";
import { connect } from "react-redux";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
import { fetchCollectionAsync } from "../../redux/shop-redux/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop-redux/shop.selector";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {
 
  componentDidMount() {

   const {fetchCollectionAsync}=this.props
    fetchCollectionAsync()
  
// fetch('https://firestore.googleapis.com/v1/projects/wears-db/databases/(default)/documents/collections')
// .then(res =>res.json())
// .then(collections=>console.log(collections))

// const collectionRef = collection(db, "collections");
//     this.unsubscribeFromSnapshot = onSnapshot(collectionRef, async (snapshot) => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       updateCollections(collectionsMap);
//       this.setState({loading:false})
//     });

  }

  render() {
    const {isCollectionFetching} = this.props;
    return (
      <div className="shop-page">
        <Routes>
          <Route exact path="/"
           element={<CollectionOverviewWithSpinner isLoading={isCollectionFetching}/>}
          />
          <Route path="/:collectionId"
           element={<CollectionPageWithSpinner isLoading={isCollectionFetching}/>}
          />
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionAsync:()=>dispatch(fetchCollectionAsync())
});
const mapStatetoProps=createStructuredSelector({
isCollectionFetching :selectIsCollectionFetching
})
export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ShopPage));
