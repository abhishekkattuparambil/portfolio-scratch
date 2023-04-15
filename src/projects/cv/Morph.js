import './style.css'

import betty_transform from './images/morph/betty_transform.png'
import betty from './images/morph/betty.png'
import danes_annotated from './images/morph/danes_annotated.png'
import dinesh_caricature from './images/morph/dinesh_caricature.gif'
import dinesh_dane_transform from './images/morph/dinesh_dane_transform.png'
import dinesh_danes_midway from './images/morph/dinesh_danes_midway.png'
import dinesh from './images/morph/dinesh.jpeg'
import ferb from './images/morph/ferb.png'
import ferb_transform from './images/morph/ferb_transform.png'
import h_transform from './images/morph/henrique_transform.gif'
import h_transform2 from './images/morph/henrique_transform.png'
import henrique from './images/morph/henrique.png'
import jocelyn_transform from './images/morph/jocelyn_transform.png'
import jocelyn from './images/morph/jocelyn.png'
import luis_annotated from './images/morph/luis_annotated.png'
import luis_avg from './images/morph/luis_avg.png'
import luis_delaunay from './images/morph/luis_delaunay.png'
import luis_randall_opt from './images/morph/luis_randall_opt.gif'
import luis_raul_opt from './images/morph/luis_raul_opt.gif'
import luis from './images/morph/luis.jpeg'
import mean_dinesh_transform from './images/morph/mean_dinesh_transform.png'
import mean_face from './images/morph/mean_face.png'
import midway from './images/morph/midway.png'
import midway2 from './images/morph/midway2.png'
import midway3 from './images/morph/midway3.png'
import padded from './images/morph/padded.png'
import randall_annotated from './images/morph/randall_annotated.png'
import randall_avg from './images/morph/randall_avg.png'
import randall_delaunay from './images/morph/randall_delaunay.png'
import randall from './images/morph/randall.jpeg'
import raul_annotated from './images/morph/raul_annotated.png'
import raul_randall_opt from './images/morph/raul_randall_opt.gif'
import raul from './images/morph/raul.jpeg'
import robbie_avg from './images/morph/robbie_avg.png'
import robbie_transform from './images/morph/robbie_transform.png'
import robbie from './images/morph/robbie.png'
import steven_transform from './images/morph/steven_transform.png'
import steven from './images/morph/steven.png'


function Morph() {
    return (
        <div>
            <h1>Morphing Faces: Warp & Cross-Dissolve</h1>
            
            <h2>Face Dataset</h2>
            <p>Throughout this project, we will be working with random faces, generated by </p>

            {/*Intro Faces*/}
            <div className="gallery">
                <img className='trilogy' src={luis} alt=""/>
                <img className='trilogy' src={randall} alt=""/>
                <img className='trilogy' src={raul} alt=""/>
            </div>

            <h2>Correspondence</h2>

            {/*Intro Faces*/}
            <div className="gallery">
                <img className='trilogy' src={luis_annotated} alt=""/>
                <img className='trilogy' src={randall_annotated} alt=""/>
                <img className='trilogy' src={raul_annotated} alt=""/>
            </div>

            <h2>Delaunay Triangulation</h2>

            {/*Delaunay Triangulations*/}
            <div className="gallery">
                <img className='duo' src={randall_delaunay} alt=""/>
                <img className='duo' src={luis_delaunay} alt=""/>
            </div>

             {/*Avg Triangulations*/}
             <div className="gallery">
                <img className='duo' src={randall_avg} alt=""/>
                <img className='duo' src={luis_avg} alt=""/>
            </div>

            {/*A*/}
            <div className="gallery">
                <img className='trilogy' src={luis} alt=""/>
                <img className='trilogy' src={midway} alt=""/>
                <img className='trilogy' src={randall} alt=""/>
            </div>
            {/*B*/}
            <div className="gallery">
                <img className='trilogy' src={raul} alt=""/>
                <img className='trilogy' src={midway2} alt=""/>
                <img className='trilogy' src={luis} alt=""/>
            </div>
            {/*C*/}
            <div className="gallery">
                <img className='trilogy' src={randall} alt=""/>
                <img className='trilogy' src={midway3} alt=""/>
                <img className='trilogy' src={raul} alt=""/>
            </div>

            {/*GIFS*/}
            <div className="gallery">
                <img className='trilogy' src={raul_randall_opt} alt=""/>
                <img className='trilogy' src={luis_raul_opt} alt=""/>
                <img className='trilogy' src={luis_randall_opt} alt=""/>
            </div>

            {/*IBUG*/}
            <div className="gallery">
                <img src={danes_annotated} alt=""/>
            </div>

            {/*IBUG Delauney*/}
            <div className="gallery">
                <img className='duo' src={robbie_avg} alt=""/>
                <img className='duo' src={robbie_transform} alt=""/>
            </div>

            {/*Mean*/}
            <div className="gallery">
                <img src={mean_face} alt=""/>
            </div>

            {/*Dineshj*/}
            <div className="gallery">
                <img src={dinesh} alt=""/>
            </div>

            {/*Warps*/}
            <div className="gallery">
                <img className='duo' src={dinesh_dane_transform} alt=""/>
                <img className='duo' src={mean_dinesh_transform} alt=""/>
            </div>

            {/*GIFS*/}
            <div className="gallery">
                <img className='duo' src={h_transform} alt=""/>
                <img className='duo' src={dinesh_caricature} alt=""/>
            </div>

            {/*GIFS*/}
            <div className="gallery">
                <img className='trilogy' src={mean_face} alt=""/>
                <img className='trilogy' src={dinesh_danes_midway} alt=""/>
                <img className='trilogy' src={padded} alt=""/>
            </div>

        </div>
    )
}

export default Morph;
;