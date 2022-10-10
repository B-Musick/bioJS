class Record {
    constructor(thisID, thisSequence) {
        this.id = thisID;
        this.sequence = thisSequence;
    }

    set id(thisID){
        this.id = thisID;
    }

    set sequence(thisSequence){
        this.sequence = thisSequence;
    }
}