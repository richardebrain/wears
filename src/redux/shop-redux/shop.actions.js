import shopActionTypes from "./shop.types";
import { convertCollectionsSnapshotToMap,db } from "../../firebase/firebase.utils";
import { collection,onSnapshot } from "firebase/firestore";

// export const updateCollections = collectionsMap => ({
//   type: shopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionsMap
// })

const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START
})

const fecthCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collectionsMap
})

const fecthCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payoload:errorMessage
})

export const fetchCollectionAsync = () => {
  return dispatch => {

    const collectionRef = collection(db, "collections");
    dispatch(fetchCollectionStart());

      onSnapshot(collectionRef, async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
       dispatch(fecthCollectionsSuccess(collectionsMap));
    },(error=>dispatch(fecthCollectionsFailure(error.message))));
  }
}


