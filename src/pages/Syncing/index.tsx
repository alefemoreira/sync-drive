import React from "react";
import { useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

import Loading from "../../components/Loading";

const Syncing = () => {
  const history = useHistory();

  function handleBackButton() {
    history.goBack();
  }

  return (
    <div id="#page-syncing">
      <button onClick={handleBackButton}>
        <MdArrowBack />
      </button>
      <Loading />
    </div>
  );
};

export default Syncing;
