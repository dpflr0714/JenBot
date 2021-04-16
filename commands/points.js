module.exports = {
    name: 'points',
    description: 'This is the points command to see how many points a person has',
    execute(message, args){
        
        message.channel.send('You have this many points');

    }
}