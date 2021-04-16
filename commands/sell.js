module.exports = {
    name: 'sell',
    description: 'This is the sell command to see how many points a person has',
    execute(message, args){
        
        message.channel.send('You just sold your stock');

    }
}