function 出题 () {
    第一个数 = randint(0, 99)
    第二个数 = randint(0, 99)
    运算符号 = randint(0, 1)
    算题()
    if (试算结果 > 99 || 试算结果 < 0) {
        出题是否成功 = 0
    } else {
        出题是否成功 = 1
    }
}
function 回答 () {
    回答人.say("" + convertToText(回答结果) + "！")
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    回答结果 = 回答结果 + 1
    if (回答结果 > 99) {
        回答结果 = 回答结果 - 100
    }
    回答()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    回答结果 = 回答结果 - 1
    if (回答结果 < 0) {
        回答结果 = 回答结果 + 100
    }
    回答()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (回答结果 == 试算结果) {
        music.baDing.play()
        info.changeScoreBy(1)
        info.startCountdown(30)
        鸭子出题()
        重置答题()
    } else {
        music.wawawawaa.play()
        info.changeScoreBy(-1)
        info.changeLifeBy(-1)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    回答结果 = 回答结果 + 10
    if (回答结果 > 99) {
        回答结果 = 回答结果 - 100
    }
    回答()
})
function 算题 () {
    if (运算符号 == 0) {
        试算结果 = 第一个数 + 第二个数
    } else {
        试算结果 = 第一个数 - 第二个数
    }
}
function 重置答题 () {
    回答结果 = 50
    回答()
}
function 鸭子出题 () {
    出题是否成功 = 0
    while (出题是否成功 == 0) {
        出题()
    }
    运算符号文本 = ["+", "-"]
    题目 = "" + convertToText(第一个数) + 运算符号文本[运算符号] + convertToText(第二个数) + "=?"
    出题人.say(题目)
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    回答结果 = 回答结果 + 1
    if (回答结果 > 99) {
        回答结果 = 回答结果 - 100
    }
    回答()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    回答结果 = 回答结果 - 10
    if (回答结果 < 0) {
        回答结果 = 回答结果 + 100
    }
    回答()
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    回答结果 = 回答结果 - 1
    if (回答结果 < 0) {
        回答结果 = 回答结果 + 100
    }
    回答()
})
let 题目 = ""
let 运算符号文本: string[] = []
let 回答结果 = 0
let 出题是否成功 = 0
let 试算结果 = 0
let 运算符号 = 0
let 第二个数 = 0
let 第一个数 = 0
let 回答人: Sprite = null
let 出题人: Sprite = null
出题人 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
出题人.setPosition(73, 41)
回答人 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
回答人.setPosition(80, 102)
info.setLife(3)
info.startCountdown(30)
info.setScore(0)
重置答题()
鸭子出题()
