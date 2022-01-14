process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    // if(data === pwd) {
    //   return  process.cwd()
    // const cmd = data.toString().trim();
    // process.stdout.write('You typed: ' + cmd);
    pwd = process.cwd();
    process.stdout.write(pwd);
    process.stdout.write('\nprompt > ');
});
