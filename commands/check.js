module.exports = {
    name: 'check',
    description: 'This is the command for checking the price of the JenStock',
    execute(message, args){
        
        message.channel.send('The price is $69');

    }
}