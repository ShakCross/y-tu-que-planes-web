import React, { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YtqpButton from 'components/general/ytqp-button/YtqpButton'
import Post from 'components/general/post/Post'
import data from 'data/ofertas.json'

// const data = [
//     {
//         price: "S/ 230",
//         sale: "S/ 500",
//         title: "Trekking al Colca",
//         days: "02 Días/01 Noche",
//         img: "https://picsum.photos/id/1028/500/500"
//     },
//     {
//         price: "S/ 230",
//         sale: "S/ 500",
//         title: "Trekking al Colca",
//         days: "02 Días/01 Noche",
//         img: "https://picsum.photos/id/1029/500/500"
//     },
//     {
//         price: "S/ 230",
//         sale: "S/ 500",
//         title: "Trekking al Colca",
//         days: "02 Días/01 Noche",
//         img: "https://picsum.photos/id/1033/500/500"
//     },
//     {
//         price: "S/ 230",
//         sale: "S/ 500",
//         title: "Trekking al Colca",
//         days: "02 Días/01 Noche",
//         img: "https://picsum.photos/id/1031/500/500"
//     },
//     {
//         price: "S/ 230",
//         sale: "S/ 500",
//         title: "Trekking al Colca",
//         days: "02 Días/01 Noche",
//         img: "https://picsum.photos/id/1032/500/500"
//     },
//     {
//         price: "S/ 230",
//         sale: "S/ 500",
//         title: "Trekking al Colca",
//         days: "02 Días/01 Noche",
//         img: "https://picsum.photos/id/1024/500/500"
//     },
// ]

const Ofertas = (props) => {

    const prov = ["Amazonas", "Cajamarca", "Cerro de Pasco", "Cusco", "Huánuco", "Junín", "Piura"]
    const [filterProvince, setFilterProvince] = useState(false)
    const handleFilterProvince = () => setFilterProvince ({filterProvince:true})
    const selectRef = useRef();
    const filtered = filterProvince ? x => x.provincia === selectRef.current.value : x => x.provincia

    const [showMore, setShowMore] = useState(false)
    const handleShowMore = () => setShowMore({showMore: true})
    const numberOfItems = showMore ?  data.lenght : 6

    return (
        <>
            <Container ref={props.refered}>
                <Row>
                    <Col xs={12} className="mt-5 mb-3">
                        <h2 className="my-4 text-center ofertas-title">Cierra el año 2019 con estas ofertas</h2>
                    </Col>
                </Row>
                <Container className="text-center bg-purple p-4 mb-4">
                    <Row className="align-items-center">
                        <Col xs={12} lg={4} className="text-center text-lg-right">
                            <h3 className="ofertas-header-title">¿A dónde quieres ir?</h3>
                        </Col>
                        <Col xs={12} lg={4}>
                            <select ref={selectRef} className="form-control ofertas-select my-4 my-lg-0">
                                <option selected="selected" disabled>Departamentos</option>
                                {prov.map( provincias => 
                                    <option key={provincias} value={provincias}>{provincias}</option>
                                )}
                            </select>
                        </Col>
                        <Col xs={12} lg={4} className="text-center text-lg-left">
                            <YtqpButton clicked={handleFilterProvince} content="Buscar" />
                        </Col>
                    </Row>
                </Container>
                <Row className="justify-content-center">
                    {data.filter(filtered).slice(0, numberOfItems).map(posts =>
                        <Post
                            key={posts.id}
                            customClass="post" 
                            image={posts.imagen} 
                            title={posts.nombre} 
                            price={ `S/.` + posts.precio} 
                            days={posts.duracion} 
                            sale={ `S/.` + posts.antes}
                            url={posts.redirect_url} 
                        />
                     )}
                     <YtqpButton clicked={handleShowMore} myclass="ofertas-btn-seemore" content="Ver más ofertas"/>
                </Row>
            </Container>
        </>
    )
}

export default Ofertas
