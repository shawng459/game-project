controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 1) {
        jump += 1
    }
    me.vy = -150
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(me.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (me.isHittingTile(CollisionDirection.Right) || me.isHittingTile(CollisionDirection.Left)) {
        me.vy = 0
    }
})
// Code provided by teacher
function spike (enemyList: Image[], lap: number) {
    spawnLocation = tiles.getTilesByType(assets.tile`myTile`)
    for (let index = 0; index < lap * 5; index++) {
        spikeSprite = sprites.create(enemyList._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(spikeSprite, spawnLocation.removeAt(randint(0, spawnLocation.length - 1)))
        spikeList.push(spikeSprite)
    }
}
function right_on_track () {
    tiles.setCurrentTilemap(tilemap`level11`)
    me = sprites.create(assets.image`me`, SpriteKind.Player)
    scene.cameraFollowSprite(me)
    tiles.placeOnRandomTile(me, sprites.dungeon.collectibleInsignia)
    me.ay = 300
    jump = 0
    list = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . 1 . . . . 
        . . . 1 1 1 . . . . 1 1 1 . . . 
        . . 1 7 7 1 1 . . . 1 7 1 1 . . 
        . 1 7 7 7 7 1 1 . 1 7 7 7 1 1 . 
        1 1 7 7 7 7 7 1 1 1 7 7 7 7 1 1 
        1 7 7 7 7 7 7 1 1 7 7 7 7 7 7 1 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 7 1 . . . . . . 
        . . . . . 1 1 7 7 7 1 . . . . . 
        . . . . 1 1 7 7 7 7 1 . . . . . 
        . . . . 1 7 7 7 7 7 7 1 . . . . 
        . . . 1 7 7 7 7 7 7 7 1 1 . . . 
        . . 1 7 7 7 7 7 7 7 7 7 1 . . . 
        . 1 7 7 7 7 7 7 7 7 7 7 7 1 . . 
        1 1 7 7 7 7 7 7 7 7 7 7 7 7 1 . 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 
        `]
    spikeList = []
    lap = 1
    spike(list, 1)
    me.setVelocity(125, 0)
}
function beat_madness () {
    tiles.setCurrentTilemap(tilemap`level`)
    me = sprites.create(assets.image`me`, SpriteKind.Player)
    scene.cameraFollowSprite(me)
    tiles.placeOnRandomTile(me, sprites.dungeon.collectibleInsignia)
    me.ay = 300
    jump = 0
    list = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . 1 . . . . 
        . . . 1 1 1 . . . . 1 1 1 . . . 
        . . 1 2 2 1 1 . . . 1 2 1 1 . . 
        . 1 2 2 2 2 1 1 . 1 2 2 2 1 1 . 
        1 1 2 2 2 2 2 1 1 1 2 2 2 2 1 1 
        1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 2 1 . . . . . . 
        . . . . . 1 1 2 2 2 1 . . . . . 
        . . . . 1 1 2 2 2 2 1 . . . . . 
        . . . . 1 2 2 2 2 2 2 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 1 1 . . . 
        . . 1 2 2 2 2 2 2 2 2 2 1 . . . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 1 . . 
        1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        `]
    spikeList = []
    lap = 1
    spike(list, 1)
    me.setVelocity(125, 0)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.placeOnRandomTile(me, sprites.dungeon.collectibleInsignia)
    spike(list, 1)
    lap += 1
})
function dried_out () {
    tiles.setCurrentTilemap(tilemap`level5`)
    me = sprites.create(assets.image`me`, SpriteKind.Player)
    scene.cameraFollowSprite(me)
    tiles.placeOnRandomTile(me, sprites.dungeon.collectibleInsignia)
    me.ay = 300
    jump = 0
    list = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . 1 . . . . 
        . . . 1 1 1 . . . . 1 1 1 . . . 
        . . 1 a a 1 1 . . . 1 a 1 1 . . 
        . 1 a a a a 1 1 . 1 a a a 1 1 . 
        1 1 a a a a a 1 1 1 a a a a 1 1 
        1 a a a a a a 1 1 a a a a a a 1 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 a 1 . . . . . . 
        . . . . . 1 1 a a a 1 . . . . . 
        . . . . 1 1 a a a a 1 . . . . . 
        . . . . 1 a a a a a a 1 . . . . 
        . . . 1 a a a a a a a 1 1 . . . 
        . . 1 a a a a a a a a a 1 . . . 
        . 1 a a a a a a a a a a a 1 . . 
        1 1 a a a a a a a a a a a a 1 . 
        1 a a a a a a a a a a a a a a 1 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 a a a a a a a a a a a a a a 1 
        1 a a a a a a a a a a a a a a 1 
        1 a a a a a a a a a a a a a a 1 
        1 a a a a a a a a a a a a a a 1 
        1 a a a a a a a a a a a a a a 1 
        `]
    spikeList = []
    lap = 1
    spike(list, 1)
    me.setVelocity(125, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setGameOverEffect(true, effects.smiles)
    game.setGameOverMessage(true, "GAME OVER!")
    game.gameOver(true)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
let lap = 0
let list: Image[] = []
let spikeList: Sprite[] = []
let spikeSprite: Sprite = null
let spawnLocation: tiles.Location[] = []
let me: Sprite = null
let jump = 0
info.setScore(0)
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("beat madness"),
miniMenu.createMenuItem("right on track"),
miniMenu.createMenuItem("dried out")
)
myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 200)
myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    myMenu.close()
    if (selectedIndex == 0) {
        beat_madness()
    }
    if (selectedIndex == 1) {
        right_on_track()
    }
    if (selectedIndex == 2) {
        dried_out()
    }
})
