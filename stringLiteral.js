// String Literal

const firstName = "Yagnesh";
const lastName = "Modh";

const fullName = firstName + " " + lastName;

console.log(fullName);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

const title = "Learn React";

// const html = "<!DOCTYPE html>" +
// '\n<html lang="en">' +
// '\n<head>' +
//     '\n\t<meta charset="UTF-8">' +
//     '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
//     '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
//     '\n\t<title>' + title + '</title>' +
// '\n</head>' +
// '\n<body>' +
//     '\n' +
// '\n</body>' +
// '\n</html>';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    
</body>
</html>`;

console.log(html);
