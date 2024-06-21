import gitHubImg from '../component/asset/github.svg';
import twitterImg from '../component/asset/twitter.svg'
import linkedinImg from '../component/asset/linkedln.svg';
import whatsappImg from '../component/asset/whatsapp.svg'

const Footer =()=>{
    return(
        <>
          <footer id='footer'>
            <section>
                <div  className='flex' id='flex'>
                          <div>
                            <h1> Contact</h1>
                            <p>
                                I would love to hear about your project and how i could help.Please fill in the form,and i'll get back to you as soon as possilble.
                            </p>
                            </div>
                            <form>
                                <input type="text" placeholder="NAME"/>
                                <input type="email" placeholder="EMAIL" />
                                <textarea name="" id="" cols="30" rows="7"></textarea>
                                <button>SEND MESSAGE</button>
                            </form>
            </div>
            
            <hr />
            <div className='flex'>
            <h1> <a href="/">Oluwasegun </a></h1>
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
                        <a href="https://wa.me/+2348131132541">
                            <img src={whatsappImg} alt="" />
                        </a>
                    
                    </div>
            </div>
          
            </section>
            </footer>
        </>
    )
}

export default Footer;