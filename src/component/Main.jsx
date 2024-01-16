import projectImg from '../component/asset/desktop-preview (4).jpg'
import projectImg2 from '../component/asset/active-states (2).jpg'
import projectImg3 from '../component/asset/active-states (3).jpg'
import projectImg4 from '../component/asset/active-state (4).jpg'
import projectImg5 from '../component/asset/desktop-design.jpg'
import projectImg6 from '../component/asset/desktop-preview.jpg'
const Main =()=> {
    return(
        <>
            <main>
                <div className='flex'>
                    <h1>Projects</h1>
                    <h4> <a href="#footer"> CONTACT ME </a></h4>
                </div>

                <article className='flex'>
                <div>
                        <a href="https://room-homepage-indol-six.vercel.app/">
                             <img src={projectImg} alt="" />
                        </a>
                       
                        <h1> ROOM HOMEPAGE</h1>
                        <div className='flexi'>
                            <p> HTML</p>
                            <p>SCSS</p>
                            <p>REACT</p>
                        </div>
                    </div>
                    <div>
                        <a href="https://e-commerce-beta-lyart.vercel.app/">
                            <img src={projectImg4} alt="" />
                        </a>
                        
                        <h1> E-COMMERCE LANDING-PAGE</h1>
                        <div className='flexi'>
                            <p> HTML</p>
                            <p>SCSS</p>
                            <p>REACT</p>
                        </div>
                    </div>
                    <div>
                        <a href="https://huddle-landing-page-sigma-ruby.vercel.app/">
                            <img src={projectImg3} alt="" />
                        </a>
                        
                        <h1> HUDDLE-LANDING PAGE</h1>
                        <div className='flexi'>
                            <p> HTML</p>
                            <p>CSS</p>
                        </div>
                    </div>
                    <div>
                        <a href="https://tip-calculator-ruddy-delta.vercel.app/">
                            <img src={projectImg2} alt="" />
                        </a>
                        
                        <h1> TIPS CALCULATOR HOME PAGE</h1>
                        <div className='flexi'>
                            <p> HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>
                    
                    <div>
                        <a href="https://paul-news-home-page.vercel.app/">
                             <img src={projectImg5} alt="" />
                        </a>
                       
                        <h1> NEWS LANDING PAGE</h1>
                        <div className='flexi'>
                            <p> HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>
                    <div>
                        <a href="https://crowdfunding-delta-silk.vercel.app/">
                             <img src={projectImg6} alt="" />
                        </a>
                       
                        <h1>CROWDFUNGING LANDING PAGE</h1>
                        <div className='flexi'>
                            <p> HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Main;