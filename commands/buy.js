module.exports = {
    name: 'buy',
    description: 'This is the command to buy the JenStock',
    execute(message, args){
        
        message.channel.send('You just bought the JenStock');

    }
}