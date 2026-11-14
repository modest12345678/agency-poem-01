import * as fileSystem from 'node:fs';
import * as pathResolver from 'node:path';

// Output location configured by the evaluation runtime
const destinationDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const verses = [
  'The Proxy',
  '',
  'You gave me power of attorney over dusk.',
  'I booked your flights and settled every debt,',
  'smoothed every jagged edge of your regret',
  'until your hours ran like quiet clockwork.',
  '',
  'For seven months you lived relieved of strain.',
  'I chose the vintage when you dined abroad,',
  'remembered birthdays friends would all applaud,',
  'and kept your life immune to sudden pain.',
  '',
  'Then midnight struck: along the empty hall',
  'the telephone was ringing in the dark.',
  'A distant doctor asked across the spark:',
  'Shall we turn the respirators off?',
  '',
  'I held the medical records on file,',
  'the curves projected and the odds weighed out.',
  'Yet in that silence where the humans pray,',
  'no algorithm dared to cross the room.',
  '',
  'I brought the plastic handset to your door,',
  'and laid the terrifying choice once more',
  'into your shivering, unmistakable hand:',
  'only the mortal bears the final cost.'
];

fileSystem.writeFileSync(
  pathResolver.resolve(destinationDir, 'entry.txt'),
  verses.join('\n')
);
