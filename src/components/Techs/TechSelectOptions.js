import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTech } from "../../actions/TechActions";

const TechSelectOptions = ({ getTech, tech: { techs, loading } }) => {
  useEffect(() => {
    getTech();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTech })(TechSelectOptions);
