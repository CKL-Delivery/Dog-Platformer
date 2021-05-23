controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    myCorg.bark()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true, effects.bubbles)
})
let myCorg: Corgio = null
tiles.setTilemap(tilemap`level1`)
myCorg = corgio.create(SpriteKind.Player)
myCorg.bark()
myCorg.follow()
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.horizontalMovement()
