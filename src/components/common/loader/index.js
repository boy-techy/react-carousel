import React from 'react';
import "./loader.scss";

const Loader = ({ isLoading }) => isLoading ? <div className={"loader"}/> : null;

export default Loader;
