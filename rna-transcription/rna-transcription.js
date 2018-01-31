var DnaTranscriber = function () {

}

DnaTranscriber.prototype.mapping = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
}

DnaTranscriber.prototype.toRna = function (sequence) {
  answer = sequence.split('').map( entry => {
    transform = this.mapping[entry]
    if (transform) {
      return transform
    } else {
      throw new Error('Invalid input');
    }
  }); 

  return answer.join('');
}

module.exports = DnaTranscriber;
