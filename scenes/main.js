const MOVE_SPEED = 120
const JUMP_FORCE = 400
layers(['obj', 'ui'], 'obj')

const map = [
  '                              ',
  '                              ',
  '                              ',
  '                              ',
  '                              ',
  '                              ',
  '                              ',
  '                              ',
  '                              ',
  '                              ',
  '                              ',
  '                              ',
  '     %   =*=%=                ',
  '                              ',
  '                       -+     ',
  '              ^    ^   ()     ',
  'xxxxxxxxxxxxxxxxxxxxxxxxxx  xx',
]

/*
= --> Ground/Bricks
% --> coin box
* --> mushroom box
^ --> Goombas
() --> Pipe
-+ --> Pipe entrance thingy
$ --> coin

INSERT FLOWER BOX

*/

const levelCfg = {
  width: 20,
  height: 20,
  '=': [sprite('block'), solid()],
  'x': [sprite('brick'), solid()],
  '$': [sprite('coin')],
  '%': [sprite('question'), 'coin-box', solid()],
  '*': [sprite('question'), 'mushroom-box', solid()],

  '}': [sprite('unboxed'), solid()],
  '(': [sprite('pipe-left'), scale(0.5), solid()],
  ')': [sprite('pipe-right'), scale(0.5), solid()],
  '-': [sprite('pipe-top-left-side'), scale(0.5), solid()],
  '+': [sprite('pipe-top-right-side'), scale(0.5), solid()],
  '^': [sprite('evil-shroom-1'), solid()],
  '#': [sprite('mushroom'), body(), 'mushroom'],
}

const gameLevel = addLevel(map, levelCfg)

const scoreLabel = add([
  text('0'),
  pos(30, 6),
  layer('ui'),
  {
    value: '0',
  }
])

add([
  text('level ' + '0'),
  pos(40, 6)
])

const player = add([
  sprite('mario-standing'), 
  pos(30, 100),
  body()
  ])

keyDown('left', () => {
  player.move(-MOVE_SPEED, 0)
})

keyDown('right', () => {
  player.move(MOVE_SPEED, 0)
})

keyPress('up', () => {
  if(player.grounded()){       // Prevents double jumping
    player.jump(JUMP_FORCE)
  }
})

player.on('headbump', (obj) => {
  if(obj.is('coin-box')) {
    gameLevel.spawn('$', obj.gridPos.sub(0, 1)),
    destroy(obj)
    gameLevel.spawn('}', obj.gridPos.sub(0, 0))
  } else if (obj.is('mushroom-box')){
    gameLevel.spawn('#', obj.gridPos.sub(0, 1)),
    destroy(obj)
    gameLevel.spawn('}', obj.gridPos.sub(0, 0))
  }
})

action('mushroom', (m) => {
  m.move(20, 0)
})