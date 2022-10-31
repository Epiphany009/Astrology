function generateRandomNumber (num) {
    return Math.floor(Math.random() * num)
}

const astroInsight = {
    sign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    Fact: ['in love With being first', 'soft and bespoke', 'Spontaneous', 'Intuitive', 'Dramatic', 'Logical and Practical', 'Careful and succint', 'Elusive and Mysterious', 'On a constant Quest for Knowledge', 'Concious of Time', 'Innovative and progressive', 'Psychic'],
    verdict: ['Tone Down EXpectations', 'Tone down The Enthusiasm', 'Be Careful!', 'Losen up Sometimes', 'Be a little rationale', 'not be scared to make a mistake, cant be so fatal', 'know You only live once', 'not be overtly too mysterious', 'not let the incessant quest for knowledge ruin you', 'Live a little', 'change the world', 'know you have an advantage cos Knowing what someone does next and predicting the future is not so bad']

}

let Astro = []

for (let prop in astroInsight) {
    let numRegen = generateRandomNumber(astroInsight[prop].length)

    switch(prop) {
        case 'sign':
            Astro.push(`Your Zodiac sign could be "${astroInsight[prop][numRegen]}".`)
        break
            case 'Fact':
                Astro.push(`You are "${astroInsight[prop][numRegen]}".`)
                break
                case 'verdict':
                    Astro.push(`You should: "${astroInsight[prop][numRegen]}".`)
                    break
                    default:
                    astroInsight.push('There is enough info.')
    
    }
}

function formatAstro(insight) {
    const formatted = Astro.join('\n')
    console.log(formatted)
} 

formatAstro(astroInsight);