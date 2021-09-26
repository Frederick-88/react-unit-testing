import React from "react";
import PropTypes from "prop-types";

export default function ComponentWithProps({ title }) {
  return (
    <section>
      <div data-testid="title">{title ? title : "no title found"}</div>
    </section>
  );
}

ComponentWithProps.propTypes = {
  title: PropTypes.string,
};
