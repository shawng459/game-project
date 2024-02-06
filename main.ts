controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 1) {
        jump += 1
        me.vy = -100
    }
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
    spawnLocation = tiles.getTilesByType(sprites.builtin.forestTiles10)
    for (let index = 0; index < lap * 3; index++) {
        spikeSprite = sprites.create(enemyList._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(spikeSprite, spawnLocation.removeAt(randint(0, spawnLocation.length - 1)))
        spikeList.push(spikeSprite)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.placeOnRandomTile(me, sprites.dungeon.collectibleInsignia)
    spike(list, 1)
    lap += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setGameOverEffect(true, effects.smiles)
    game.setGameOverMessage(true, "GAME OVER!")
    game.gameOver(true)
})
let spikeSprite: Sprite = null
let spawnLocation: tiles.Location[] = []
let spikeList: Sprite[] = []
let list: Image[] = []
let jump = 0
let me: Sprite = null
me = sprites.create(assets.image`me`, SpriteKind.Player)
scene.cameraFollowSprite(me)
me.setVelocity(game.askForNumber("Set speed."), 100)
tiles.setCurrentTilemap(tilemap`level`)
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
let lap = 1
spike(list, 1)
