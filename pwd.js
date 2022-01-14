
module.exports = function () {
  process.stdin.on('data', () => {
    let pwd = process.cwd();
    process.stdout.write(pwd);
});
};
