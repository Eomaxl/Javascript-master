/* Generic function to select dom element using querySelector*/
const selector = (val) => document.querySelector(val);

/** @param {string} species
 * @param {number} weight  
 * @param {number} height
 * @param {string} diet
 * @param {string} where
 * @param {string} when
 * @param {string} fact
 **/
function DinoConstructor(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

/* Fetch the data from the json file. */
const getDinoData = async () => {
    const JSONdata = await fetch(`dino.json`);
    const data = await JSONdata.json();
    return data.Dinos;
}

const dinos = [];

/* Read the dino json file and create the dino objects using the constructor. */
window.onload = async function() {
    const dinoArray = await getDinoData();
    /***@param {Dino} obj */
    dinoArray.forEach( (obj) => {
        const dino = new DinoConstructor(obj.species, obj.weight, obj.height, obj.diet, obj.where, obj.when, obj.fact);
        dinos.push(dino);
    });
}

const human = new Object();

/* Function that would read the value from the form using click event. */
selector(`.form-container #btn`).addEventListener(`click`, () => {
    (function getHumanData() {
        human.fact  = selector(`#name`).value;
        human.feet = selector(`#feet`).value;
        human.inch = selector(`#inches`).value;
        human.weight = selector(`#weight`).value;
        human.diet = selector(`#diet`).value;
        human.species = `human`;
    })();
});

/* Function to compare the height prototyped to the dinosaur object. */
DinoConstructor.prototype.compareHeight = function() {
    const height = parseInt(human.feet)*12 + parseInt(human.inch);
    if( this.species !== `Pigeon`) {
            if( height < this.height) {
                return `${this.species} is taller than ${human.fact}`;
            } else if (height > this.height) {
                return `${this.species} is smaller than ${human.fact}`;
            } else {
                return `${this.species} has the same height as of ${human.fact}`;
            }            
    }
    else {
        return this.fact;
    }      
}

/* Function to compare the weight prototyped to the dinosaur object.*/
DinoConstructor.prototype.compareWeight = function() {
    const humanWeight = parseInt(human.weight);
        if( this.species !== `Pigeon`) {
        if (humanWeight < this.weight + 20 && humanWeight > this.weight - 20){
            return `Close match! They average ${this.weight} pounds. But you probably wouldn't want to wrestle.`;
        } else if (humanWeight >= this.weight + 20){
            const weightDifference = Number.parseFloat(humanWeight / this.weight).toPrecision(2);
            return `You're ${weightDifference} times larger than the ${this.species}. Still not a great pet idea.`;
        } else {
            const weightDifference = Number.parseFloat(this.weight/human.weight).toPrecision(2);
            return `The ${this.species} is ${weightDifference} times larger than you. Don't get in the way.`;
        }
    } 
    else {
        return this.fact;
    }
}

/* Function to compare the diet prototyped to the dinosaur object.*/
DinoConstructor.prototype.compareDiet = function(){
    if (this.species !== `Pigeon`) {
        if (this.diet === human.diet) {
            return `${this.species} has the same diet as of ${human.fact}`;
        } else if (this.diet === `carnivor`) {
            return `${this.species} is carivor`;
        } else {
            return `${this.species} is herbavor`;
        }
    } else {
        return this.fact;
    }
}


selector(`.form-container #btn`).addEventListener(`click`, () => {
    selector(`#grid`).style.display = `block`;
});

/* Generates the dino tiles. */
const generateTileForDinos = obj => {
    const div = document.createElement(`div`);
    const h3 = document.createElement(`h3`);
    const p = document.createElement(`p`);
    const img = document.createElement(`img`);
    const tile = selector(`main`);
    tile.append(div);
    div.append(h3);
    div.append(img);
    div.append(p);
    if (obj.species === `human`){
        h3.innerHTML = obj.fact;
        p.innerHTML = `There are 7.5 billion people in this world.`;
    } else {
        h3.innerHTML = obj.species;
        p.innerHTML = ( () => {
            let result = ``;
            const rand = Math.floor(Math.random() * 7);
    
            switch (rand) {
                case 1:
                    result = obj.compareWeight();
                    break;
                case 2:
                    result = obj.compareDiet();
                    break;
                case 3:
                    result = obj.compareHeight();
                    break;
                default:
                    result = obj.fact;
                    break;
            }
            return result;
        })();
    } 
    img.setAttribute(`src`, `./images/${obj.species.toLowerCase()}.png`)
    div.setAttribute(`class`,`grid-item`);
}

/* Click event upon submitting the form. */
selector(`.form-container #btn`).addEventListener(`click`,() => {
    selector(`form`).style.display = `none`;
    dinos.splice(4,0,human);
    dinos.forEach(ele => generateTileForDinos(ele));
});
