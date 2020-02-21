import React, { useState, useRef } from 'react'
import styles from './ofertas.module.scss'
import H2 from 'components/general/h2/H2'
import Tag from 'components/general/tag/Tag'
import Button from 'components/general/button/Button'
import Card from 'components/general/card/Card'
import Slider from "react-slick";
import data from 'data/turismo-lima.json'


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

    const [numberOfItems, setNumberOfItems] = useState(8);
    const [hideButton, setHideButton] = useState(false)

    const handleShowMore = () => {
        numberOfItems < 30 ? setNumberOfItems(numberOfItems + 8) : '';
        numberOfItems == 24 ? setHideButton(true) : '';
    }

    const prov = ["Amazonas", "Cajamarca", "Cerro de Pasco", "Cusco", "Huánuco", "Junín", "Piura"]

    const [tags, setTags] = useState(null)
    const [filterTags, setFilterTags] = useState(null)

    const filtered = filterTags
    
    let naturaleza = data.filter(e => e.experience[0] === "Naturaleza")
    let gastronomia = data.filter(e => e.experience[0] === "Gastronomía")
    let caminatas = data.filter(e => e.experience[0] === "Caminatas")
    let cultural = data.filter(e => e.experience[0] === "Cultural")
    let musica = data.filter(e => e.experience[0] === "Música y danza")

    function showNaturaleza () {
        console.log(naturaleza);
    }
    function showGastronomia () {
        console.log(gastronomia);
    }
    function showCaminatas () {
        console.log(caminatas);
    }
    function showCultural () {
        console.log(cultural);
    }
    function showMusica () {
        console.log(musica);
    }
    

    return (
        <div>
            <H2 title="Conoce nuevas experiencias" />
            <div className={styles.tag}>
                <div>Mostrar Todo</div>
                <Tag title="Mostrar Todo" />
                <Tag click={showNaturaleza} title="Naturaleza" />
                <Tag click={showGastronomia} title="Gastronomía" />
                <Tag click={showCaminatas} title="Caminatas" />
                <Tag click={showCultural} title="Cultural" />
                <Tag click={showMusica} title="Música y danza" />
            </div>
            <div className={styles.tag_mobile}>
                <Slider {...settings}>
                    <Tag active click title="Mostrar Todo" />
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
