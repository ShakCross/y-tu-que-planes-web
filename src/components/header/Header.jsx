import React from 'react'
import HeaderStyles from './header.module.scss';

const Header = () => {
    return (
        <nav className={HeaderStyles.row}>
            <div className={HeaderStyles.row}>
                LOGO
            </div>
            <div className={HeaderStyles.row}>
                <div>
                    <a href="">Ofertas</a>
                </div>
                <div>
                    <a href="">Destinos</a>
                </div>
                <div>
                    <a href="">Rutas cortas</a>
                </div>
                <div>
                    <a href="">Blog Viajero</a>
                </div>
            </div>
            <div className={HeaderStyles.row}>
                <div>
                    ITEM1
                </div>
                <div>
                    ITEM2
                </div>
                <div>
                    ITEM3
                </div>
            </div>
        </nav>
    )
}

export default Header
