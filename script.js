const h2 = document.createElement('h2');
h2.textContent = 'This content added by Javascript';

document.querySelector('body').appendChild(h2);



/* Dataset below!  

I have no idea if this is a good way to do this, but I figured what the heck!

/*tag options!
inspirational
tangential
personal
wild
urban
wisdom
family
*/

/* item template:
item1: {
      type: "image",
      url: "https://picsum.photos/638/",
      altText: "A lovely photo of downtown everywhereville.",
      tag1: "inspirational",
      tag2: "tangential"
    },
    item2: {
        type: "poster",
        text: "This is a poster block - whatcha think?",
        background: "0f4c81",
        orientation: "portrait",
        tag1: "wild",
        tag2: "wisdom"
      },
    item3: {
        type: "youtube",
        embed: "https://www.youtube.com/embed/tnXw9SFhDJk",
        tag1: "family",
        tag2: "personal"
      },


    */

  /*function to iterate through the dataset and create a div based on "item" type*/



/*for each item in the dataset create a new div and fill it with the item type.
*/
/*
function itemGetter(dataset) {
    const itemsHolder = []
    for (let i=0; i < dataset.length; i++) {
        let itemEach = dataset[i];
        itemsHolder.push(itemEach)
        console.log(itemEach);
        return(itemEach);
    }
    console.log(itemsHolder);
    return(itemsHolder);
}
itemGetter(["item1", "item2", "item3", "item4"])

const itemNum = items.uniqueID;

for (const key in itemNum) {
    if (typeof items.itemNum[key] === "object") {
        for (const nestedKey in items.itemNum[key]) {
            console.log(itemNum[key][nestedKey]);
        }
    } else {
        console.log(items[key]);
    }
}

    console.log(`${key}: ${items[key]}`);
    console.log(typeof items);
    }
    */

    
    /*document.querySelector('li').append(div);*/
/*
    function injectDiv(dataset) {
        for (const key in dataset) {
          if (dataset.hasOwnProperty(key)){
            document.querySelector('ul').append(li);
          }
        }
      }
    
    */

/*
      let counter = 0;

function deepIterator (target) {

    if (typeof target === 'object') {
        for (const key in target) {
            deepIterator(target[key]);
          }
        } else {
          console.log(target);
        }
      }
      deepIterator(p)
      */

const myData = {
        blocks: [ 
            {
              'uniqueID' : '00',
              'property1' : 'image',
              'text' : 'I love NYC',
              'url' : 'http://mrjonathanpotter.com/wp-content/uploads/2018/10/HamletMachine-1730107.jpg',
        },
        {
            'uniqueID' : '01',
            'property1' : 'image',
            'text' : 'I love nature',
            'url' : 'http://mrjonathanpotter.com/wp-content/uploads/2019/03/ladp18-perfa-color-180609-ladp18-perfA-180609-DSCF7423.jpg',
        },
        {
            'uniqueID' : '02',
            'property1' : 'image',
            'text' : 'go away bad man',
            'url' : 'http://mrjonathanpotter.com/wp-content/uploads/2019/03/bw-180602-ladp18-perfb-180602-DSCF7837.jpg"',
        },
        {
            'uniqueID' : '03',
            'property1' : 'image',
            'text' : 'I love NYC',
            'url' : 'http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180804-DSCF8684.jpg',
      },
      {
          'uniqueID' : '04',
          'property1' : 'image',
          'text' : 'I love nature',
          'url' : 'http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180805-DSCF3799.jpg',
      },
      {
          'uniqueID' : '05',
          'property1' : 'image',
          'text' : 'go away bad man',
          'url' : 'http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180805-DSCF4313.jpg',
      },
      {
        'uniqueID' : '03',
        'property1' : 'image',
        'text' : 'I love NYC',
        'url' : 'http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180804-DSCF8684.jpg',
  },
  {
      'uniqueID' : '04',
      'property1' : 'image',
      'text' : 'I love nature',
      'url' : 'http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180805-DSCF3799.jpg',
  },
  {
      'uniqueID' : '05',
      'property1' : 'image',
      'text' : 'go away bad man',
      'url' : 'http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180804-DSCF1840.jpg',
  },
    ]
}
        

function randomPicker(dataset) {
    const randomChoice = dataset[Math.floor(Math.random()*dataset.length)];
    /*console.log(randomChoice);*/
    return(randomChoice);
}

let count = 0;

function blockBuilder() {
    for (let i=0; i < myData.blocks.length; i++) {
        count++;
        console.log(count);
        function textInjector() {
            const text = myData.blocks[i].text;
            document.querySelector(`li#item${count} > .itemText`).innerHTML = text;
            }
        const dataImage = myData.blocks[i].url;
        function imageInject() {
            const img = document.createElement('img');
            document.querySelector(`ul#wrapper li#item${count}`).append(img);
            img.src = dataImage;
        }
        function boxMaker () {
            const li = document.createElement('li');
            li.classList.add(`itembox`);
            li.id = `item${count}`;
            document.querySelector('ul#wrapper').prepend(li);
        }
        function peeMaker() {
            const p = document.createElement('p');
            p.classList.add(`itemText`);
            document.querySelector(`ul#wrapper li#item${count}`).append(p);    
        }
        boxMaker ();
        imageInject();
        peeMaker();
        textInjector();   
    }
}
blockBuilder();

