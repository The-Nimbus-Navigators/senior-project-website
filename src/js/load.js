/**
 * All documents should have paths similar to those below:
 * Time sheets: 'assets/timesheets/time-example.xlsx',
 * Team Documents: 'assets/deliverables/doc-example.pdf'
 */
const DELIVERABLE_FILES = [
    //Docs
    'assets/deliverables/doc-4UP_Week3.pdf',
    'assets/deliverables/doc-4UP_Week4.pdf',
];

const TIME_FILES = [
    //Time
    'assets/timesheets/time-SP_TimeSheet_Phil.xlsx',
    'assets/timesheets/time-SP_TimeSheet_Laxmi.xlsx',
    'assets/timesheets/time-SP_TimeSheet_Ethan.xlsx',
    'assets/timesheets/time-SP_TimeSheet_Dylan.xlsx',
    'assets/timesheets/time-SP_TimeSheet_Connor.xlsx',
];

const FILES = [
    DELIVERABLE_FILES,
    TIME_FILES,
]

/**
 * Grabs documents on page load and makes hyperlinks to them
 */
function loadFiles() {
    const timeContainer = document.getElementById('time-container');
    const docContainer = document.getElementById('doc-container');
    FILES.forEach(type => {
        type.forEach(file => {
            const link = document.createElement('a');
            const fileNameType = file.split('/').pop().split(".")[0].split("-"); // name
            link.href = file; // Use relative path to file
            link.target = '_blank'; // Open in new tab
            link.textContent = fileNameType[1];
            if(fileNameType[0] == "time"){
                timeContainer.appendChild(link);
            } else if (fileNameType[0] == "doc"){
                docContainer.appendChild(link);
            } else {
                docContainer.appendChild(link);
            }
        })
    });
}
// Call function on page load
window.onload = loadFiles;