// fs.readdir(path[, options], callback)


// module.exports = function () {
//   process.stdin.on('data', () => {
//     let ls = fs.readdir();
//     process.stdout.write(ls);
// });
// };


fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err
  } else {
    process.stdout.write(files.join('\n'))
    process.stdout.write("prompt > ")
  }
})
