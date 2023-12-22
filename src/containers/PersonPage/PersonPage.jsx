import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

import styles from "./PersonPage.module.css";

const PersonPage = () => {
	const { id } = useParams();
	console.log(id);
	return <div>PersonPage{id}</div>;
};

/* PersonPage.propTypes = {
	setErrorApi: PropTypes.func,
}; */

export default PersonPage;
