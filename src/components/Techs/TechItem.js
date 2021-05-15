import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

//redux
import { connect } from "react-redux";
import { deleteTech } from "../../actions/TechActions";

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({
      html: `deleted ${tech.firstName} ${tech.lastName} successfully`,
    });
  };
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a onClick={onDelete} href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTech })(TechItem);
