const requestURL = `https://byui-cit230.github.io/weather/data/towndata.json`;

fetch(requestURL)
    .then((response) => response.json())
    .then((events) => {

        //console.log(events.towns[0].events);

        //enter array number for correct page
        let townName = document.getElementsByClassName('active')[0].textContent;
        let x;
        if (townName == 'Preston') {
            x = 5;
        } else if (townName == 'Soda Springs') {
            x = 6;
        } else {
            x = 1;
        }

        let list = events.towns[x].events;
        //console.log(list);

        //create html elements and set up a loop to create the correct amount of list items
        listContainer = document.createElement('div');
        listElement = document.createElement('ul');
        numberListItems = list.length
        //console.log(numberListItems);
        let i;

        document.querySelector('section.town-events').appendChild(listContainer);
        listContainer.appendChild(listElement);

        for (i = 0; i < numberListItems; ++i) {
            let listItem = document.createElement('li');

            listItem.textContent = list[i];

            listElement.appendChild(listItem);
        }

//Wow. I can't believe that worked.
    });