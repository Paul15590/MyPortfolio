import photo from '../component/asset/Image from iOS.jpg';
import gitHubImg from '../component/asset/github.svg';
import twitterImg from '../component/asset/twitter.svg'
import linkedinImg from '../component/asset/linkedln.svg';
const Header =()=>{
    return(
        <>
          <header>
                <nav className='flex'>
                    <h1>Oluwasegun</h1>
                    <div>
                        <a href="https://github.com/Paul15590">
                        <img src={gitHubImg} alt="" />
                            
                        </a>
                        <a href="https://twitter.com/@majowogbepaul">

                        <img src={twitterImg} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/oluwasegun-paul-b688b0287/">
                            <img src={linkedinImg} alt="" />
                        </a>
                       
                    </div>
                </nav>
                <div className='flex'>
                        <div className='first-div'>
                        <h1 >
                            Nice to meet you! I'm   <span>Oluwsegun Paul</span>
                        </h1>
                        <p>
                            Based in the UK,i'm a front-end developer passinate about building assesible web apps that user loves.
                        </p>
                        <h4>CONTACT ME </h4>
                    </div>
                    <div>
                        <img id='paul' src={photo} alt="" />
                    </div>
                </div>
                
                <hr />

                <div className='lang flex'>
                    <div>
                        <h1>HTML </h1>
                        <p>1 years experience</p>
                    </div>
                    <div>
                        <h1> CSS</h1>
                        <p>1 years experience</p>
                    </div>
                    <div>
                        <h1>Javascript </h1>
                        <p>1 years experience</p>
                    </div>
                    <div>
                        <h1> Accessibility</h1>
                        <p>1 years experience</p>
                    </div>
                    <div>
                        <h1> React</h1>
                        <p>1 years experience</p>
                    </div>
                    <div>
                        <h1>Sass </h1>
                        <p>1 years experience</p>
                    </div>
                </div>
          </header>
        </>
    )
}

export default Header;