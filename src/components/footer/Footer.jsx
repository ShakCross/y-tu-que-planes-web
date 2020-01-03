import React from 'react'
import styles from './footer.module.scss';
import { faFacebookF, faWhatsapp, faTwitter, faInstagram , faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iperu from 'assets/img/iperu.png'
import promperu from 'assets/img/promperu.png'
import marcaperu from 'assets/img/perumarca.png'
import SubscribeInput from 'components/footer/subscribe-input/SubscribeInput'

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.informacion}>
                <h5 className={styles.heading}>
                    Información para tu viaje
                </h5>
                <ul className={styles.list}>
                    <a className={styles.list__link} target="_blank" rel="noopener noreferrer" href="http://export.promperu.gob.pe/emailing/2019/feb/pdf/feriados_2019.pdf"><li>Lista de Feriados</li></a>
                    <a className={styles.list__link} target="_blank" rel="noopener noreferrer" href="https://www.senamhi.gob.pe/"><li>Clima y Pronóstico del Tiempo</li></a>
                    <a className={styles.list__link} target="_blank" rel="noopener noreferrer" href="http://www.sernanp.gob.pe/"><li>Áreas Naturales Protegidas</li></a>
                </ul>
            </div>
            <div className={styles.asistencia}>
                <button className={styles.button_ws}>
                <FontAwesomeIcon icon={faWhatsapp}/>
                    <h5 className="mb-0 ml-1 fs-14 footer-asis">
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/051944492314">
                            Asistencia al viajero
                        </a>
                    </h5>
                </button>
                <h5 className={styles.ayuda}>
                    ¿Necesitas Ayuda?
                </h5>
                <p className={styles.ayuda_p}>Escríbenos las 24 horas</p>
                <h5 className={styles.heading}>Síguenos</h5>
                <ul className="">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faSpotify} />
                    {/* <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faSearch} /> */}
                    {/* <SocialICon abrv="fb" name='facebook' target="https://www.facebook.com/pages/Visit-Peru/524042817717056" />
                    <SocialICon abrv="tw" name='twitter' target="https://twitter.com/conoceelperu" />
                    <SocialICon abrv="in" name='instagram' target="https://www.instagram.com/ytuqueplanes/" />
                    <SocialICon abrv="you" name='youtube-play' target="http://www.youtube.com/visitperu" />
                    <SocialICon abrv="spo" name='spotify' target="https://open.spotify.com/user/yt%C3%BAqu%C3%A9planes/playlist/7pTRlBhxN2YhkEqtwu0T4k" /> */}
                </ul>
            </div>
            <div className={styles.suscribete}>
                <h5 className={styles.heading}>
                    ¡Suscríbete para recibir nuevas ofertas y novedades!
                </h5>
                <SubscribeInput />
                <div className={styles.perulogos}>
                    <img src={iperu} alt="" />
                    <img src={promperu} alt="" />
                    <img src={marcaperu} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
