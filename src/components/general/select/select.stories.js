import React, { Fragment } from 'react'
import { withKnobs, text, number } from "@storybook/addon-knobs";
import styles from './select.module.scss'
import Select from './Select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Select',
    decorators: [withKnobs]
};

export const SelectBlog = () => {
    return (
        <div className={styles.wrapper_blog}>
            <Select className={styles.inner_wrapper_blog} />
            <FontAwesomeIcon className={styles.icon_blog} icon={faSortDown} />
        </div>
    )
}
