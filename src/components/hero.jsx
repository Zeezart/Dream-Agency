import heroimage from './images/hero-image.svg'

function Hero() {
    return (
        <section id="hero">
            <div className="left-content">
                <div className='yellow-line'></div>
                <h1>We help you <span className='thin-heading'>to grow your Business</span></h1>
                <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <button className='btn'> Get Started</button>
            </div>

            <div className="right-content">
                <img src={heroimage} />
            </div>
        </section>
    );
}

export default Hero;