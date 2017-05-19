'use strict';

const checkboxes = document.querySelectorAll('input[type=checkbox]');
let activeCheckboxes = [];
let kitBaseCount = 0;
let kitAdvancedCount = 0;

let kitBaseCountEl = document.querySelector('.kit__base-count');
let kitAdvancedEl = document.querySelector('.kit__advanced');
let kitAdvancedCountEl = document.querySelector('.kit__advanced-count');
let kitPluralizeEl = document.querySelector('.kit__pluralize');

checkboxes.forEach( ( checkbox ) => {
    let cb = checkbox;
    let checked = 0;
    let results = document.querySelector('.results');

    cb.addEventListener('click', (event) => {
        let id = event.target.id;
        let lights = document.querySelector('.lights__' + id);
        let sectionNumber = event.target.getAttribute('data-id');

        lights.classList.toggle('hide');

        checked = document.querySelectorAll('input[type="checkbox"]:checked').length;

        if( event.target.checked ) {
            activeCheckboxes.push(id);

            // 1 und 2
            if( activeCheckboxes.indexOf('footwell-front') !== -1 && activeCheckboxes.indexOf('footwell-back') !== -1 ) {
                console.log('1 und 2 => Du benötigst 1 Basis-Kit und 1 Erweiterungs-Kit');
                kitAdvancedEl.classList.remove('hide');
                kitPluralizeEl.classList.add('hide');
                kitBaseCount = 1;
                kitAdvancedCount = 1;
                kitBaseCountEl.innerHTML = kitBaseCount;
            }

            // 1 und 3 || 2 und 3
            if( activeCheckboxes.indexOf('trunk') !== -1 && activeCheckboxes.indexOf('footwell-front') !== -1 || 
                activeCheckboxes.indexOf('footwell-back') !== -1 && activeCheckboxes.indexOf('trunk') !== -1) {
                kitAdvancedCount = 2;
                kitBaseCountEl.innerHTML = "2";
                kitPluralizeEl.classList.remove('hide');
                console.log('1 und 3 => Du benötigst 2 Basis-Kits');
            }

            // 1 & 3
            if( activeCheckboxes.indexOf('footwell-front') !== -1 && activeCheckboxes.indexOf('footwell-back') === -1 && activeCheckboxes.indexOf('trunk') !== -1) {
                kitAdvancedCount = 1;
                kitAdvancedEl.classList.add('hide');
            }

        } else {
            activeCheckboxes.splice(id, 1);
            if(activeCheckboxes.length === 0) {
                kitAdvancedCount = 2;
                kitBaseCount = 1;
                results.classList.add('hide');
                kitPluralizeEl.classList.add('hide');
                kitAdvancedEl.classList.add('hide');
            }

            if(activeCheckboxes.length === 1) {
                kitAdvancedCount = 1;
                results.classList.add('hide');
                kitPluralizeEl.classList.add('hide');
                kitAdvancedEl.classList.add('hide');
                kitBaseCountEl.innerHTML = 1;
            }
        }

        if(checked > 0) {
            results.classList.remove('hide');
        }

        if(checked = 0) {
            results.classList.add('hide');
        }

    }, false);
} );
