
    const selector = (val) => document.querySelector(val);

    // Create Dino Constructors
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
    
    // Create Human Object
    const human = new Object();

    // Use IIFE to get human data from form
    selector('.form-container #btn').addEventListener('click',() => {
        (function getHumanData() {
            human.name = selector('#name').value;
            human.feet = selector('#feet').value;
            human.inch = selector('#inches').value;
            human.weight = selector('#weight').value;
            human.diet = selector('#diet').value;
        })();
    })

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
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

    // Add tiles to DOM

    // Remove form from screen
    selector('.form-container #btn').addEventListener('click',() => {
        selector('form').style.display = 'none';
        // selector('#grid').setAttribute("class","display:grid; grid-template-columns: auto auto auto;")
        dinos.forEach(ele => generateTileForDinos(ele));
    })

// On button click, prepare and display infographic
