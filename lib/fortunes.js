const fortunes = [
    "conquer your fears or they conquer you.",
    "Rivers need springs.",
    "Do not fear what don't know.",
    "you will have a pleasant surprise.",
    "whenever possible, keep it simple.",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}
