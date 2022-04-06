import React from "react";
import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import { Routes, Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { withRouter } from "../../component/withRouter";
import {convertCollectionsSnapshotToMap,db} from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop-redux/shop.actions";
import WithSpinner from "../../component/with-spinner/with-spinner.component";


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {

    const { updateCollections } = this.props;

    const collectionRef = collection(db, "collections");
    this.unsubscribeFromSnapshot = onSnapshot(collectionRef, async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading:false})
    });
  }

  render() {
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route exact path="/"
           element={<CollectionOverviewWithSpinner isLoading={loading}/>}
          />
          <Route path="/:collectionId"
           element={<CollectionPageWithSpinner isLoading={loading}/>}
          />
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
