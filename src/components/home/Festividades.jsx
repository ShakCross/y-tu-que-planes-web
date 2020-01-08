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


    return (
        <div className={styles.wrapper} >
            <div>
                <H2 title="Próximas Festividades" />
            </div>
            <div className={styles.inner_wrapper}>
                <WrapperFest>
                    <Date />
                    <div>
                        <Chip />
                        <EventTitle />
                    </div>
                    <div>
                        <Chip filled />
                        <EventTitle />
                    </div>
                    <PlusLink />
                </WrapperFest>
                <WrapperFest>
                    <Date day="08" month="octubre" />
                    <div>
                        <Chip />
                        <EventTitle />
                    </div>
                    <div>
                        <Chip />
                        <EventTitle />
                    </div>
                    <PlusLink none />
                </WrapperFest>
                <WrapperFest>
                    <Date day="12" month="octubre" />
                    <div>
                        <Chip />
                        <EventTitle />
                    </div>
                    <div>
                        <Chip />
                        <EventTitle />
                    </div>
                    <PlusLink lenght="1" />
                </WrapperFest>
                <WrapperFest>
                    <Date day="18" month="octubre" />
                    <div>
                        <Chip />
                        <EventTitle />
                    </div>
                    <div>
                        <Chip />
                        <EventTitle />
                    </div>
                    <PlusLink lenght="5" />
                </WrapperFest>
                <WrapperFest>
                    <Date day="24" month="octubre" />
                    <div>
                        <Chip />
                        <EventTitle />
                    </div>
                    <div>
                        <Chip />
                        <EventTitle />
                    </div>
                    <PlusLink lenght="3" />
                </WrapperFest>
            </div>
            <div className={styles.show_slider}>
                <Slider {...settings}>
                    <WrapperFest>
                        <Date />
                        <div>
                            <Chip />
                            <EventTitle />
                        </div>
                        <div>
                            <Chip filled />
                            <EventTitle />
                        </div>
                        <PlusLink />
                    </WrapperFest>
                    <WrapperFest>
                        <Date day="08" month="octubre" />
                        <div>
                            <Chip />
                            <EventTitle />
                        </div>
                        <div>
                            <Chip />
                            <EventTitle />
                        </div>
                        <PlusLink none />
                    </WrapperFest>
                    <WrapperFest>
                        <Date day="12" month="octubre" />
                        <div>
                            <Chip />
                            <EventTitle />
                        </div>
                        <div>
                            <Chip />
                            <EventTitle />
                        </div>
                        <PlusLink lenght="1" />
                    </WrapperFest>
                    <WrapperFest>
                        <Date day="18" month="octubre" />
                        <div>
                            <Chip />
                            <EventTitle />
                        </div>
                        <div>
                            <Chip />
                            <EventTitle />
                        </div>
                        <PlusLink lenght="5" />
                    </WrapperFest>
                    <WrapperFest>
                        <Date day="24" month="octubre" />
                        <div>
                            <Chip />
                            <EventTitle />
                        </div>
                        <div>
                            <Chip />
                            <EventTitle />
                        </div>
                        <PlusLink lenght="3" />
                    </WrapperFest>
                </Slider>
            </div>
                <Button title="Ver calendario de festividades" xclassname="calendar_button"/>
        </div>
    )
}

export default Festividades
