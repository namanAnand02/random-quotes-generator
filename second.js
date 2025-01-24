const quotesArr = [
    "Time heals all great wounds.",
    "Hard work pays off eventually.",
    "Love conquers all but fear.",
    "Wisdom comes with age always.",
    "Success favors those who try.",
    "Courage begins with a decision.",
    "Kindness spreads joy and peace.",
    "Integrity defines a strong character.",
    "Dream big, achieve even bigger.",
    "Patience leads to great rewards.",
    "Knowledge grows when shared freely.",
    "Friendship blossoms with shared moments.",
    "Small steps lead to greatness.",
    "Hope shines brightest in darkness.",
    "Faith can move big mountains.",
    "Laughter is the best medicine.",
    "Mistakes teach lessons worth remembering.",
    "True strength lies within yourself.",
    "Gratitude opens doors to blessings.",
    "Determination paves the road ahead."
]



function randomQuoteGenerate(){
    const quoteElement = document.getElementById("quote-id")

    const index = Math.floor(Math.random()*quotesArr.length)

    quoteElement.innerHTML = quotesArr[index]

}

setInterval(randomQuoteGenerate, 5000)