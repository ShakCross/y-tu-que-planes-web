import React, {useState} from 'react'
import styles from './modal.module.scss'
import cancel from 'assets/img/cancel-modal.svg'

const Modal = ({ children, click, responsive }) => {

    const [showModal, setShowModal] = useState(true);
    const handleShowModal = () => setShowModal(false)

    return (
        <>
            {showModal ?
                <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                        <img className={styles.img} onClick={responsive ? click : handleShowModal} src={cancel} alt="" srcSet="" />
                    </div>
                    {children}
                </div> : ''
            }
        </>


    )
}

export default Modal


// import React, { useState } from 'react'
// import styles from './modal.module.scss'
// import cancel from 'assets/img/cancel-modal.svg'

// const Modal = ({ children }) => {


//     return (
//         <>
//             {showModal ?
//                 <div className={styles.wrapper}>
//                     <div className={styles.img_wrapper}>
//                         <img className={styles.img} onClick={handleShowModal} src={cancel} alt="" srcSet="" />
//                     </div>
//                     {children}
//                 </div> : ''
//             }
//         </>
//     )
// }

// export default Modal
