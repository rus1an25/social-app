import React from "react";
import {useParams} from "react-router";
import styles from "../NotFound/NotFound.module.css";

const NotFound = props => {
    let {link} = useParams();

    return <div className={styles.Not_found}>
        <div className={styles.Not_found_content}>
            <img src={props.logo} alt="logo"/>
            <p>Sorry, this page "https://socia1.herokuapp.com/{link}" not found!</p>
            <p>Return to <a href="https://socia1.herokuapp.com">https://socia1.herokuapp.com</a></p>
        </div>
    </div>
};

export default NotFound;