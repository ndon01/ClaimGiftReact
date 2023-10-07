import { useEffect, useState } from 'react';
import BBBStyles from './Styles/BBBStyles.module.css'


function App() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    const canvas = document.querySelector('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')
    
    const TOTAL = 35
    const petalArray = []
    
    const petalImg = new Image()
    petalImg.src = 'https://djjjk9bjm164h.cloudfront.net/petal.png'
    petalImg.addEventListener('load', () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal())
      }
      render()
    })
    
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      petalArray.forEach(petal => petal.animate())
      window.requestAnimationFrame(render)
    }
    
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })
    
    let mouseX = 0
    function touchHandler(e) {
      mouseX = (e.clientX || e.touches[0].clientX) / window.innerWidth
    }
    window.addEventListener('mousemove', touchHandler)
    window.addEventListener('touchmove', touchHandler)
    
    // Petal class
    class Petal {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = (Math.random() * canvas.height * 2) - canvas.height
        this.w = 25 + Math.random() * 15
        this.h = 20 + Math.random() * 10
        this.opacity = this.w / 40
        this.flip = Math.random()
    
        this.xSpeed = 1.5 + Math.random() * 2
        this.ySpeed = 1 + Math.random() * 1
        this.flipSpeed = Math.random() * 0.03
      }
    
      draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
          this.x = -petalImg.width
          this.y = (Math.random() * canvas.height * 2) - canvas.height
          this.xSpeed = 1.5 + Math.random() * 2
          this.ySpeed = 1 + Math.random() * 1
          this.flip = Math.random()
        }
        ctx.globalAlpha = this.opacity
        ctx.drawImage(
          petalImg, 
          this.x, 
          this.y, 
          this.w * (0.6 + (Math.abs(Math.cos(this.flip)) / 3)), 
          this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 5))
        )
      }
    
      animate() {
        this.x += this.xSpeed + mouseX * 5
        this.y += this.ySpeed + mouseX * 2
        this.flip += this.flipSpeed
        this.draw()
      }
    }
  }, [])

  useEffect(() => {
    for(let i=0; i<200; i++) {
      // Random rotation
      var randomRotation = Math.floor(Math.random() * 360);
      // Random width & height between 0 and viewport
      var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
      var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
      
      // Random animation-delay
      var randomAnimationDelay = Math.floor(Math.random() * 10);
      console.log(randomAnimationDelay)
    
      // Random colors
      var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
    
      // Create confetti piece
      var confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.top=randomHeight + 'px';
      confetti.style.left=randomWidth + 'px';
      confetti.style.backgroundColor=randomColor;
      confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
      confetti.style.animationDelay=randomAnimationDelay + 's';
      document.getElementById("confetti-wrapper").appendChild(confetti);
    }
  }, [])

  const [pageNumber, setPageNumber] = useState(1);
  const [giftClaimed, setGiftClaimed] = useState(false);

  return (
    <>
    <div className={BBBStyles.ConfettiWrapper} id='confetti-wrapper' style={!giftClaimed ? {visibility: "hidden"} : {}}></div>
    <div className={BBBStyles.CoverFilter} id='coverFilter' style={giftClaimed ? {visibility: "hidden"} : {}}>
      {/* Background */}
      <canvas></canvas>
    </div>

    <div className='page-container'>
      {/* Page */}
      <div className='card-container'>
        {/* Frame Container */}
        <div className='card-inner'>
          
          <div className='card-body-container'>
            {/* Content */}
            {
              pageNumber == 1 ? (<>
              <div style={{width: '100%'}}>
                <h1 style={{color: 'white', position: 'absolute', left: '30px', top: '10px'}}>Hi MeeMaa,</h1>
                <h2 style={{color: 'white', position: 'relative', left: '30px', top: '160px', fontWeight: '500'}}>Happy Birthday! ❤️❤️❤️</h2>
                <h2 style={{color: 'white', position: 'relative', left: '30px', top: '155px', fontWeight: '500'}}>We hope that you enjoy your day and week and can't</h2>
                <h2 style={{color: 'white', position: 'relative', left: '30px', top: '150px', fontWeight: '500'}}>wait to see you again soon!</h2>
                <h2 style={{color: 'white', position: 'relative', left: '30px', top: '40px', fontWeight: '500'}}></h2>
              </div>
                
                </>) : pageNumber == 2 ? (<>
                  <div style={{width: '100%'}}>
                    <h1 style={{color: 'white', position: 'absolute', left: '30px', top: '10px'}}>Claim Your Gift</h1>
                    <h2 style={{color: 'white', position: 'relative', left: '30px', top: '160px', fontWeight: '500'}}>Scrabble</h2>
                    <h2 style={{color: 'white', position: 'relative', left: '30px', top: '155px', fontWeight: '500'}}><b>Where:</b> <i>Your House</i></h2>
                    <h2 style={{color: 'white', position: 'relative', left: '30px', top: '150px', fontWeight: '500'}}><b>When:</b> <i>TBD</i></h2>
                    <h2 style={{color: 'white', position: 'relative', left: '30px', top: '40px', fontWeight: '500'}}></h2>
                  </div>

              
              </>) : pageNumber == 3 ? (<>
                <div style={{width: '100%', height: '100%'}}>
                    <h1 style={{color: 'white', position: 'absolute', left: '30px', top: '10px'}}>Gift Claimed!</h1>
                    <h2 style={{color: 'white', position: 'relative', left: '30px', top: '160px', fontWeight: '500'}}>Happy Birthday!!!</h2>
                    <h2 style={{color: 'white', position: 'relative', left: '30px', top: '155px', fontWeight: '500'}}><b>See You Soon!</b></h2>
                    <h2 style={{color: 'white', position: 'relative', left: '30px', top: '40px', fontWeight: '500'}}></h2>
                  </div>
              </>) : (<></>)
            }
          </div>


          <div className='card-bottom-bar-container'>
            {/* bottom bar */}

            {/* left */}
            <div>
              {/* Linear Route */}
              <div className='card-linear-routes-container'>
                <div className='route-number-container' id={pageNumber == 1 ? 'selected' : ''}>
                  1
                </div>

                <div className='route-number-container' id={pageNumber == 2 ? 'selected' : ''}>
                  2
                </div>

                <div className='route-number-container' id={pageNumber == 3 ? 'selected' : ''}>
                  3
                </div>
                <div className='route-line'></div>
              </div>
            </div>
            {/* right */}
            <div>
              {/* Next */}
              <button className='card-button-next' id='card-button-next' onClick={() => {
                if (pageNumber == 2) {
                 
                    function random(max){
                        return Math.random() * (max - 0) + 0;
                    }
                  
                    var c = document.createElement('div');
                    c.style.cssText ='position: absolute; left: 150px; top: 150px'
                    for (var i=0; i<100; i++) {
                      var styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                                    background: hsla('+random(360)+',100%,50%,1);\
                                    animation: bang 700ms ease-out forwards;\
                                    opacity: 0';
                        
                      var e = document.createElement("i");
                      e.style.cssText = styles.toString();
                      c.appendChild(e)
                  }
                  // document.body.appendChild(c);
                    document.getElementById('card-button-next').appendChild(c)
                  
                }

                if (pageNumber == 2) {
                  setGiftClaimed(true)
                } else if(pageNumber == 3) {
                  setGiftClaimed(false)
                }

                setPageNumber(pageNumber == 1 ? 2 : pageNumber == 2 ? 3 : 1)
              }}
              style={pageNumber == 2 ? {backgroundColor: 'rgba(90,180,50,1)', width: '150px', left: '25px'} : {}}
              >
                {pageNumber == 1 ? 'Next' : pageNumber == 2 ? 'Claim Gift' : 'Restart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
