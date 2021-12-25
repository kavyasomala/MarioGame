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
  '=': [sprite('block')],
  'x': [sprite('brick'), solid()],
  '$': [sprite('coin')],
  '%': [sprite('question'), 'coin-box'],
  '*': [sprite('question'), 'mushroom-box'],

  '}': [sprite('unboxed')],
  '(': [sprite('pipe-left'), scale(0.5)],
  ')': [sprite('pipe-right'), scale(0.5)],
  '-': [sprite('pipe-top-left-side'), scale(0.5)],
  '+': [sprite('pipe-top-right-side'), scale(0.5)],
  '^': [sprite('evil-shroom-1')],
  '#': [sprite('mushroom')],
}

addLevel(map, levelCfg)

add([
  sprite('mario-standing'), 
  pos(30, 100),
  body()
  ])