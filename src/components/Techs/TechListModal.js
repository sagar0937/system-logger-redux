import React, { useEffect } from "react";
import TechItem from "./TechItem";

//redux
import { connect } from "react-redux";
import { getTech } from "../../actions/TechActions";

const TechListModal = ({ getTech, techs, loading }) => {
  console.log(techs);
  useEffect(() => {
    getTech();
    // eslint-disable-next-line
  }, []);

  //   const getTechs = async () => {
  //     setLoading(true);
  //     const response = await fetch("/techs");
  //     const data = await response.json();
  //     setLoading(false);
  //     console.log(data);
  //     setTechs(data);
  //   };

  return (
    <>
      <div id='tech-list-modal' className='modal'>
        <div className='modal-content'>
          <h4>Technician List</h4>
          <ul className='collection'>
            {!loading &&
              techs !== null &&
              techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});
export default connect(mapStateToProps, { getTech })(TechListModal);
