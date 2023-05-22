import React from 'react'
import vg from '../assets/2.webp'
import ag from '../assets/downloadam.png'
import gg from '../assets/imagesgo.png'
import yg from '../assets/ins.png'
import ig from '../assets/you.png'



const Home = () => {
  return (
    <>
    <div className="home" id="home">
    <main>
        <h1>TechStar</h1>
        <p>Solutions to all your problems</p>
    </main>


    </div>
    <div className="home2">
        <img src={vg} alt="Graphics"/>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sint deserunt est nobis molestias voluptates. Reprehenderit explicabo hic distinctio obcaecati. </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
           <h1>Who we are</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quos labore, fuga nostrum quibusdam dolore, cupiditate error sunt rerum doloremque voluptatem, earum facere! At obcaecati sed cumque! Quisquam amet nemo officiis, inventore optio exercitationem, nesciunt, sequi similique blanditiis animi vitae.</p>
        </div>
    </div>
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}>
                <img src={gg} alt="Graphics"/>
                <p>Google</p>
                   
                </div>
                <div style={{
                    animationDelay:"0.5s"
                }}>
                <img src={ag} alt="Graphics"/>
                <p>Amazon</p>
                   
                </div>
                <div style={{
                    animationDelay:"0.7s"
                }}>
                <img src={yg} alt="Graphics"/>
                <p>Youtube</p>
                   
                </div>
                <div style={{
                    animationDelay:"1s"
                }}>
                <img src={ig} alt="Graphics"/>
                <p>Instagram</p>
                   
                </div>
            </article>
        </div>
    </div>
    </>
  
  )
}

export default Home