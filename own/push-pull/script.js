// Global default variables

let pushOn = true;
let pullLegsOn = true;
let pullOn = false;
let legsOn = false;

let bodyweightOn = true;
let dumbellsOn = true;
let barbellOn = false;
let gymOn = false;

let setsNum = 3;

// Input buttons

const inputBtns = document.querySelectorAll('.input-btns')

// Split buttons

const splitBtns = document.querySelectorAll('.split-btns');     // Split buttons
const pushBtn = document.getElementById('push-btn');
const pullBtn = document.getElementById('pull-btn');
const legsBtn = document.getElementById('legs-split-btn');
const pullLegsBtn = document.getElementById('pull+legs-btn');

pushBtn.classList.add('input-btns-select');    // Default input selection
pullLegsBtn.classList.add('input-btns-select');

splitBtns.forEach(btn => btn.addEventListener('click', selectSplit));       // Split event listeners
splitBtns.forEach(btn => btn.addEventListener('click', showSplits));

function selectSplit(e) {
    
    if (e.target.id == 'push-btn' && pushOn == false) {     // Turns button on

        e.target.classList.add('input-btns-select');
        pushOn = true;

    } else if (e.target.id == 'push-btn' && pushOn == true) {     // Turns button off

        e.target.classList.remove('input-btns-select');
        pushOn = false;
    }

    if (e.target.id == 'pull-btn' && pullOn == false) {     // Turns button on

        e.target.classList.add('input-btns-select');
        pullLegsBtn.classList.remove('input-btns-select');

        pullOn = true;
        pullLegsOn = false;

    } else if (e.target.id == 'pull-btn' && pullOn == true) {     // Turns button off

        e.target.classList.remove('input-btns-select');

        pullOn = false;
    }

    if (e.target.id == 'legs-split-btn' && legsOn == false) {     // Turns button on

        e.target.classList.add('input-btns-select');
        pullLegsBtn.classList.remove('input-btns-select');

        legsOn = true;
        pullLegsOn = false;

    } else if (e.target.id == 'legs-split-btn' && legsOn == true) {     // Turns button off

        e.target.classList.remove('input-btns-select');

        legsOn = false;
    }

    if (e.target.id == 'pull+legs-btn' && pullLegsOn == false) {     // Turns button on

        e.target.classList.add('input-btns-select');
        pullBtn.classList.remove('input-btns-select');
        legsBtn.classList.remove('input-btns-select');

        pullLegsOn = true;
        pullOn = false;
        legsOn = false;

    } else if (e.target.id == 'pull+legs-btn' && pullLegsOn == true) {     // Turns button off

        e.target.classList.remove('input-btns-select');

        pullLegsOn = false;
    }
};

const pushCont = document.getElementById('push-cont');      // Split cont's
const pullLegsCont = document.getElementById('pullLegs-cont');
const pullCont = document.getElementById('pull-cont');
const legsCont = document.getElementById('legsMain-cont');

pullCont.style.display = 'none';
legsCont.style.display = 'none';

function showSplits() {

    if (pushOn) {

        pushCont.style.display = 'flex';

    } else {

        pushCont.style.display = 'none';

    }

    if (pullLegsOn) {

        pullLegsCont.style.display = 'flex';

    } else {

        pullLegsCont.style.display = 'none';
        
    }

    if (pullOn) {

        pullCont.style.display = 'flex';

    } else {

        pullCont.style.display = 'none';
        
    }

    if (legsOn) {

        legsCont.style.display = 'flex';

    } else {

        legsCont.style.display = 'none';
        
    }

    if (pushOn && pullOn && legsOn) {

        const width = pushCont.offsetWidth;

        legsCont.style.gridColumn = '1 / 3';
        legsCont.style.width = `50%`;

    } else {

        legsCont.style.gridColumn = '';
    }
}

// Equiptment buttons

const equipBtns = document.querySelectorAll('.equip-btns');
const bodyBtn = document.getElementById('body-btn');
const dumbBtn = document.getElementById('dumb-btn');
const barBtn = document.getElementById('bar-btn');
const gymBtn = document.getElementById('gym-btn');

bodyBtn.classList.add('input-btns-select');     // Default input selection
dumbBtn.classList.add('input-btns-select');

equipBtns.forEach(btn =>
    btn.addEventListener('click', e => {

        if (e.target.id == 'body-btn' && bodyweightOn == false) {     // Turns button on

            e.target.classList.add('input-btns-select');
            bodyweightOn = true;

        } else if (e.target.id == 'body-btn' && bodyweightOn == true) {       // Turns button off

            e.target.classList.remove('input-btns-select');
            bodyweightOn = false;
        }

        if (e.target.id == 'dumb-btn' && dumbellsOn == false) {     // Turns button on

            e.target.classList.add('input-btns-select');
            dumbellsOn = true;

        } else if (e.target.id == 'dumb-btn' && dumbellsOn == true) {       // Turns button off

            e.target.classList.remove('input-btns-select');
            dumbellsOn = false;
        }

        if (e.target.id == 'bar-btn' && barbellOn == false) {     // Turns button on

            e.target.classList.add('input-btns-select')
            barbellOn = true;

        } else if (e.target.id == 'bar-btn' && barbellOn == true) {       // Turns button off

            e.target.classList.remove('input-btns-select');
            barbellOn = false;
        }

        if (e.target.id == 'gym-btn' && gymOn == false) {     // Turns button on

            e.target.classList.add('input-btns-select')
            gymOn = true;

        } else if (e.target.id == 'gym-btn' && gymOn == true) {       // Turns button off

            e.target.classList.remove('input-btns-select');
            gymOn = false;
        }
    })
);

