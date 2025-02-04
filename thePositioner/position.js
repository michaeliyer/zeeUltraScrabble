// import { wordList } from "../wordList.js"; // Ensure correct import

// // Debugging check
// let a = "Johnny Cockit";
// console.log(a);
// console.log("Is position.js running?");

// // Ensure DOM is loaded before execution
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOM Loaded!"); // Debugging

//     const body = document.body;
//     const container = document.createElement("div");
//     container.id = "positionerContainer";

//     // Get input fields
//     const inputFields = document.querySelectorAll(".letter-input");

//     // Attach event listeners to each input
//     inputFields.forEach(input => {
//         input.addEventListener("input", filterWords);
//     });

//     console.log("Event listeners added to inputs:", inputFields.length);

//     // Ensure wordResults exists
//     let resultsDiv = document.getElementById("wordResults");
//     if (!resultsDiv) {
//         resultsDiv = document.createElement("div");
//         resultsDiv.id = "wordResults";
//         container.appendChild(resultsDiv);
//     }

//     // Ensure stats exists
//     let statsDiv = document.getElementById("stats");
//     if (!statsDiv) {
//         statsDiv = document.createElement("div");
//         statsDiv.id = "stats";
//         container.appendChild(statsDiv);
//     }

//     // Append container to the body
//     body.appendChild(container);
// });

// // Function to filter words based on input
// function filterWords() {
//     console.log("filterWords() is running!"); // Debugging

//     // Check if wordList is loaded
//     console.log("Word list loaded:", wordList); 

//     const inputs = document.querySelectorAll(".letter-input");
//     const enteredLetters = Array.from(inputs).map(input => input.value.toLowerCase());

//     console.log("Entered letters:", enteredLetters); // Debugging

//     const filteredWords = wordList.filter(word => {
//         if (word.length !== 5) return false; // Ensure word is 5 letters

//         // Check each letter in the correct position OR allow blanks
//         return enteredLetters.every((letter, index) => {
//             return letter === "" || word[index].toLowerCase() === letter; // Ensure case insensitivity
//         });
//     });

//     console.log("Filtered words:", filteredWords); // Debugging
//     displayResults(filteredWords, enteredLetters);
// }

// // Function to display filtered words & highlight letters
// function displayResults(filteredWords, enteredLetters) {
//     const resultsDiv = document.getElementById("wordResults");
//     const statsDiv = document.getElementById("stats");
//     resultsDiv.innerHTML = ""; // Clear previous results
//     statsDiv.innerHTML = ""; // Clear stats

//     if (filteredWords.length === 0) {
//         resultsDiv.innerHTML = "<p>No words found</p>";
//         return;
//     }

//     // Display words with highlights
//     filteredWords.forEach(word => {
//         const wordElement = document.createElement("p");
//         wordElement.innerHTML = word
//             .split("")
//             .map((char, i) => enteredLetters[i] ? `<span class="highlight">${char}</span>` : char)
//             .join("");
//         resultsDiv.appendChild(wordElement);
//     });

//     // Compute letter frequency
//     const letterCounts = {};
//     enteredLetters.forEach(letter => {
//         if (letter) {
//             letterCounts[letter] = letterCounts[letter] ? letterCounts[letter] + 1 : 1;
//         }
//     });

//     // Display stats
//     Object.entries(letterCounts).forEach(([letter, count]) => {
//         const percent = ((count / filteredWords.length) * 100).toFixed(2);
//         statsDiv.innerHTML += `<p>${letter.toUpperCase()}: ${count} times (${percent}%)</p>`;
//     });
// }

import { wordList } from "../wordList.js"; // Ensure correct import

// Debugging check
console.log("Is position.js running?");
console.log("Word list loaded:", wordList);

// Ensure DOM is loaded before execution
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded!"); // Debugging

    const inputFields = document.querySelectorAll(".letter-input");

    // Attach event listeners to each input
    inputFields.forEach(input => {
        input.addEventListener("input", filterWords);
    });

    console.log("Event listeners added to inputs:", inputFields.length);
});

