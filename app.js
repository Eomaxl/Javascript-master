const selector = (val) => document.querySelector(val);
    // Create Dino Constructor
    function Dino(species,weight,height,diet,where,when,fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    // Create Dino Objects
    const dinoJSON = require('./dino.json');
    const dinoData = JSON.parse(dinoJSON);
    const accessDinoObj = dinoData.Dinos;
    const Triceratops = new Dino (accessDinoObj[0].species, 
        accessDinoObj[0].weight, 
        accessDinoObj[0].height, 
        accessDinoObj[0].diet, 
        accessDinoObj[0].where, 
        accessDinoObj[0].when, 
        accessDinoObj[0].fact
    );
    
    const TyrannosaurusRex = new Dino(accessDinoObj[1].species,
        accessDinoObj[1].weight,
        accessDinoObj[1].height,
        accessDinoObj[1].diet,
        accessDinoObj[1].where,
        accessDinoObj[1].when,
        accessDinoObj[1].fact
    );

    const Anklyosaurus = new Dino(accessDinoObj[2].species,
        accessDinoObj[2].weight,
        accessDinoObj[2].height,
        accessDinoObj[2].diet,
        accessDinoObj[2].where,
        accessDinoObj[2].when,
        accessDinoObj[2].fact);

    const Brachiosaurus = new Dino(accessDinoObj[3].species,
        accessDinoObj[3].weight,
        accessDinoObj[3].height,
        accessDinoObj[3].diet,
        accessDinoObj[3].where,
        accessDinoObj[3].when,
        accessDinoObj[3].fact);

    const Stegosaurus = new Dino(accessDinoObj[4].species,
        accessDinoObj[4].weight,
        accessDinoObj[4].height,
        accessDinoObj[4].diet,
        accessDinoObj[4].where,
        accessDinoObj[4].when,
        accessDinoObj[4].fact);

    const Elasmosaurus = new Dino(accessDinoObj[5].species,
        accessDinoObj[5].weight,
        accessDinoObj[5].height,
        accessDinoObj[5].diet,
        accessDinoObj[5].where,
        accessDinoObj[5].when,
        accessDinoObj[5].fact);

    const Pteranodon = new Dino(accessDinoObj[6].species,
        accessDinoObj[6].weight,
        accessDinoObj[6].height,
        accessDinoObj[6].diet,
        accessDinoObj[6].where,
        accessDinoObj[6].when,
        accessDinoObj[6].fact);

    const Pigeon = new Dino(accessDinoObj[7].species,
        accessDinoObj[7].weight,
        accessDinoObj[7].height,
        accessDinoObj[7].diet,
        accessDinoObj[7].where,
        accessDinoObj[7].when,
        accessDinoObj[7].fact);

    // Create Human Object
    const human = new Object();

    // Use IIFE to get human data from form
    (function getHumanData() {
        human.name = selector('.form-container #name').value;
        human.height.feet = selector('.form-container #feet').value;
        human.height.inch = selector('.form-container #inches').value;
        human.weight = selector('.form-container #weight').value;
        human.diet = selector('.form-container #diet').value;
    })();

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen
    const submitBtn = selector('.form-container #btn');
    submitBtn.addEventListener('click',() => {
        const form = selector('form');
        form.style.display = 'none';
    })

// On button click, prepare and display infographic
