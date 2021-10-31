var ball, background_img, player_1, player_2, player_3, player_4, player_5, scoreboard, goal1, goal2, gk
var ball_img, player_1_img, player_2_img, player_3_img, player_4_img, player_5_img, scoreboard_img, gk_img
var bg, sb, score = 0
var player1Active = false, player2Active = false, player3Active = false, player4Active = false, player5Active = false

function preload() {
    background_img = loadImage("./assets/bg.jpeg")
    ball_img = loadImage("./assets/ball.png")
    scoreboard_img = loadImage("./assets/sb.png")
    player_1_img = loadImage("./assets/p1.png")
    player_2_img = loadImage("./assets/p2.png")
    player_3_img = loadImage("./assets/p3.png")
    player_4_img = loadImage("./assets/p4.png")
    player_5_img = loadImage("./assets/p5.png")
    gk_img = loadImage("./assets/gk.png")
}

function setup() {
    createCanvas(1200, 500)


    bg = createSprite(width / 2, height / 2)
    bg.addImage(background_img)
    bg.scale = 0.15

    ball = createSprite(width / 2, height / 2 - 50)
    ball.addImage(ball_img)
    ball.scale = 0.15

    scoreboard = createSprite(width / 2, 50, 30, 50)
    scoreboard.addImage(scoreboard_img)
    scoreboard.scale = 0.35

    player_1 = createSprite(width / 2 - 50, height / 2, 30, 50)
    player_1.addImage(player_1_img)
    player_1.scale = 0.15

    player_2 = createSprite(width / 2 - 50, height / 2 - 100, 30, 50)
    player_2.addImage(player_2_img)
    player_2.scale = 0.15

    player_3 = createSprite(width / 2 - 180, height / 2 - 70, 30, 50)
    player_3.addImage(player_3_img)
    player_3.scale = 0.2

    player_4 = createSprite(width / 2 - 320, height / 2, 30, 50)
    player_4.addImage(player_4_img)
    player_4.scale = 0.2

    player_5 = createSprite(width / 2 - 320, height / 2 - 110, 30, 50)
    player_5.addImage(player_5_img)
    player_5.scale = 0.15



    goal1 = createSprite(220, height / 2 - 80, 50, 100)
    goal2 = createSprite(width - 220, height / 2 - 80, 50, 100)
    goal1.rotation = 45;
    goal2.rotation = 135;
    goal1.visible = false
    goal2.visible = false

    boundary1 = createSprite(width - 260, height / 2 - 70, 75, 10)

    boundary2 = createSprite(width - 210, height / 2 - 20, 50, 10)



    gk = createSprite(width - 230, height / 2 - 40, 50, 50)
    gk.addImage(gk_img)
    gk.scale = 0.1
    // gk.velocityY = 1
    // gk.velocityX = -0.2




}

function draw() {
    background(0)
    console.log(mouseX + " " + mouseY)
    // console.log(player1Active)
    if (ball.velocityX >= 2) {
        ball.velocityX = ball.velocityX - 0.04
    }


    if (player1Active === true) {
        if (keyIsDown(UP_ARROW) && player_1.y > 100) {
            player_1.y = player_1.y - 10
        }
        if (keyIsDown(DOWN_ARROW) && player_1.y < height - 200) {
            player_1.y = player_1.y + 10
        }
        if (keyIsDown(LEFT_ARROW) && player_1.x > 300) {
            player_1.x = player_1.x - 10
        }
        if (keyIsDown(RIGHT_ARROW) && player_1.x < width - 275) {
            player_1.x = player_1.x + 10
        }

        if (ball.x > 280 && ball.x < width - 160 && ball.y > 140 && ball.y < height - 220)
            ball.bounceOff(player_1)


    }

    if (player2Active === true) {
        if (keyIsDown(UP_ARROW) && player_2.y > 100) {
            player_2.y = player_2.y - 10
        }
        if (keyIsDown(DOWN_ARROW) && player_2.y < height - 200) {
            player_2.y = player_2.y + 10
        }
        if (keyIsDown(LEFT_ARROW) && player_2.x > 300) {
            player_2.x = player_2.x - 10
        }
        if (keyIsDown(RIGHT_ARROW) && player_2.x < width - 275) {
            player_2.x = player_2.x + 10
        }

        ball.bounceOff(player_2)


    }


    if (player3Active === true) {
        if (keyIsDown(UP_ARROW) && player_3.y > 100) {
            player_3.y = player_3.y - 10
        }
        if (keyIsDown(DOWN_ARROW) && player_3.y < height - 200) {
            player_3.y = player_3.y + 10
        }
        if (keyIsDown(LEFT_ARROW) && player_3.x > 300) {
            player_3.x = player_3.x - 10
        }
        if (keyIsDown(RIGHT_ARROW) && player_3.x < width - 275) {
            player_3.x = player_3.x + 10
        }

        ball.bounceOff(player_3)

    }

    if (player4Active === true) {
        if (keyIsDown(UP_ARROW) && player_4.y > 100) {
            player_4.y = player_4.y - 10
        }
        if (keyIsDown(DOWN_ARROW) && player_4.y < height - 200) {
            player_4.y = player_4.y + 10
        }
        if (keyIsDown(LEFT_ARROW) && player_4.x > 300) {
            player_4.x = player_4.x - 10
        }
        if (keyIsDown(RIGHT_ARROW) && player_4.x < width - 275) {
            player_4.x = player_4.x + 10
        }

        ball.bounceOff(player_4)

    }

    if (player5Active === true) {
        if (keyIsDown(UP_ARROW) && player_5.y > 100) {
            player_5.y = player_5.y - 10
        }
        if (keyIsDown(DOWN_ARROW) && player_5.y < height - 200) {
            player_5.y = player_5.y + 10
        }
        if (keyIsDown(LEFT_ARROW) && player_5.x > 300) {
            player_5.x = player_5.x - 10
        }
        if (keyIsDown(RIGHT_ARROW) && player_5.x < width - 275) {
            player_5.x = player_5.x + 10
        }

        ball.bounceOff(player_5)



    }

    gk.bounceOff(boundary1)
    gk.bounceOff(boundary2)
    // if(gk.isTouching(boundary1)){
    // gk.velocityX= gk.velocityX * 1
    // gk.velocityY= gk.velocityY * 1


    // }
    // else if(gk.isTouching(boundary1)){
    // gk.velocityX=gk.velocityX * (-1)
    // gk.velocityY=gk.velocityY * (-1)


    // }


    drawSprites()
    if (ball.isTouching(goal2)) {
        score = score + 1
        ball.x = width / 2
        ball.y = height / 2 - 50


    }

    if (ball.isTouching(gk)) {
        ball.x = width / 2
        ball.y = height / 2 - 50
    }
    fill("red")
    textSize(15)
    strokeWeight(4)
    text(score, width / 2 - 20, 13)


}


function keyPressed() {
    if (keyCode === 49) {
        player1Active = true
        player2Active = false
        player3Active = false
        player4Active = false
        player5Active = false
    }
    if (keyCode === 50) {
        player2Active = true
        player1Active = false
        player3Active = false
        player4Active = false
        player5Active = false
    }
    if (keyCode === 51) {
        player3Active = true
        player1Active = false
        player2Active = false
        player4Active = false
        player5Active = false
    }
    if (keyCode === 52) {
        player4Active = true
        player1Active = false
        player2Active = false
        player3Active = false
        player5Active = false
    }
    if (keyCode === 53) {
        player5Active = true
        player1Active = false
        player2Active = false
        player3Active = false
        player4Active = false
    }

}