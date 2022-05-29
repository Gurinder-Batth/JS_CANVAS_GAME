
const drawIdelMario = (ctx, img, { from_x, from_y }, {from_to_x, from_to_y}, {place_x, place_y}, {size_x, size_y} ) => {
    ctx.drawImage(
        img,
        from_x, from_y,
        from_to_x, from_to_y,
        place_x, place_y,
        size_x, size_y
    );
}


let counter = 0
let surface_walk = 2

let counter_jump = 0

const walk_state  = [
    72, 90, 108
]

const jump_state  = [
    161, 179, 199, 216, 126, 144, 179, 216, 72
]

let group_dis_jump  = 425
let group_dis_left  = 50

window.onload = () => 
{

    // start playing audio

    var c2 = document.createElement("canvas")
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // var ctx2 = c2.getContext("2d");
    var img = document.getElementById("scream");
    // const [width,height] = [parseInt(img.width), parseInt(img.height)];
    // c.wid
    c.width = 1000
    c.height = 500
    // c2.width = width
    // c2.height = height

    
   
    drawIdelMario(ctx, img ,
        { from_x:0, from_y:0 },
        { from_to_x:18, from_to_y:38 },
        { place_x:50, place_y:425 },
        { size_x:17*2, size_y:39*2 })


    // drawIdelMario(ctx, img ,
    //     { from_x:161, from_y:0 },
    //     { from_to_x:19, from_to_y:38 },
    //     { place_x:50, place_y:425 },
    //     { size_x:17*2, size_y:39*2 })

    // drawIdelMario(ctx, img ,
    //     { from_x:179, from_y:0 },
    //     { from_to_x:19, from_to_y:38 },
    //     { place_x:100, place_y:400 },
    //     { size_x:17*2, size_y:39*2 })

    // drawIdelMario(ctx, img ,
    //     { from_x:199, from_y:0 },
    //     { from_to_x:19, from_to_y:38 },
    //     { place_x:150, place_y:375 },
    //     { size_x:17*2, size_y:39*2 })




    // drawIdelMario(ctx, img ,
    //     { from_x:216, from_y:0 },
    //     { from_to_x:19, from_to_y:38 },
    //     { place_x:200, place_y:350 },
    //     { size_x:17*2, size_y:39*2 })


        // drawIdelMario(ctx, img ,
        //     { from_x:126, from_y:0 },
        //     { from_to_x:19, from_to_y:38 },
        //     { place_x:250, place_y:350 },
        //     { size_x:17*2, size_y:39*2 })

        // drawIdelMario(ctx, img ,
        //     { from_x:144, from_y:0 },
        //     { from_to_x:19, from_to_y:38 },
        //     { place_x:300, place_y:350 },
        //     { size_x:17*2, size_y:39*2 })


        //     drawIdelMario(ctx, img ,
        //         { from_x:179, from_y:0 },
        //         { from_to_x:19, from_to_y:38 },
        //         { place_x:350, place_y:375 },
        //         { size_x:17*2, size_y:39*2 })


        //         drawIdelMario(ctx, img ,
        //             { from_x:216, from_y:0 },
        //             { from_to_x:19, from_to_y:38 },
        //             { place_x:400, place_y:400 },
        //             { size_x:17*2, size_y:39*2 })

        //             // remove for now
        //         // drawIdelMario(ctx, img ,
        //         //     { from_x:216, from_y:0 },
        //         //     { from_to_x:19, from_to_y:38 },
        //         //     { place_x:450, place_y:425 },
        //         //     { size_x:17*2, size_y:39*2 })

        //         drawIdelMario(ctx, img ,
        //             { from_x:72, from_y:0 },
        //             { from_to_x:19, from_to_y:38 },
        //             { place_x:450, place_y:425 },
        //             { size_x:17*2, size_y:39*2 })

                // drawIdelMario(ctx, img ,
                //     { from_x:89.2, from_y:0 },
                //     { from_to_x:19, from_to_y:38 },
                //     { place_x:450, place_y:425 },
                //     { size_x:17*2, size_y:39*2 })
    // drawIdelMario(ctx, img ,
    //     { from_x:199, from_y:0 },
    //     { from_to_x:19, from_to_y:38 },
    //     { place_x:300, place_y:425 },
    //     { size_x:17*2, size_y:39*2 })

   


    let audio = null

    document.getElementById("next").addEventListener("click",() => {
        if(audio == null) {
            audio = new Audio("mario_audio.mp3");
            audio.play();			
        }
        invokeMarioGame()
    })

    document.getElementById("up").addEventListener("click",() => {
        jump_mario()
    })

   const jump_mario = () => {
    let jump_interval =  setInterval(() => {

        ctx.clearRect(0,0,c.width ,c.height )
        let walk_jump_pos = jump_state[counter_jump]
         drawIdelMario(ctx, img ,
          { from_x:walk_jump_pos, from_y:0 },
          { from_to_x:19, from_to_y:38 },
          { place_x:group_dis_left, place_y:group_dis_jump },
          { size_x:17*2, size_y:39*2 })
  
          counter_jump++
          if(counter_jump > 4) {
              group_dis_jump+=25
          }
          else if(counter_jump >= 4 && counter_jump <= 6 ) {
              // group_dis_jump
          }
  
          else {
            group_dis_jump-=25
          }
          
          group_dis_left+=25
          if(counter_jump == 8) {
              counter_jump = 0
              surface_walk = group_dis_left
              clearInterval(jump_interval)
          }
  
      },50)
   }

   const invokeMarioGame = () => {
       let local_interval_count = 0
       let timer =  setInterval(() => {
            ctx.clearRect(0,0,c.width ,c.height )
            surface_walk+=4
            let walk_mario_pos = walk_state[counter]
            group_dis_left = surface_walk
            drawIdelMario(ctx, img ,
                { from_x:walk_mario_pos  , from_y:0 },
                { from_to_x:x, from_to_y:38 },
                { place_x:surface_walk, place_y:425 },
                { size_x:17*2, size_y:39*2 })
    
            counter++
            if(counter == 3) {
                counter = 0
            }
            if(local_interval_count == 3) {
                // clearInterval(timer)
            }
            local_interval_count++
        },50)
    }

    // drawIdelMario(ctx, img ,
    //     { from_x:72, from_y:0 },
    //     { from_to_x:18, from_to_y:38 },
    //     { place_x:50, place_y:425 },
    //     { size_x:17*2, size_y:39*2 })


    // drawIdelMario(ctx, img ,
    //     { from_x:90, from_y:0 },
    //     { from_to_x:18, from_to_y:38 },
    //     { place_x:100, place_y:425 },
    //     { size_x:17*2, size_y:39*2 })


    // drawIdelMario(ctx, img ,
    //     { from_x:108, from_y:0 },
    //     { from_to_x:18, from_to_y:38 },
    //     { place_x:150, place_y:425 },
    //     { size_x:17*2, size_y:39*2 })


    // drawIdelMario(ctx, img)
    

    // img.addEventListener("mouseover",(e) => {
    //     console.log(e)
    // })
    // // If use pass 4 params then it's means
    // // x and y for position
    // // and next x and y for size
    // // 720 , 720
    // // for (let index = 0; index < 10; index++) {
        
    // // }
    // let index = 0;
    // // setInterval(() => {

    // //     // if(index % 40 == 0) {
    // //         
    // //     // }
       
    // //      index+=1;
    // // },10)
    // let old_pos = 0
    
    // ctx.drawImage(img,
    //     old_pos + 100, 600,
    //     100, 100
    // );

    // ctx2.drawImage(img,
    //     0, 600,
    //     100, 100
    // );
    
    // ctx.drawImage(c2,0,0)

    // document.getElementById("next").addEventListener("click",() => {
    //     old_pos += 10
    //     ctx.clearRect(0,0,width,height)
    //     ctx.drawImage(img,
    //         old_pos + 100, 600,
    //         100, 100
    //     );
    //     ctx2.clearRect(0,0,width,height)
    //     ctx2.drawImage(img,
    //         old_pos+ 130 , 500,
    //         100, 100
    //     );
    //     ctx.drawImage(c2,0,0)
    // })

    // document.getElementById("up").addEventListener("click",() => {
    //     ctx.clearRect(0,0,width,height)
    //     ctx.drawImage(img,
    //         old_pos + 100, 600 - 40,
    //         100, 100
    //     );
    //     let old_pos_right = old_pos + 100
    //     let jump_up = 560
    //     const jump_inter = setInterval(() => {
    //         old_pos_right+=30
    //         jump_up+=10
    //         if(jump_up >= 600) {
    //             clearInterval(jump_inter)
    //             old_pos = old_pos_right
    //         }
    //         ctx.clearRect(0,0,width,height)
    //         ctx.drawImage(img,
    //             old_pos_right, jump_up,
    //             100, 100
    //         );
    //         ctx2.clearRect(0,0,width,height)
    //         ctx2.drawImage(img,
    //             old_pos_right + 30, jump_up - 100,
    //             100, 100
    //         );
    //         ctx.drawImage(c2,0,0)
    //     },10)
    // })
    // document.getElementById("down").addEventListener("click",() => {
    //     ctx.clearRect(0,0,width,height)
    //     ctx.drawImage(img,
    //         old_pos + 100, 600 - 40,
    //         100, 100
    //     );
    //     let old_pos_right = old_pos + 100
    //     let jump_up = 560
    //     const jump_inter = setInterval(() => {
    //         old_pos_right-=30
    //         jump_up+=10
    //         if(jump_up >= 600) {
    //             clearInterval(jump_inter)
    //             old_pos = old_pos_right
    //         }
    //         ctx.clearRect(0,0,width,height)
    //         ctx.drawImage(img,
    //             old_pos_right, jump_up,
    //             100, 100
    //         );
    //     },10)
    // })

    // ctx.drawImage(img,
        // Where to start pick up crop
    //    50, 50,
    //    650, 650,
      // where to place this block
    //   width/2.5, height/2.5 ,
    //    size of block
    //    100, 100
    // );
    // ctx.drawImage(img,
    //     // Where to start pick up crop
    //    50, 50,
    //    650, 650,
    //   // where to place this block
    //   width/3.5, height/3.5 ,
    // //    size of block
    //    100, 100
    // );
}