// Sets buttons

const setsBtns = document.querySelectorAll('.sets-btns');
const threeSets = document.getElementById('3sets-btn');
const fourSets = document.getElementById('4sets-btn');
const fiveSets = document.getElementById('5sets-btn');
const sixSets = document.getElementById('6sets-btn');

threeSets.classList.add('input-btns-select');       // Default input selection

setsBtns.forEach(btn =>
    btn.addEventListener('click', e => {

        if (e.target.id == '3sets-btn' && setsNum !== 3) {     // Turns button on

            const otherBtns = [fourSets, fiveSets, sixSets]
            otherBtns.forEach(btn => btn.classList.remove('input-btns-select'));

            e.target.classList.add('input-btns-select');
            setsNum = 3;

        } else if (e.target.id == '4sets-btn' && setsNum !== 4) {       // Turns button off

            const otherBtns = [threeSets, fiveSets, sixSets]
            otherBtns.forEach(btn => btn.classList.remove('input-btns-select'));

            e.target.classList.add('input-btns-select');
            setsNum = 4;

        } else if (e.target.id == '5sets-btn' && setsNum !== 5) {       // Turns button off

            const otherBtns = [threeSets, fourSets, sixSets]
            otherBtns.forEach(btn => btn.classList.remove('input-btns-select'));

            e.target.classList.add('input-btns-select');
            setsNum = 5;

        } else if (e.target.id == '6sets-btn' && setsNum !== 6) {       // Turns button off

            const otherBtns = [threeSets, fiveSets, fiveSets]
            otherBtns.forEach(btn => btn.classList.remove('input-btns-select'));

            e.target.classList.add('input-btns-select');
            setsNum = 6;
        }
    })
);

// Excercies arrays

const chest = [
    'Flat dumbell press', 
    'Incline dumbell press', 
    'Flat dumbell fly', 
    'Incline dumbell fly'
    ]

const triceps = [
    'Pulldowns', 
    'Tricep dips', 
    'Skullcrushers',
    'Overhead Dumbell Extension',
    'Tricep Kickbacks'
    ]

const shoulders = [
    'Shoulder Press',
    'Lateral Raises',
    'Arnold Press',
    'Lateral Raise (Pause)',
    'Front Raise',
    ]

const back = [
    'Shoulder Shrug',
    'Single Dumbell Row',
    'Bent Over Rows',
    'Lateral Pull Downs',
    'Pull Ups'
    ]

const biceps = [
    'Concentration Curls',
    'Hammer Curls',
    'Incline Dumbell Curls',
    'Prone Curls',
    'Preacher Curls'
    ]
        
const legs = [
    'Squat',
    'Calf Raises',
    'Lunges',
    'Split Squat',
    'Wall sit'
    ]

const excercises = [chest, triceps, shoulders, back, biceps, legs]

// Random Buttons / Text Elements Events & Functions

const rndmBtns = document.querySelectorAll('.random-btn');      // Each excercise button
const allBtns = document.querySelectorAll('.all-btns');
const pushRndmBtns = document.querySelectorAll('.push-rndm-btn');
const pullLegsRndmBtns = document.querySelectorAll('.pullLegs-rndm-btn');
const pullRndmBtns = document.querySelectorAll('.pull-rndm-btn');
const legsRndmBtns = document.querySelectorAll('.legs-rndm-btn');

rndmBtns.forEach(btn => btn.addEventListener('click', pressRandom));

allBtns.forEach(btn => 
    btn.addEventListener('click', e => {

        if (e.target.id == 'push-all-btn') {

            pushRndmBtns.forEach(btn => btn.click());

        } else if (e.target.id == 'pullLegs-all-btn') {

            pullLegsRndmBtns.forEach(btn => btn.click());

        } else if (e.target.id == 'pull-all-btn') {

            pullRndmBtns.forEach(btn => btn.click());

        } else if (e.target.id == 'legs-all-btn') {

            legsRndmBtns.forEach(btn => btn.click());

        } else if (e.target.id == 'all-btn') {

            rndmBtns.forEach(btn => btn.click());

        }
    })
);

const previousSiblings = (elem) => {        // Points to excercise text div

    let siblings = [];

    while (elem = elem.previousElementSibling) {
        siblings.push(elem);
    }
    return siblings[1];
};

function pressRandom(e) {       // Add visual effect to choosing options (timing delay between options)

    const text = previousSiblings(e.target);

    setTimeout(() => {

        text.innerText = '';
        chooseExc(e);

            setTimeout(() => { 

                text.innerText = '';
            chooseExc(e);

                setTimeout(() => { 

                    text.innerText = '';
                    chooseExc(e);

                    setTimeout(() => { 

                        text.innerText = '';
                        chooseExc(e);

                    }, 200);
                }, 200);
            }, 200);
    }, 200);
};

function chooseExc(e) {     // Find a random property in arrays & assigns it to text element

    const choices = [];
    const text = previousSiblings(e.target);

    for (let i = 0; i < 6; i++) {       // Loops & chooses random choices

        const choice = excercises[i][Math.floor(Math.random() * excercises[i].length)];
        choices.push(choice);
    }

    if (e.target.id == 'chest') {       // Adds text to button clicked

        text.innerText = choices[0];

    } else if (e.target.id == 'triceps') {

        text.innerText = choices[1];

    } else if (e.target.id == 'shoulders') {

        text.innerText = choices[2];

    } else if (e.target.id == 'back') {

        text.innerText = choices[3];

    } else if (e.target.id == 'biceps') {

        text.innerText = choices[4];

    } else if (e.target.id == 'legs') {

        text.innerText = choices[5];

    } else {
        console.log('nope');
    }
};