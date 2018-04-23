import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { t } from "c-3po";
import EditButton from "metabase/reference/components/EditButton.jsx";

const GuideHeader = ({ startEditing, isSuperuser }) => (
  <div>
    <div className="wrapper wrapper--trim py4 my3">
      <div className="flex align-center">
        <h1
          className="text-dark"
          style={{ fontWeight: 700 }}
        >{t`开始`}</h1>
        {isSuperuser && (
          <span className="ml-auto">
            <EditButton startEditing={startEditing} />
          </span>
        )}
      </div>
      <p
        className="text-paragraph"
        style={{ maxWidth: 620 }}
      >{t`如果你刚开始使用本软件，这里是个不错的开始。`}</p>
    </div>
  </div>
);

GuideHeader.propTypes = {
  startEditing: PropTypes.func.isRequired,
  isSuperuser: PropTypes.bool,
};

export default pure(GuideHeader);
