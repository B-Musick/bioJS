class Sequence {
    #sequence;
    #basePairs;

    get sequence() {
        return this.#sequence;
    }

    set sequence(genomeSequence) {
        this.#sequence = genomeSequence;
    }

    constructor(genomeSequence) {
        this.#sequence = genomeSequence;
        this.#basePairs = {
            'A':'T',
            'T':'A',
            'G':'C',
            'C':'G'
        }
    }

    /*****************
     * complement()
     * 
     * Get complement of the sequence. Complement is the attached base pair
     * associated.
     ****************/
    complement() {
        let complement = [];

        for (let i = 0; i < this.#sequence.length; i++) {
            // Loop through sequence replacing base with their partner
            complement[i] = this.#basePairs[this.sequence[i]];
        }

        return complement.join('');
    }

    /*****************
     * reverseComplement()
     * 
     * Get complement of the sequence. Complement is the attached base pair
     * associated.
     ****************/
    reverseComplement(){
        // Split into array --> reverse array --> join string back
        return this.complement().split('').reverse().join('');
    }

    gc(){
        /**
         * 100 * float(my_seq.count("G") + my_seq.count("C")) / len(my_seq)
         * Get the percentage of GC out of the whole sequence
         */
        let gCount = parseFloat((this.sequence.match(/g/gi) || []).length);
        let cCount = parseFloat((this.sequence.match(/c/gi) || []).length);
        console.log(gCount+" c count: "+cCount);
        return 100.0*(gCount+cCount)/this.sequence.length;
    }
    
    transcribe(){
        // Since working with coding strand, just need to switch T to U
        return this.#sequence.replaceAll('T','U');
    }

    backTranscribe(){
        // Go from the mRNA to the coding strand, replace U with T
        return this.#sequence.replaceAll('U', 'T');
    }

    count(subSequence){
        /**
         * Take in subsequence and return count of how many times it appears
         */
    }

    translate(){
        /**
         * TODO: Implement translation
         */
    }
}
