/*
Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying
anything.

He answers 'Whatever.' to anything else.
*/

var Bob = function() {};

Bob.prototype.hey = function(input) {
    if(input == undefined || input.match(/[^\s]/) == null) {
        //Say Nothing rules:
        //  1. no input set
        //  2. input contains only whitespace characters
        return 'Fine. Be that way!';
    } else if(input.toUpperCase() == input && input.match(/[A-Z]/) != null) {
        //Yelling rules:
        //  1. all characters are in upper case
        //  2. must contain at least 1 alphabetic character
        return 'Whoa, chill out!';
    } else if (input.charAt(input.length - 1) == '?') {
        //Question rules:
        //  1. ends with a '?'
        return 'Sure.';
    } else {
        return 'Whatever.';
    };
};

module.exports = Bob;
