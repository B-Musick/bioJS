# Sequence Class

## Variables
```#sequence```: Holds a private genome sequence string 

```#basePairs```: Holds object containing base pairs (G-C, A-T), having all versions of the pairs
```
{
    'A':'T',
    'T':'A',
    'G':'C',
    'C':'G'
}
```
## Methods

### complement()
- Uses for loop to loop through the sequence letters, using the ```#basePairs``` object 
to get the complement of the base and creates a new string with all complemented base pairs
- Returns the complement of the original sequence

```
Input: 'AGCT'
Output: 'TCGA'
```

### reverseComplement()
- First gets the complement of the sequence 
- Then splits string into array --> reverses array --> joins array back to string
```
Input: 'AGCTTTA'
Output: 'TAAAGCT'
```

### transcribe()
- Transcribe the dna sequence to an mRNA strand
- Transcription works from the template strand
- Easier to work from coding strand though so just switch Thymine (T) to Uracil (U)
    - Usually would have to 
        1. ```reverseComplement()```
        2. ```transcribe()```

```
5'  AGCTTA  3'     "coding strand"
    ||||||
3'  TCGAAT  5'     "template strand"
       |
       |           "transcription"
       |
5'  AGCUUA  3'     "mRNA"
```

### backTranscribe()
- If Sequence object is an mRNA and want to get the coding strand, it will 
just replace all U with T

### gc()
- Will get the percentage of the GC bases compared to the whole sequence of base pairs
$$100\% * ((number of G)+(number of C))/total base pairs$$

# FASTA
- Starts with '>'
- ';' means comment
- Blank line after end of sequence
- First line contains the information

# Sources

## Local Files
/Users/bmuze1/Desktop/COMPUTER_DESKTOP_2021_AND_BEFORE/WEB_DEVELOPMENT/PROJECTS/BIOINFORMATICS_JS

## Websites
https://en.wikipedia.org/wiki/FASTA_format 
https://bioperl.org/formats/sequence_formats/FASTA_sequence_format 