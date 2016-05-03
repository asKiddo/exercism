/*
Transcription (DNA -> RNA):
* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`
*/


var DnaTranscriber = function() {
    this.dna_map = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };
    
    this.rna_map = {
        C: 'G',
        G: 'C',
        A: 'T',
        U: 'A'
    };
};

DnaTranscriber.prototype.transcribe = function(original, nuc_map) {
    return original.map(function(nucleotide) {
        return nuc_map[nucleotide];
    }).join('');
};

DnaTranscriber.prototype.toRna = function(dna) {
    return this.transcribe(dna.split(''),this.dna_map);
};

DnaTranscriber.prototype.toDna = function(rna) {
    return this.transcribe(rna.split(''),this.rna_map);
};


module.exports = DnaTranscriber;