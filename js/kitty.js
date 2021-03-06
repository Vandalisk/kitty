"use strict"
/* ============================ Model ============================ */
var model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Larry',
            imgSrc: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'
        },
        {
            clickCount: 0,
            name: 'Jonny',
            imgSrc: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
        },
        {
            clickCount: 0,
            name: 'Alexander',
            imgSrc: 'data:image/jpeg;base64,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'
        },
        {
            clickCount: 0,
            name: 'Vivaldi',
            imgSrc: 'data:image/jpeg;base64,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'
        }
    ]
}
/* ============================ Octopus ============================ */
var octopus = {
    init: function(){
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
    },
    getCats: function(){
        return model.cats;
    },
    getCurrentCat: function(){
        return model.currentCat;
    },
    setCurrentCat: function(cat){
        model.currentCat = cat;
    },
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
}
/* ============================ Views ============================ */
var catView = {
    init: function(){
        this.catInfo = document.getElementById('cat-info');
        this.catName = document.getElementById('cat-name');
        this.catCounter = document.getElementById('cat-counter');
        this.catImage = document.getElementById('cat-image');

        this.catImage.addEventListener("click", function(){
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function(){
        var cat = octopus.getCurrentCat();
        this.catName.textContent = cat.name;
        this.catCounter.textContent = cat.clickCount;
        this.catImage.src = cat.imgSrc;
    }
}

var catListView = {
    init: function(){
        this.catsList = document.getElementById('cats-list')
        this.render();
    },
    render: function(){
        var cats = octopus.getCats();
        this.catsList.innerHTML = '';

        for (var i = 0, elem, cat; i < cats.length; i++) {
            cat = cats[i];
            elem = document.createElement('li');
            elem.textContent = cat.name;
            elem.className = "cat";

            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            this.catsList.appendChild(elem);
        }
    }
}

octopus.init();
