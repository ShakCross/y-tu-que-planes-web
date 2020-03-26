import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styles from './newbutton.module.scss'
import Button from './ButtonNew';

export default {
    title: 'Button',
    decorators: [withKnobs]
};

export const Mini = ({
    content = text("Texto", "Ver más")
}) => {

    return (
        <Button yellow xclassname="button_mini">
            {content}
        </Button>
    )
}




