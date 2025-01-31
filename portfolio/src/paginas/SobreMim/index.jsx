import styles from './SobreMim.module.css'

import PostModelo from "../../Componentes/PostModelo"
import fotoCapa from '../../assets/sobre_mim_capa.png'
import fotoSobreMim from '../../assets/user.jpg'

function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim!'
        >
            <h3 className={styles.subtitulo}>
                Ola, eu sou o João Lincoln
            </h3>

            <img 
            src={fotoSobreMim} 
            alt="foto do João Lincoln" 
            className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eligendi voluptates magni! Earum modi tempora nemo atque! Atque quia, maxime obcaecati, quasi dolorem voluptate laborum a debitis ipsum, facilis sint.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eligendi voluptates magni! Earum modi tempora nemo atque! Atque quia, maxime obcaecati, quasi dolorem voluptate laborum a debitis ipsum, facilis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eum illum quo nam iure commodi praesentium illo voluptatem dolorem. Aspernatur perferendis perspiciatis optio iste, mollitia rem ipsa atque cum sunt?
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eligendi voluptates magni! Earum modi tempora nemo atque! Atque quia, maxime obcaecati, quasi dolorem voluptate laborum a debitis ipsum, facilis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, id perferendis! Voluptas sequi quae, vitae hic nisi quos, nam tempora nemo sunt temporibus ut! Eveniet vero a labore illum ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, laborum voluptatibus esse eligendi laboriosam minima architecto magnam numquam repudiandae quisquam rerum ipsum, explicabo est beatae ipsam facere. Quis, qui ea?
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eligendi voluptates magni! Earum modi tempora nemo atque! Atque quia, maxime obcaecati, quasi dolorem voluptate laborum a debitis ipsum, facilis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ut dolor, ratione, dolorum ullam iure voluptate aspernatur delectus sunt quibusdam voluptatum architecto omnis ipsum tempore. Veniam omnis quam ab aspernatur?
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eligendi voluptates magni! Earum modi tempora nemo atque! Atque quia, maxime obcaecati, quasi dolorem voluptate laborum a debitis ipsum, facilis sint.
            </p>
            
        </PostModelo>
    )
}

export default SobreMim