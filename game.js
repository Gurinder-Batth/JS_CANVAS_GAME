

const GRAVITY = 0.8
const VELOCITY = { x: 0, y: 5 }

const x_player_html = document.getElementById("player_x")
const y_player_html = document.getElementById("player_y")
const plateform_x = document.getElementById("plateform_x")

const  img1 = new Image()
const  img2 = new Image()
const  img3 = new Image()
const  img4 = new Image()
const  img5 = new Image()
const  img6 = new Image()
const  img7 = new Image()
const  img8 = new Image()
const  img9 = new Image()
const  img10 = new Image()

img1.src = "./idle/Idle(1).png"
img2.src = "./idle/Idle(2).png"
img3.src = "./idle/Idle(3).png"
img4.src = "./idle/Idle(4).png"
img5.src = "./idle/Idle(5).png"
img6.src = "./idle/Idle(6).png"
img7.src = "./idle/Idle(7).png"
img8.src = "./idle/Idle(8).png"
img9.src = "./idle/Idle(9).png"
img10.src = "./idle/Idle(10).png"

var player_images = [
      img1, img2, img3 , img4, img5, img6, img7, img8, img9, img10
]


const  imgrun1 = new Image()
const  imgrun2 = new Image()
const  imgrun3 = new Image()
const  imgrun4 = new Image()
const  imgrun5 = new Image()
const  imgrun6 = new Image()
const  imgrun7 = new Image()
const  imgrun8 = new Image()

imgrun1.src = "./run/Run(1).png"
imgrun2.src = "./run/Run(2).png"
imgrun3.src = "./run/Run(3).png"
imgrun4.src = "./run/Run(4).png"
imgrun5.src = "./run/Run(5).png"
imgrun6.src = "./run/Run(6).png"
imgrun7.src = "./run/Run(7).png"
imgrun8.src = "./run/Run(8).png"

var player_run_images = [
      imgrun1, 
      imgrun1, 
      imgrun1, 
      imgrun1, 

      imgrun2,
      imgrun2,
      imgrun2,
      imgrun2,
      
      imgrun3,
      imgrun3,
      imgrun3,
      imgrun3,
      
      imgrun4,
      imgrun4,
      imgrun4,
      imgrun4,
      
      imgrun5,
      imgrun5,
      imgrun5,
      imgrun5,

      imgrun6,
      imgrun6,
      imgrun6,
      imgrun6,

      imgrun7,
      imgrun7,
      imgrun7,
      imgrun7,

      imgrun8,
      imgrun8,
      imgrun8,
      imgrun8,
]

const cloud_image = new Image();
cloud_image.src = './cloud.png'

const player_image = new Image();
player_image.src = './player.png'

const plateform1_image = new Image();
plateform1_image.src = './plateform1.png'

const background_image = new Image();
background_image.src = './background.png'

const lnflag = new Image();
lnflag.src = './flag2.png'

let audio

let GAME_OVER = false

let audio_over = new Audio("./over.mp3")
const keyPress =  {
      RightKey:false,
      LeftKey:false,
}

class Plateforms  {
    
  constructor(x, y, object_id = 9, width = 300 , height = 200) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.object_id = object_id
  }


  draw(ctx) {
    // ctx.fillStyle = "green";
    // ctx.fillRect(this.x, this.y , this.width, this.height);
    ctx.drawImage(plateform1_image,60,133,780,300,this.x,this.y,this.width,this.height)
  }

  update(ctx) {
    this.draw(ctx)
    if(this.object_id == 1) {
      plateform_x.innerHTML = this.x

      ctx.font = "20px Georgia";
      ctx.fillText("Distance: " + (this.x - 400) * -1 , GAME.width - 200, 50);
    }
  }

}
class BackgroundAsset  {
    
  constructor(x, y, object_id = 0 ) {
      this.x = x
      this.y = y
      this.height = 50
      this.width = 250
      this.object_id = object_id
  }


  draw(ctx) {
    // ctx.fillStyle = "yellow";
    ctx.drawImage(cloud_image,0,0,530,280,this.x,this.y,150,75)
    // ctx.fillRect(this.x, this.y , this.width, this.height);
  }

  update(ctx) {
    this.draw(ctx)
    if(this.object_id == 1) {
      plateform_x.innerHTML = this.x
    }
  }

}

class LnWebFlag  {
    
  constructor(x, y, object_id = 0 ) {
      this.x = x
      this.y = y
      this.height = 10
      this.width = 10
      this.object_id = object_id
  }


  draw(ctx) {
    // ctx.fillStyle = "yellow";
    ctx.drawImage(lnflag,0,0,2000, 2000, this.x, this.y, 400, 400)
    // ctx.fillRect(this.x, this.y , this.width, this.height);
  }

  update(ctx) {
    this.draw(ctx)
    if(this.object_id == 1) {
      plateform_x.innerHTML = this.x
    }
  }

}

class BackgroundFull {
    
