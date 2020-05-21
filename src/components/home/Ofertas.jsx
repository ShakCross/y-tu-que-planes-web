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
                    autoplay: false
                }
            },
            {
                breakpoint: 441,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "24.5%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: false
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

    const [filter, setFilter] = useState(false)
    let [active, setActive] = useState(true)

    let [filterGastro, setFilterGastro] = useState(false)
    let [filterCult, setFilterCult] = useState(false)
    let [filterNatu, setFilterNatu] = useState(false)
    let [filterCami, setFilterCami] = useState(false)
    let [filterMusic, setFilterMusic] = useState(false)

    const handleFilter = () => {
        setActive({ active: true })
        setFilter({ filter: true })
        setFilterCult(filterCult = false)
        setFilterNatu(filterNatu = false)
        setFilterCami(filterCami = false)
        setFilterNatu(filterNatu = false)
        setFilterMusic(filterMusic = false)
        setFilterGastro(filterGastro = false)
    }

    const handleFilterGastro = () => {
        setFilterGastro({ filterGastro: true })
        setFilter({ filter: true })
        setFilterCult(filterCult = false)
        setFilterNatu(filterNatu = false)
        setFilterCami(filterCami = false)
        setFilterMusic(filterMusic = false)
        setActive(active = false)
    }

    const handleFilterCultura = () => {
        setFilterCult({ filterCult: true })
        setFilter({ filter: true })
        setFilterGastro(filterGastro = false)
        setFilterNatu(filterNatu = false)
        setFilterCami(filterCami = false)
        setFilterMusic(filterMusic = false)
        setActive(active = false)
    }

    const handleFilterNaturaleza = () => {
        setFilterNatu({ filterNatu: true })
        setFilter({ filter: true })
        setFilterGastro(filterGastro = false)
        setFilterCult(filterCult = false)
        setFilterCami(filterCami = false)
        setFilterMusic(filterMusic = false)
        setActive(active = false)
    }

    const handleFilterCamina = () => {
        setFilterCami({ filterCami: true })
        setFilter({ filter: true })
        setFilterGastro(filterGastro = false)
        setFilterCult(filterCult = false)
        setFilterNatu(filterNatu = false)
        setFilterMusic(filterMusic = false)
        setActive(active = false)
    }

    const handleFilterMusica = () => {
        setFilterMusic({ filterMusic: true })
        setFilter({ filter: true })
        setFilterGastro(filterGastro = false)
        setFilterCult(filterCult = false)
        setFilterNatu(filterNatu = false)
        setFilterCami(filterCami = false)
        setActive(active = false)
    }

    const todos = filter ? name => name.experience : name => name.experience
    const gastronomia = filter ? name => name.experience.includes('Gastronomía') : name => name.experience
    const cultural = filter ? name => name.experience.includes('Cultural') : name => name.experience
    const naturaleza = filter ? name => name.experience.includes('Naturaleza') : name => name.experience
    const caminatas = filter ? name => name.experience.includes('Caminatas') : name => name.experience
    const musica = filter ? name => name.experience.includes('Música y danza') : name => name.experience

    let tags =
        filterGastro ? gastronomia :
            filterCult ? cultural :
                filterNatu ? naturaleza :
                    filterCami ? caminatas :
                        filterMusic ? musica :
                            todos

    return (
        <div>
            <H2 title="Conoce nuevas experiencias" />
            <div className={styles.tag}>
                <Tag click={handleFilter} active={active} title="Mostrar todo" />
                <Tag click={handleFilterGastro} active={filterGastro} title="Gastronomía" />
                <Tag click={handleFilterCultura} active={filterCult} title="Cultural" />
                <Tag click={handleFilterNaturaleza} active={filterNatu} title="Naturaleza" />
                <Tag click={handleFilterCamina} active={filterCami} title="Caminatas" />
                <Tag click={handleFilterMusica} active={filterMusic} title="Música y danza" />
            </div>
            <div className={styles.tag_mobile}>
                <Slider {...settings}>
                    <Tag click={handleFilter} active={active} title="Mostrar todo" />
                    <Tag click={handleFilterGastro} active={filterGastro} title="Gastronomía" />
                    <Tag click={handleFilterCultura} active={filterCult} title="Cultural" />
                    <Tag click={handleFilterNaturaleza} active={filterNatu} title="Naturaleza" />
                    <Tag click={handleFilterCamina} active={filterCami} title="Caminatas" />
                    <Tag click={handleFilterMusica} active={filterMusic} title="Música y danza" />
                </Slider>
            </div>
            <div className={styles.card_wrapper}>
                {data.filter(tags).slice(0, numberOfItems).map(post =>
                    <Card
                        key={post.id}
                        image={post.imagen}
                        location={post.localia}
                        title={post.titulo}
                        slug={post.slug}
                        alt={post.alt}
                    />
                )}
            </div>
            {
                !hideButton &&
                <Button action yellow click={handleShowMore} xclassname="wrapper_exp"/>
            }
        </div>
    )
}

export default Ofertas
