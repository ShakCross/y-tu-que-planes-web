import React from 'react'
import styles from './destinos.module.scss'
import Chip from 'components/general/chip/Chip'
import Button from 'components/general/button/Button'
import H2 from 'components/general/h2/H2'
import PlusLink from 'components/general/plus-link/PlusLink'
import Date from 'components/general/date/Date'
import WrapperFest from 'components/general/wrapper-fest/WrapperFest'
import EventTitle from 'components/general/event-title/EventTitle'
import Slider from 'react-slick'
import data from 'data/destinos.json'
import MainContent from 'components/home/main-content/MainContent'
import Card from 'components/general/card/Card'

const Festividades = () => {

    return (
        <MainContent>
            {data.map(post =>
                <Card
                    destinos
                    key={post.id}
                    image={post.imagen}
                    title={post.provincia}
                    url={post.url}
                    location={post.provincia}
                />
            )}
        </MainContent>
    )
}

export default Festividades
