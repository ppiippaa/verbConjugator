const tenseBox = document.querySelector('.tense');
const personBox = document.querySelector('.person');
const verbBox = document.querySelector('.verb');
const resetButton = document.querySelector('.reset-game');

// 9 tenses
const tenses =  [
        'présent',
        'imparfait',
        'passé composé',
        'futur simple',
        'futur proche',
        'conditionnel',
        'plus-que-parfait',
        'participe passé',
        'futur antérieur'
]

// 6 people
const person = [
    'je',
    'tu',
    'il/elle/on',
    'nous',
    'vous',
    'ils/elles'
]

// 47 verbs
const verbs = [
    'être',
    'avoir',
    'aller',
    'pouvoir',
    'vouloir',
    'faire',
    'parler',
    'demander',
    'savoir',
    'venir',
    'dire',
    'donner',
    'trouver',
    'manger',
    'boire',
    'mettre',
    'rester',
    'comprendre',
    'sortir',
    'quitter',
    'prendre',
    'voir',
    'regarder',
    'penser',
    'croire',
    'commencer',
    'terminer',
    'entendre',
    'décider',
    'arriver',
    'habiter',
    'vivre',
    'jouer',
    'choisir',
    'aimer',
    'expliquer',
    'lire',
    'essayer',
    'empêcher',
    'travailler',
    'apprendre',
    'entrer',
    'chercher',
    'utiliser',
    'apporter',
    'se léver',
    'se coucher'
]

resetButton.onclick = function() {
    console.log(verbs.length);
}

resetButton.onclick = function() {
    // Select Random tense, person and verb
    let randomTense = tenses[Math.floor(Math.random() * 9)];
    let randomPerson = person[Math.floor(Math.random() * 6)];
    let randomVerb = verbs[Math.floor(Math.random() * 47)];

    // Set innerHTML of the corresponding box
    tenseBox.innerHTML = randomTense;
    personBox.innerHTML = randomPerson;
    verbBox.innerHTML = randomVerb;
}