  constructor(x, y, object_id = 0 ) {
      this.x = x
      this.y = y
      this.height = 50
      this.width = 250
      this.object_id = object_id
  }


  draw(ctx) {
    // ctx.fillStyle = "yellow";
    ctx.drawImage(background_image,50,50,1600,1900,this.x,this.y,1600,1900)
    // ctx.fillRect(this.x, this.y , this.width, this.height);
  }

  update(ctx) {
    this.draw(ctx)
    if(this.object_id == 1) {
      plateform_x.innerHTML = this.x
    }
  }

}

class Player  {
    
  constructor(x, y ) {
      this.x = x
      this.y = y
      this.height = 100
      this.width = 100
      this.frame = 0
      this.player_state = "player_images"
      this.frame_list = [ 
          [30,5,300,511],
          [30,5,300,511],
          [30,5,300,511],
          [30,5,300,511],
          [30,5,300,511],
          [30,5,300,511],
          [30,5,300,511],
          [30,5,300,511],
          [30,5,300,511],

          [330,5,230,511],
          [330,5,230,511],
          [330,5,230,511],
          [330,5,230,511],
          [330,5,230,511],
          [330,5,230,511],
          [330,5,230,511],
          [330,5,230,511],
          [330,5,230,511],

          [600,5,230,511],
          [600,5,230,511],
          [600,5,230,511],
          [600,5,230,511],
          [600,5,230,511],
          [600,5,230,511],
          [600,5,230,511],
          [600,5,230,511],
          [600,5,230,511],
          
          [830,5,230,511],
          [830,5,230,511],
          [830,5,230,511],
          [830,5,230,511],
          [830,5,230,511],
          [830,5,230,511],
          [830,5,230,511],
          [830,5,230,511],
          [830,5,230,511],
          
          [1080,5,280,511],
          [1080,5,280,511],
          [1080,5,280,511],
          [1080,5,280,511],
          [1080,5,280,511],
          [1080,5,280,511],
          [1080,5,280,511],
          [1080,5,280,511],
          [1080,5,280,511],
          
          [1350,5,280,511],
          [1350,5,280,511],
          [1350,5,280,511],
          [1350,5,280,511],
          [1350,5,280,511],
          [1350,5,280,511],
          [1350,5,280,511],
          [1350,5,280,511],
          [1350,5,280,511],
       ]
  }


  draw(ctx) {
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(this.x, this.y , this.width, this.height);
    const fc = this.frame_list[this.frame]

    ctx.drawImage(window[this.player_state][this.frame], 30, 30, 600, 470 ,this.x, this.y, this.width,this.height)
    this.frame++
    if(this.frame ==  window[this.player_state].length) {
      this.frame = 0
    }
  }

  update(ctx) {
    this.draw(ctx)
    
    if(this.y > -51) {
       this.y += VELOCITY.y
    } else {
      this.y = -50
    }
    this.x += VELOCITY.x
    x_player_html.innerHTML = this.x
    y_player_html.innerHTML = this.y
    
 

    if(this.y + this.height + VELOCITY.y <= GAME.height + player.height) {
      VELOCITY.y += GRAVITY
    }
    else VELOCITY.y = 0
  }

}



let plateform_stay = []

let plateforms = []

let backgrounds = []

let backgroundsfull = []

let lnflags = []

// let player = new Player(100,200)


const init = () => {
  
  GAME_OVER = false
  backgrounds = [
    new BackgroundAsset(100,100),
    new BackgroundAsset(500,50),
    new BackgroundAsset(300,30),
    new BackgroundAsset(800,10),
    new BackgroundAsset(1200,40),
    new BackgroundAsset(1500,80),
    new BackgroundAsset(1700,90),
    new BackgroundAsset(1900,120),
    new BackgroundAsset(2100,150),
  ]

  backgroundsfull = [
    new BackgroundFull(0,0),
    new BackgroundFull(1200,0),
    new BackgroundFull(2600,0),
  ]

  plateforms = [
    new Plateforms(50,400, 0),
    // new Plateforms(400, 550, 1),
    new Plateforms(400,450, 1),
    new Plateforms(700,200, 2),
    new Plateforms(900,500, 3),
    new Plateforms(1320,200, 4),
    new Plateforms(1700,550, 5),
    new Plateforms(1900,460, 7),
    new Plateforms(2400,460, 8),
    new Plateforms(2800,460, 9),
    new Plateforms(3200,550, 10),
    new Plateforms(3700,400, 11, 30, 150),
    new Plateforms(3900,400, 12, 60, 150),
    new Plateforms(4200,400, 13, 30, 150),
    new Plateforms(4600,550, 14)
  ]

  lnflags = [
    // new LnWebFlag(3700,355, 0),
    new LnWebFlag(4600,175, 0),
  ]
  
  plateform_stay = plateforms.map((item,index) => index == 0)

  console.log({plateform_stay})

  player = new Player(100,-200)


}

