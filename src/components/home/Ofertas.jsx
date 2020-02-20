import React, { useState } from 'react'
import styles from './ofertas.module.scss'
import H2 from 'components/general/h2/H2'
import Tag from 'components/general/tag/Tag'
import Button from 'components/general/button/Button'
import Card from 'components/general/card/Card'
import Slider from "react-slick";
import data from 'data/turismo-lima.json'

const tags = [
    { id: "1", name: "Mostrar Todo", state: '' },
    { id: "2", name: "Naturaleza", state: '' },
    { id: "3", name: "Gastronomía", state: '' },
    { id: "4", name: "Caminatas", state: '' },
    { id: "5", name: "Cultural", state: '' },
    { id: "6", name: "Música y danza", state: '' },
]

const Ofertas = () => {
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
                    centerPadding: "30%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                }
            },
            {
                breakpoint: 441,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "20%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: 2000
                }
            },
        ]
    }

    const [filled, setFilled] = useState(true);
    const handleFilled = () => setFilled(!filled)
    const [numberOfItems, setNumberOfItems] = useState(8);
    const [hideButton, setHideButton] = useState(false)

    const handleShowMore = () => {

        numberOfItems < 30 ? setNumberOfItems(numberOfItems + 8) : '';
        numberOfItems == 24 ? setHideButton(true) : '';

        // if (numberOfItems < 30) {
        //     setNumberOfItems(numberOfItems + 8);
        //     console.log(numberOfItems);
        // }
        // if (numberOfItems == 24) {
        //     setHideButton(true)
        // }
    }

    return (
        <div>
            <H2 title="Conoce nuevas experiencias" />
            <div className={styles.tag}>
                {/* {tags.map(tags =>
                    <Tag
                        key={tags.id}
                        title={tags.name}
                        active={filled ? tags.id : !filled}
                        click={handleFilled}
                    />
                )} */}
                <Tag active={filled} click={handleFilled} title="Mostrar Todo" />
                <Tag title="Naturaleza" />
                <Tag title="Gastronomía" />
                <Tag title="Caminatas" />
                <Tag title="Cultural" />
                <Tag title="Música y danza" />
            </div>
            <div className={styles.tag_mobile}>
                <Slider {...settings}>
                    {/* {tags.map(tags =>
                        <Tag
                            key={tags.id}
                            title={tags.name}
                            active={tags.state = filled}
                            click={handleFilled}
                        />
                    )} */}
                    <Tag active={filled} click={handleFilled} title="Mostrar Todo" />
                    <Tag title="Naturaleza" />
                    <Tag title="Gastronomía" />
                    <Tag title="Caminatas" />
                    <Tag title="Cultural" />
                    <Tag title="Música y danza" />
                </Slider>
            </div>
            <div className={styles.card_wrapper}>
                {data.map(post =>
                    <Card
                        key={post.id}
                        image={post.imagen}
                        location={post.localia}
                        title={post.titulo}
                        slug={post.slug}
                        alt={post.alt}
                    />
                ).slice(0, numberOfItems)}
            </div>
            {
                !hideButton &&
                <Button yellow click={handleShowMore}/>
            }


        </div>
    )
}

export default Ofertas
