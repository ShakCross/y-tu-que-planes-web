import React from 'react'
import styles from './footer.module.scss';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.informacion}>
                <h5 className="">
                    Información para tu viaje
                </h5>
                <ul className="">
                    <a target="_blank" rel="noopener noreferrer" href="http://export.promperu.gob.pe/emailing/2019/feb/pdf/feriados_2019.pdf"><li>Lista de Feriados</li></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.senamhi.gob.pe/"><li>Clima y Pronóstico del Tiempo</li></a>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.sernanp.gob.pe/"><li>Áreas Naturales Protegidas</li></a>
                </ul>
            </div>
            <div className={styles.asistencia}>
                <h5 className="">
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/051944492314">
                        Asistencia al viajero
                    </a>
                </h5>
                <h5 className="">
                    ¿Necesitas Ayuda?
                    </h5>
                <p className="">Escríbenos las 24 horas</p>
                <h5 className="">Síguenos</h5>
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
                <h5 className="">
                    ¡Suscríbete para recibir nuevas ofertas y novedades!
                </h5>
            </div>
        </footer>
    )
}

export default Footer
