// GET FILE INPUT
let inputElement = document.getElementById("fileItem"); // File input
let fileInput; // If this has a value then use it
let codeButtons = document.querySelectorAll('.code-button');
let extractedGenomes;

// Method which is called on the class instance to listen for users input 
inputElement.addEventListener("change", (e) => {
    // If user wants to input from file instead of to genomeText input 
    var file = document.getElementById('fileItem').files[0]; // Get the file input

    var reader = new FileReader(); // Read the file
    reader.readAsText(file); // Read the file as text
    
    reader.onload = function () {
        // Reload the page
        fileInput = reader.result;

        extractedGenomes = extractGenomeSequenceObjects(fileInput);
   
        // bioinformatics.listen();
    }
});

let extractGenomeSequenceObjects = (fileInput) =>{
    let extractedFastaObjects = [];

    let genomeIdFullRegex = /^>[a-z].*/;
    // This will match the id value "gi|2765658|emb|Z78533.1|CIZ78533"
    let genomeIdRegex = /[a-z][A-Za-z0-9|.]*[^\s]/;

    let genomeRegex = /^[A-Z]/i;
    let fileArray = fileInput.split('\n');

    // If match the genome ID, then the next lines will be the genome until
    // reach an empty line
    let genomeObject = {}; // Hold the genome object
    let newGenome = false;
    let genomeString = "";

    fileArray.forEach(line => {
        if (!newGenome && genomeIdFullRegex.test(line)) {
            genomeObject = {}; // Create new object
            genomeString = "";

            // If it is the header
            newGenome = true; // New genome object is started
            genomeObject.id = line.match(genomeIdRegex)[0];
        }
        else if (genomeRegex.test(line)) {
            // If it is a genome, then add it to the genome string
            genomeString += line;

        } else if (!line) {
            // If a blank line, then the genome object has been created
            genomeObject.sequence = genomeString;
            let seq = new Sequence(genomeString);
            console.log("Normal: "+seq.sequence);
            console.log("Complement: "+seq.complement());
            console.log("Reverse Complement: "+seq.reverseComplement());
            console.log("Transcribe: "+seq.transcribe());
            // console.log("GC: "+seq.gc());
            newGenome == false;
            extractedFastaObjects.push(genomeObject);
        }
    });
    return extractedFastaObjects;
}


