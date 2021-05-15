import React, { useEffect } from "react";
import LogItem from "./LogItem";

//redux
import { connect } from "react-redux";
import { getLogs } from "../../actions/LogActions";

const Logs = ({ log, loading, getLogs }) => {
  console.log("log", log);
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || log === null) {
    return <p>Loadding....</p>;
  }

  return (
    <>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs React-Redux</h4>
        </li>
        {!loading && log.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          log.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  log: state.log.logs,
  loading: state.log.loading,
});
export default connect(mapStateToProps, { getLogs })(Logs);
