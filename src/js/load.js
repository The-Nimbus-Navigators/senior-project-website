/**
 * All documents should have paths similar to those below:
 * Time sheets: 'assets/pdfs/time-example.pdf',
 * Team Documents: 'assets/pdfs/doc-example.pdf'
 */
const PDF_FILES = [
    //Time
    'assets/pdfs/time-temp.pdf',
    //Docs
    'assets/pdfs/doc-temp.pdf',
];

/**
 * Grabs pdfs on page load and makes hyperlinks to them
 */
function loadPDFs() {
    const timeContainer = document.getElementById('time-container');
    const docContainer = document.getElementById('doc-container');
    PDF_FILES.forEach(pdf => {
        const link = document.createElement('a');
        const fileNameType = pdf.split('/').pop().split(".")[0].split("-"); // name
        link.href = pdf; // Use relative path to the PDF file
        link.target = '_blank'; // Open in new tab
        link.textContent = fileNameType[1];
        if(fileNameType[0] == "time"){
            timeContainer.appendChild(link);
        } else if (fileNameType[0] == "doc"){
            docContainer.appendChild(link);
        } else {
            docContainer.appendChild(link);
        }
    });
}
// Call function on page load
window.onload = loadPDFs;