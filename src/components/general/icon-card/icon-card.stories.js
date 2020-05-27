import React from 'react'
import { withKnobs, text, number } from "@storybook/addon-knobs";
import styles from './icon-card.module.scss'
import IconCard from './IconCard';
import Text from 'components/general/text/Text';
import bus from 'assets/img/bus.svg'
import sandwich from 'assets/img/sandwich.svg'
import marker from 'assets/img/marker.svg'
import house from 'assets/img/house.svg'

export default {
    title: 'IconCard',
    decorators: [withKnobs]
};

export const IconCarTransporte = () => {
    return (
        <IconCard
            title="Transporte"
            textClassName={`${styles.icon_card_title} ${styles.yellow}`}
            icon={bus}
            alt="bus-icon"
        >
            <div className={styles.data_wrapper}>
                <Text className={styles.text_light} content="Traslados apto Jaen" />
                <Text className={styles.text_bold} content="Hotel chch" />
            </div>
            <div className={styles.data_wrapper}>
                <Text className={styles.text_light} content="Traslados Hotel chch" />
                <Text className={styles.text_bold} content="Apto Jaen" />
            </div>
        </IconCard>
    )
}

export const IconCarAlojamiento = () => {
    return (
        <IconCard
            title="Alojamiento"
            textClassName={`${styles.icon_card_title} ${styles.green}`}
            icon={house}
            alt="house-icon"
        >
            <div className={styles.data_wrapper}>
                <Text
                    className={styles.text_light}
                    content="03 noches de Alojamiento puma urco **." />
                <Text
                    className={styles.text_xs}
                    content="*Lorem ipsum dolor sit amet. **Excepteur sint occaecat cupidata." />
            </div>
        </IconCard>
    )
}

export const IconCarAlimentacion = () => {
    return (
        <IconCard
            title="Alimentación"
            textClassName={`${styles.icon_card_title} ${styles.purple}`}
            icon={sandwich}
            alt="sandwich-icon"
        >
            <div className={styles.data_wrapper}>
                <Text
                    className={styles.text_light}
                    content="03 Desayunos" />
                <Text
                    className={styles.text_light}
                    content="02 Almuerzos" />
            </div>
        </IconCard>
    )
}

export const IconCarTours = () => {
    return (
        <IconCard
            title="Tours"
            textClassName={`${styles.icon_card_title} ${styles.sky_blue}`}
            icon={marker}
            alt="marker-icon"
        >
            <div className={styles.data_wrapper}>
                <Text
                    className={styles.text_light}
                    content="Excursiones mencionadas en el programa:" />
                <div className={styles.data_wrapper}>
                    <Text className={styles.text_bold} content="•Teleférico" />
                    <Text className={styles.text_bold} content="•Guía en español" />
                    <Text className={styles.text_bold} content="•Ingresos a los atractivos turísticos" />
                    <Text className={styles.text_bold} content="•Asistencia permanente" />
                </div>
            </div>
        </IconCard>
    )
}




