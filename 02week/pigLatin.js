'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let piggy = word.toLowerCase().trim();

  if (piggy[0]==='a'||piggy[0]==='e'||piggy[0]==='i'||piggy[0]==='o'||piggy[0]==='u'){
    return (piggy +"yay");
  };

  if (piggy[1]==='a'||piggy[1]==='e'||piggy[1]==='i'||piggy[1]==='o'||piggy[1]==='u'){
    let firstHalf = piggy.substring(0,1);
    let secondHalf = piggy.substring(1);
    return (secondHalf+firstHalf+"ay");
  };

  if (piggy[2]==='a'||piggy[2]==='e'||piggy[2]==='i'||piggy[2]==='o'||piggy[2]==='u'){
    let firstHalf = piggy.substring(0,2);
    let secondHalf = piggy.substring(2);
    return (secondHalf+firstHalf+"ay");
  };

  if (piggy[3]==='a'||piggy[3]==='e'||piggy[3]==='i'||piggy[3]==='o'||piggy[3]==='u'){
    let firstHalf = piggy.substring(0,3);
    let secondHalf = piggy.substring(3);
    return (secondHalf+firstHalf+"ay");
  };

  if (piggy[4]==='a'||piggy[4]==='e'||piggy[4]==='i'||piggy[4]==='o'||piggy[4]==='u'){
    let firstHalf = piggy.substring(0,4);
    let secondHalf = piggy.substring(4);
    return (secondHalf+firstHalf+"ay");
  };

  if (piggy[5]==='a'||piggy[5]==='e'||piggy[5]==='i'||piggy[5]==='o'||piggy[5]==='u'){
    let firstHalf = piggy.substring(0,5);
    let secondHalf = piggy.substring(5);
    return (secondHalf+firstHalf+"ay");
  };

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
