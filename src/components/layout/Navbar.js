import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLog } from "../../actions/LogActions";

const Navbar = ({ searchLog }) => {
  const text = useRef("");
  const onSearch = () => {
    searchLog(text.current.value);
  };

  return (
    <>
      <nav style={{ marginBottom: "30px" }} className='blue'>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input
                id='search'
                type='search'
                placeholder='enter text..'
                ref={text}
                onChange={onSearch}
              />
              <label className='label-icon'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default connect(null, { searchLog })(Navbar);
