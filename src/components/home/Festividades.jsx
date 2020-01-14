import React from 'react'
import styles from './festividades.module.scss'
import Chip from 'components/general/chip/Chip'
import Button from 'components/general/button/Button'
import H2 from 'components/general/h2/H2'
import PlusLink from 'components/general/plus-link/PlusLink'
import Date from 'components/general/date/Date'
import WrapperFest from 'components/general/wrapper-fest/WrapperFest'
import EventTitle from 'components/general/event-title/EventTitle'
import Slider from 'react-slick'

const Festividades = () => {

    const settings = {
        responsive: [
            {
                breakpoint: 9999,
                settings: 'unslick',
            },
            {
                breakpoint: 577,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "17%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                }
            }
        ]
    }

    const data = [
        {
            "id": 1,
            "day": "29",
            "month": "Septiembre",
            "province1": "Amazonas",
            "name1": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "province2": "Amazonas",
            "name2": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "more": "1"
        },
        {
            "id": 2,
            "day": "08",
            "month": "Octubre",
            "province1": "Amazonas",
            "name1": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "province2": "Amazonas",
            "name2": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "more": "2"
        },
        {
            "id": 3,
            "day": "12",
            "month": "Octubre",
            "province1": "Amazonas",
            "name1": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "province2": "Amazonas",
            "name2": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "more": "4"
        },
        {
            "id": 4,
            "day": "24",
            "month": "Octubre",
            "province1": "Amazonas",
            "name1": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "province2": "Amazonas",
            "name2": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "more": "0"
        },
        {
            "id": 5,
            "day": "28",
            "month": "Octubre",
            "province1": "Amazonas",
            "name1": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "province2": "Amazonas",
            "name2": "Feria Internacional del Señor Cautivo de Ayabaca 2019",
            "more": "1"
        },
    ]

    return (
        <section className={styles.wrapper} >
            <div>
                <H2 title="Próximas Festividades" />
            </div>
            <div className={styles.inner_wrapper}>
                {data.map(event =>
                    <WrapperFest key={event.id}>
                        <Date day={event.day} month={event.month} />
                        <div>
                            <Chip title={event.province1} />
                            <EventTitle title={event.name1} />
                        </div>
                        <div>
                            <Chip title={event.province2} />
                            <EventTitle title={event.name2} />
                        </div>
                        <PlusLink lenght={event.more} />
                    </WrapperFest>
                )}
            </div>
            <div className={styles.show_slider}>
                <Slider {...settings}>
                    {data.map(event =>
                        <WrapperFest key={event.id}>
                            <Date day={event.day} month={event.month} />
                            <div>
                                <Chip title={event.province1} />
                                <EventTitle title={event.name1} />
                            </div>
                            <div>
                                <Chip title={event.province2} />
                                <EventTitle title={event.name2} />
                            </div>
                            <PlusLink />
                        </WrapperFest>
                    )}
                </Slider>
            </div>
            <Button title="Ver calendario de festividades" xclassname="calendar_button" />
        </section>
    )
}

export default Festividades