const KEY_DOWN = 40
const KEY_UP = 38
const KEY_RIGHT = 39
const KEY_LEFT = 37
const KEY_DOWN_S = 84
const KEY_UP_W = 87
const KEY_RIGHT_D = 68
const KEY_LEFT_A = 65

const GAME = {
  height:700,
  width:1600,
}

window.onload = () => 
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    c.width = GAME.width
    c.height = GAME.height
    // player = new Player(100,0)

    const updateCanvas = () => {

       
        ctx.clearRect(0, 0, c.width, c.height)

        backgroundsfull.forEach(background => {
          background.update(ctx)
        })
        
        backgrounds.forEach(background => {
          background.update(ctx)
        })

        plateforms.forEach(plateform => {
          plateform.update(ctx)
        })
        
        lnflags.forEach(flag => {
          flag.update(ctx)
        })
        

        player.update(ctx)

        if(GAME_OVER) {
          requestAnimationFrame(updateCanvas)
          return;
        }

        if(player.y >= GAME.height - player.height ) {
          // console.log("Game OVER ##")
          if(audio_over != null ) {
             audio.pause()
             audio_over.play()
             audio.currentTime = 0
          }
          GAME_OVER = true
          setTimeout(() => {
               audio_over.pause()
               audio_over.currentTime = 0
              init()
          },3000)
        }

        if( keyPress.RightKey ) {
          // console.log("right key" + player.x)
          player.player_state = "player_run_images"
          if(player.x < 600 ){
            VELOCITY.x = 3
          } else {
            VELOCITY.x = 0
          }
          plateforms.forEach(plateform => {
            plateform.x -= 5
          }) 
          lnflags.forEach(flag => {
            flag.x -= 5
          }) 
          backgrounds.forEach(background => {
            background.x -= 2.5
          }) 
          backgroundsfull.forEach(background => {
            background.x -= 2.5
          })
        }
        else if( keyPress.LeftKey ) {
          // console.log("left key")
          player.player_state = "player_run_images"
          if(player.x > 0) {
            VELOCITY.x = -3
          } else {
            VELOCITY.x = 0
          }
          // console.log({})
          plateforms.forEach(plateform => {
            plateform.x += 5
          }) 
          backgrounds.forEach(background => {
            background.x += 2.5
          }) 
          lnflags.forEach(flag => {
            flag.x += 5
          }) 
        }
        else {
          player.player_state = "player_images"
          VELOCITY.x = 0
        }
     
        plateforms.forEach(plateform => {
            if( 
                  (player.height + player.y ) <= plateform.y 
                  && (player.width) + (player.x-20) > (plateform.x) 
                  && (player.height + player.y + VELOCITY.y) >= plateform.y
                  && (player.x+40) < (plateform.x) + plateform.width 
            ) {
              plateform_stay[plateform.object_id] = true
              VELOCITY.y = 0
            } else {
              plateform_stay[plateform.object_id] = false
            }
        })
        // console.log({plateform_stay})

        // console.log({x:player.x,y:player.y})
        requestAnimationFrame(updateCanvas)
    }

    init()
    updateCanvas()
    

    window.onkeydown = (event) => {
      event.preventDefault();
      // console.log(event.keyCode)
        //     console.log(event.keyCode)
           if(event.keyCode == KEY_DOWN || event.keyCode == KEY_DOWN_S)  {

           }

           if(event.keyCode == KEY_UP || event.keyCode == KEY_UP_W) {

  console.log({plateform_stay})
                 if( plateform_stay.find(item => item == true) != undefined) {
                   VELOCITY.y = -20
                 }
           }

           if(event.keyCode == KEY_RIGHT || event.keyCode == KEY_RIGHT_D) {
             keyPress.RightKey = true
             if(audio == null && GAME_OVER == false) {
                  audio = new Audio("mario_audio.mp3");
                  audio.loop = true
                  audio.play();			
              } else  {
                if(GAME_OVER == false) {
                  audio.play();			
                }
              }
           }

           if(event.keyCode == KEY_LEFT || event.keyCode == KEY_LEFT_A ) {
            keyPress.LeftKey = true
            // plateforms.forEach(plateform => {
            //   plateform.x += 10
            // }) 
           }

    }
    window.onkeyup = (event) => {
      event.preventDefault();
        //     console.log(event.keyCode)
           if(event.keyCode == KEY_DOWN || event.keyCode == KEY_DOWN_S)  {
              player.frame = 0
           }

           if(event.keyCode == KEY_UP || event.keyCode == KEY_UP_W) {
              VELOCITY.y = 0
              player.frame = 0
           }

           if(event.keyCode == KEY_RIGHT || event.keyCode == KEY_RIGHT_D) {
              // VELOCITY.x = 0
              keyPress.RightKey = false
              player.frame = 0
           }

           if(event.keyCode == KEY_LEFT || event.keyCode == KEY_LEFT_A) {
            // VELOCITY.x = 0
            keyPress.LeftKey = false
            player.frame = 0
           }

    }
}