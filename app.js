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

    const getDinoData = async () => {
        const JSONdata = await fetch('dino.json');
        const data = await JSONdata.json();
        return data.Dinos;
    }

    const dinos = [];

    window.onload = async function() {
        const dinoArray = await getDinoData();
        dinoArray.forEach(element => {
            const dino = new DinoConstructor(element.species,
                element.weight,
                element.height,element.diet, element.where,element.when,
                element.fact);
            dinos.push(dino);
        });
    }
    
    const human = new Object();

    selector('.form-container #btn').addEventListener('click',() => {
        (function getHumanData() {
            human.fact  = selector('#name').value;
            human.feet = selector('#feet').value;
            human.inch = selector('#inches').value;
            human.weight = selector('#weight').value;
            human.diet = selector('#diet').value;
            human.species = 'human';
        })();
    })

     /** @param {[Dino]} dinos 
     * @returns {[Dino]} dinos
    */
    const compareHeight = (dinos) =>{
        dinos.forEach( dino => {
            const humanHeight = parseInt(human.feet * 12) + parseInt(human.inch);
            if(dino.species !== "Pigeon") {
                if(dino.height === humanHeight) {
                    dino.fact = `${dino.species} has same height as of ${human.fact}`;
                } else if(dino.height > humanHeight) {
                    dino.fact = `${dino.species} is taller than ${human.fact}`;
                } else if(dino.height < humanHeight) {
                    dino.fact = `${dino.species} is  smaller than ${human.fact}`;
                }
            }
        })
        return dinos; 
    }
    
     /** @param {[Dino]} dinos 
     * @returns {[Dino]} dinos
    */
    const compareWeight = (dinos) => {
        dinos.forEach( dino => {
            const humanWeight = parseInt(human.weight);
            if(dino.species !== "Pigeon") {
                if(dino.weight === humanWeight) {
                    dino.fact = `${dino.species} has same weight as of ${human.fact}`;
                } else if(dino.weight > humanWeight) {
                    dino.fact = `${dino.species} is heavier than ${human.fact}`;
                } else if(dino.weight < humanWeight) {
                    dino.fact = `${dino.species} is  lighter than ${human.fact}`;
                }
            }
        })
        return dinos; 
    }
    
    /** @param {[Dino]} dinos 
     * @returns {[Dino]} dinos
    */
    const compareDiet = (dinos) => {
        dinos.forEach( dino => {
            if(dino.species !== "Pigeon" && dino.species !== human.species) {
                if(dino.diet === human.diet) {
                    console.log("Inside herbavor");
                    dino.fact = `${dino.species} has same diet as of ${human.fact}`;
                } else if(dino.diet === human.diet) {
                    console.log("Inside omnivor");
                    dino.fact = `${dino.species} has same diet as of ${human.fact}`;
                } else if(dino.diet === human.diet) {
                    console.log("Inside carnivor");
                    dino.fact = `${dino.species} has same diet as of ${human.fact}`;
                }
            }
        })
        return dinos; 
    }

    selector('.form-container #btn').addEventListener('click', () => {
        selector('#grid').style.display = "block";
    })

    const generateTileForDinos = obj => {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const img = document.createElement("img");

        const tile = selector('main');
        tile.append(div);
        div.append(h3);
        div.append(img);
        div.append(p);
        h3.innerHTML = obj.species;
        p.innerHTML = obj.fact;
        img.setAttribute("src", `./images/${obj.species.toLowerCase()}.png`)
        div.setAttribute("class","grid-item");
    }

    selector('.form-container #btn').addEventListener('click',() => {
        selector('form').style.display = 'none';
        dinos.splice(4,0,human);
        const randomNum = Math.floor(Math.random() * 2) + 0;
        const compare = [compareHeight(dinos), compareWeight(dinos), compareDiet(dinos)];
        const newDinosArr = compare[randomNum];
        newDinosArr.forEach(ele => generateTileForDinos(ele));
    })
