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
    async function getDinoJSON() {
        let response = await fetch('dino.json')
        let data = await response.json();
        return data;
    }

    async function createDinoObjects() {
       const dinoObj = await getDinoJSON();
       let dinos = dinoObj.Dinos.map( ({species, weight, height, diet, where, when, fact}) => {
            let newObj = { [species] : { species, weight, height, diet, where, when, fact } }
            return newObj;   
       });
       console.log('Dino Objects created are :'+JSON.stringify(dinos));  
    } 
    createDinoObjects();
            
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
        console.log('Human Object :'+JSON.stringify(human))
    })
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen
    selector('.form-container #btn').addEventListener('click',() => {
        selector('form').style.display = 'none';
    })

// On button click, prepare and display infographic
