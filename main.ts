scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true, effects.splatter)
})
tiles.setTilemap(tilemap`level1`)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.follow()
myCorg.updateSprite()
myCorg.verticalMovement()
myCorg.horizontalMovement()