// Function to filter words based on input
function filterWords() {
    console.log("filterWords() is running!"); // Debugging

    const inputs = document.querySelectorAll(".letter-input");
    const enteredLetters = Array.from(inputs).map(input => input.value.toLowerCase());

    console.log("Entered letters:", enteredLetters); // Debugging

    const filteredWords = wordList.filter(word => {
        if (word.length !== 5) return false; // Ensure word is 5 letters

        // Only check non-empty letters
        return enteredLetters.every((letter, index) => {
            return letter === "" || word[index].toLowerCase() === letter; // Ensure case insensitivity
        });
    });

    console.log("Filtered words:", filteredWords); // Debugging
    displayResults(filteredWords, enteredLetters);
}

// Function to display filtered words & highlight letters
// function displayResults(filteredWords, enteredLetters) {
//     const resultsDiv = document.getElementById("wordResults");
//     const statsDiv = document.getElementById("stats");

//     if (!resultsDiv) {
//         console.error("Error: #wordResults div is missing from position.html");
//         return;
//     }

//     if (!statsDiv) {
//         console.error("Error: #stats div is missing from position.html");
//         return;
//     }

//     resultsDiv.innerHTML = ""; // Clear previous results
//     statsDiv.innerHTML = ""; // Clear stats

//     if (filteredWords.length === 0) {
//         resultsDiv.innerHTML = "<p>No words found</p>";
//         return;
//     }

//     // Format words into a single paragraph, comma-separated
//     const wordsParagraph = document.createElement("p");
//     wordsParagraph.innerHTML = filteredWords
//         .map(word =>
//             word
//                 .split("")
//                 .map((char, i) => enteredLetters[i] ? `<span class="highlight">${char}</span>` : char)
//                 .join("")
//         )
//         .join(", "); // Joins words with comma + space
//     resultsDiv.appendChild(wordsParagraph);

//     // Compute letter frequency
//     const letterCounts = {};
//     enteredLetters.forEach(letter => {
//         if (letter) {
//             letterCounts[letter] = letterCounts[letter] ? letterCounts[letter] + 1 : 1;
//         }
//     });

//     // Display stats only if `statsDiv` exists
//     if (statsDiv) {
//         Object.entries(letterCounts).forEach(([letter, count]) => {
//             const percent = ((count / filteredWords.length) * 100).toFixed(2);
//             statsDiv.innerHTML += `<p>${letter.toUpperCase()}: ${count} times (${percent}%)</p>`;
//         });
//     }
// }
function displayResults(filteredWords, enteredLetters) {
    const resultsDiv = document.getElementById("wordResults");
    const statsDiv = document.getElementById("stats");

    if (!resultsDiv) {
        console.error("Error: #wordResults div is missing from position.html");
        return;
    }

    if (!statsDiv) {
        console.error("Error: #stats div is missing from position.html");
        return;
    }

    resultsDiv.innerHTML = ""; // Clear previous results
    statsDiv.innerHTML = ""; // Clear stats

    // Display word count at the top of stats
    const wordCountParagraph = document.createElement("p");
    wordCountParagraph.innerHTML = `<strong>Matching Words:</strong> ${filteredWords.length}`;
    statsDiv.appendChild(wordCountParagraph); // Add to stats section

    if (filteredWords.length === 0) {
        resultsDiv.innerHTML = "<p>No words found</p>";
        return;
    }

    // Format words into a single paragraph, comma-separated
    const wordsParagraph = document.createElement("p");
    wordsParagraph.innerHTML = filteredWords
        .map(word =>
            word
                .split("")
                .map((char, i) => enteredLetters[i] ? `<span class="highlight">${char}</span>` : char)
                .join("")
        )
        .join(", "); // Joins words with comma + space
    resultsDiv.appendChild(wordsParagraph);

    // Compute letter frequency
    const letterCounts = {};
    enteredLetters.forEach(letter => {
        if (letter) {
            letterCounts[letter] = letterCounts[letter] ? letterCounts[letter] + 1 : 1;
        }
    });

    // Display stats only if `statsDiv` exists
    Object.entries(letterCounts).forEach(([letter, count]) => {
        const percent = ((count / filteredWords.length) * 100).toFixed(2);
        statsDiv.innerHTML += `<p>${letter.toUpperCase()}: ${count} times (${percent}%)</p>`;
    });
}