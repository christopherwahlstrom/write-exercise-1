// Övning 1

// var fs = require('fs')

// fs.writeFile('alicequotes.txt', "Why, sometimes I've believed as many as six impossible things before breakfast.", function (err, file) {
//     if (err) throw err;
//     console.log('Text updated');
// });

// Övning 2

// var fs = require('fs');

// fs.readFile('alicequotes.txt', 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// Övning 3

// const fs = require('fs');

// fs.readFile('style.css', 'utf-8', (error,content) => {
//     if (content) {
//         const arr = content.split('#');
//         console.log('Antal id:',arr.length -1);
//     }
// });

// Övning 4

// const fs = require('fs');
// const readline = require('readline-sync');

// const filename = readline.question('Ange ett filnamn \n'); 
// const text = readline.question('vad ska stå i filen? \n');

// while (!filename || !text)  {
//     filename = readline.question('Ange ett filnamn \n');
//     text = readline.question('vad ska stå i filen? \n');
// } 


// fs.writeFile(`${filename}.txt`, text, (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Filen skapades');
//     }
// });


// Övning 5

const fs = require('fs');

fs.readFile('insults.json', 'utf-8', (error, content) => {
    if (content) {
        console.log(typeof content); // Kolla vilken datatyp en variabel är
        const insultsObj = JSON.parse(content);
        console.log(typeof insultsObj);
        for (const insult of insultsObj.insults) {
            console.log('------------');
            console.log(`Förolämpning: ${insult.insult}`);
            console.log(`Pjäs: ${insult.play}`);
            console.log('------------');
        }
        console.log('Antal förolämpningar:', insultsObj.insults.length);
    } 
});
        







