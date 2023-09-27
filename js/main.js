let hours;
const bye = () => alert('Bye!');

while (typeof hours !== 'number') {
    let answer = prompt('Hours to Seconds. Hours to convert (Value will be rounded):');

    if (answer === null) {
        bye();
        break;
    } else if (answer.trim().length === 0 || Number.isNaN(+answer)) {
        alert(`You passed <${answer}>. Please pass a Number!`);
    } else {
        hours = Math.round(+answer);
    }
}

if (typeof hours === 'number') {
    const seconds = hours * 3600;
    alert(`Result: ${hours} hours -> ${seconds} seconds`);
    bye();
}
