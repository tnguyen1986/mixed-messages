// message generator

component1 = ['asdasd', 'asdasftg', 'asjdhkasvkje']
component2 = ['SKDJFHHFKLJSDF', 'ASLDHAKJSDHLA', 'ALSKNDLAKSJ']
component3 = ['13895394875693847', '12312r239587', '216918498175']

components = [component1, component2, component3]

function generateMessage(components) {
    string1 = components[0][Math.floor(Math.random() * (components[0].length - 1))]
    string2 = components[1][Math.floor(Math.random() * (components[1].length - 1))]
    string3 = components[2][Math.floor(Math.random() * (components[2].length - 1))]
    message = string1 + ' ' + string2 + ' ' + string3    
    return message
}

console.log(`Your message is: ${generateMessage(components)}`)