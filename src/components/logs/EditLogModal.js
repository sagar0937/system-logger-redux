import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import TechSelectOptions from "../Techs/TechSelectOptions";

//redux
import { connect } from "react-redux";
import { updateLog } from "../../actions/LogActions";

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  //to set current set on ui
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  //on submit
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const updateLogObj = {
        message,
        tech,
        attention,
        date: new Date(),
        id: current.id,
      };
      updateLog(updateLogObj);
      M.toast({ html: `Log added by ${tech}` });

      // Clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <>
      <div id='edit-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>Enter System Log</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className='row'>
            <div className='input-field'>
              <select
                name='tech'
                value={tech}
                className='browser-default'
                onChange={(e) => setTech(e.target.value)}>
                <option value='' disabled>
                  Select Technician
                </option>
                <TechSelectOptions />
                {/* <option value='john smith'>john smith</option>
                <option value='sam smith'>sam smith</option> */}
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='input-field'>
              <p>
                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    checked={attention}
                    value={attention}
                    onChange={(e) => setAttention(!attention)}
                  />
                  <span>Needs Attention</span>
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue waves-light btn'>
            Enter
          </a>
        </div>
      </div>
    </>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(mapStateToProps, { updateLog })(EditLogModal);