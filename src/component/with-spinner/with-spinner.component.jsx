import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// const WithSpinner = WrappedComponent =>({isLoading,...otherProps})=>{
//   return isLoading ? (
//     <SpinnerOverlay>
//       <SpinnerContainer/>
//     </SpinnerOverlay>
//   ):(
//     <WrappedComponent {...otherProps}/>
//   );
// };

//alternative for what's above
const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading }) => {
    
    return isLoading ? (
      <SpinnerOverlay>
        {/* <p>loading...</p> */}
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent />
    );
  };
  return spinner;
};

export default WithSpinner;
