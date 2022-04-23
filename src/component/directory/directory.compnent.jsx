import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menuItem.component";
import { connect } from "react-redux";
// import  Data from './10.2 directory.data.js'
import { selectDirectorySections } from "../../redux/directory-redux/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory=({sections})=>{
console.log(sections)
    return (
      <div className="directory-menu">
        {sections.map(({ id,...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps } />
        ))}
      </div>
    );
  }
const mapStateToProps=createStructuredSelector({
 sections:selectDirectorySections
})


export default connect(mapStateToProps)(Directory);
