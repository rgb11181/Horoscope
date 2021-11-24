const message1 = ['by this time tomorrow, ', 'by the end of next week, ', 'by the end of next month, ', 'by the end of the year, ']
const message2 = ['you ', 'your best friend ', 'your mum ', 'your dad ']
const message3 = ['will receive a promotion.', 'will buy a new car.', 'will win the lottery.']

const randomSelector = (array) => {
    return (Math.floor(Math.random() * array.length))
}

const firstMessage = randomSelector(message1)
const secondMessage = randomSelector(message2)
const thirdMessage = randomSelector(message3)

function horoscopeGenerator() {
    document.write("Hi, I'm Harry. Your horoscope says " + message1[firstMessage] + message2[secondMessage] + message3[thirdMessage])
};



//const button = document.getElementByID("Click me");

//button.onclick = horoscopeGenerator()



