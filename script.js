/*const h2 = document.createElement('h2');
h2.textContent = 'This content added by Javascript';

document.querySelector('body').appendChild(h2);
*/


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

let count = 0;
const fileStore = 'https://mrjpfiles.s3.us-west-2.amazonaws.com/'
const myData = {
        blocks: [ 
            {
                'uniqueID' : `${count}`,
                'type' : 'image',
                'url' : `california1-color-vert-23.jpg`,
        },
            {
                'uniqueID' : '01',
                'type' : 'image',
                'text' : '',
                'url' : `california3-bw-sq.jpg`,
        },
            {
                'uniqueID' : '02',
                'type' : 'image',
                'text' : ' ',
                'url' : `california12-color-horiz-23.jpg`,
        },
            {
                'uniqueID' : '03',
                'type' : 'poster',
                'text' : 'Hi!',
                'color' : '#e78b90',
        },
            {
                'uniqueID' : '04',
                'type' : 'image',
                'text' : '',
                'url' : `jonathan-potter-tintype-072317_jpotter_pdx.jpg`,
        },
            {
                'uniqueID' : '05',
                'type' : 'poster',
                'text' : 'My name is Jonathan Potter.',
                'color' : '#0f4c81',
                'fontcolor' : '#FFF',
        },
        {
                'uniqueID' : '06',
                'type' : 'image',
                'text' : '',
                'url' : 'stilllife-bw-horiz-67.jpg',
        },
            {
                'uniqueID' : '07',
                'type' : 'image',
                'text' : '',
                'url' : `jonathan-potter-self-working1.jpg`,
        },
        {
                'uniqueID' : '08',
                'type' : 'poster',
                'text' : 'I am a photographer and filmmaker.',
                'subtext' : '(and software developer in training)',
                'color' : '#E8E6A2',
            },
        {
                'uniqueID' : '09',
                'type' : 'image',
                'text' : '',
                'url' : `california9-color-horiz-23.jpg`,
        },
            {
                'uniqueID' : '10',
                'type' : 'image',
                'text' : 'I am from Oregon',
                'url' : `california14-color-horiz-23.jpg`,
                'subtext' : '',
                'customtag' : 'oregon',
                'fontcolor' : '#FFF',
                'fontsize' : '6rem',
        },
        {
            'type' : 'image',
            'text' : '',
            'url' : 'cyanotype1-StillLife1.jpg',
         },
            {
                'type' : 'image',
                'text' : '',
                'url' : `california15-color-horiz-23.jpg`,
            },
            {
                'type' : 'image',
                'text' : '',
                'url' : `california16-color-horiz-23.jpg`,
            },
            {
                'uniqueID' : '12',
                'type' : 'image',
                'text' : '',
                'url' : `california11-color-horiz-23.jpg`,
            },
            {
                'uniqueID' : '14',
                'type' : 'image',
                'text' : 'but I have a deep love for California',
                'url' : `california7-bw-horiz-23.jpg`,
                'customtag' : 'california',
                'fontcolor' : '#e78b90'
                },
            {
                'uniqueID' : '11',
                'type' : 'image',
                'text' : '',
                'url' : `california4-color-sq.jpg`,
        },
            {
               'uniqueID' : '08',
                'type' : 'poster',
                'text' : 'I lived in the bay area for five years.',
                'subtext' : '~I went to graduate school there~',
                'color' : '#e78b90',
                'fontcolor' : ''
        },
        {
            'type' : 'image',
            'text' : '',
            'url' : 'california19-color-horiz-43.jpg',
         },
         {
             'type' : 'poster',
             'text' : 'I met my wife there->',
             'subtext' : '',
             'color' : '#0f4c81',
             'fontcolor' : '#fff'
     },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'etc1-color-horiz-nyc.jpg',
                'fontcolor' : '#fff',
                'subtext' : 'this photo credit: jonathan devich',
             },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'california5-bw-horiz-23.jpg',
             },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'california2-bw-sq.jpg',
                'customtag' : 'california',
             },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'california18-color-horiz-23.jpg',
                'customtag' : 'california',
             },
            {
                'type' : 'image',
                'text' : 'but in 2016 we moved to Los Angeles',
                'url' : 'california20-color-horiz-43-friends.jpg',
                'customtag' : 'california',
                'color' : '#0f4c81',
                'fontcolor' : '#fff',
             },
            {
                'type' : 'image',
                'text' : 'this will be a production photo',
                'url' : '',
                'customtag' : 'california',
             },

    ]
}
        

function randomPicker(dataset) {
    const randomChoice = dataset[Math.floor(Math.random()*dataset.length)];
    /*console.log(randomChoice);*/
    return(randomChoice);
}


let blockCounter = 0;

//below is our block builder - it injects all the data from the dataset above into the ul on the page...

function blockBuilder() {
    for (let i=0; i < myData.blocks.length; i++) {
        count++;
        console.log(count);
        const typer = myData.blocks[i].type;
        const dataImage = fileStore + myData.blocks[i].url;
        const posterColor = myData.blocks[i].color;
        const text = myData.blocks[i].text;
        const subText = myData.blocks[i].subtext;
        const fontColor = myData.blocks[i].fontcolor;
        const fontSize = myData.blocks[i].fontsize;
        const countingData = myData.blocks[i]
        
        function boxMaker () {
            const li = document.createElement('li');
            li.classList.add(`itembox`, `${typer}`);
            li.id = `item${count}`;
            document.querySelector('ul#wrapper').append(li);
        }
        function peeMaker() {
            if (countingData.hasOwnProperty('text')) {
                const p = document.createElement('p');
                p.classList.add(`itemText`);
                document.querySelector(`ul#wrapper li#item${count}`).append(p);
                textInjector(text);
        }
            if (countingData.hasOwnProperty('subtext')) {
                    const p = document.createElement('p');
                    p.classList.add(`subtext`);
                    document.querySelector(`ul#wrapper li#item${count}`).append(p);
                    document.querySelector(`li#item${count} > .subtext`).innerHTML = subText;
                }
            }
        function textInjector(dataSource) {
            document.querySelector(`li#item${count} > .itemText`).innerHTML = dataSource;
            }
        function imageInject() {
            const img = document.createElement('img');
            document.querySelector(`ul#wrapper li#item${count}`).append(img);
            img.src = dataImage;
        }
        function backgroundMaker() {
            if (typer === `image`) { 
                imageInject();}
            else if (typer === `poster`) {
                document.querySelector(`li#item${count}.poster`).style.backgroundColor = `${posterColor}`;
            }
        }
        function styleAdd() {
            if (countingData.hasOwnProperty('fontcolor')) {
                document.querySelector(`li#item${count} p.itemText`).style.color = `${fontColor}`;
            }
            if (countingData.hasOwnProperty('fontsize')) {
                document.querySelector(`li#item${count} p.itemText`).style.fontSize = `${fontSize}`;
            }
        }
        function tagAdd() {
            customTag = countingData.customtag;
            if (countingData.hasOwnProperty('customtag')) {
                document.querySelector(`li#item${count}`).classList.add(`${customTag}`)
            }
        }
        boxMaker();
        peeMaker();
        backgroundMaker();
        styleAdd();
        tagAdd();

       
        console.log(`datatype is: ${typer}`);
        console.log(`color input is: ${posterColor}`);
        console.log(`text input is: ${text}`);
        console.log(`subtext input is: ${subText}`);
        console.log(`fontcolor input is: ${fontColor}`);
        console.log(`the custom tag input is: ${customTag}`);
        //debugger;
    }
}
blockBuilder();

//We need to add an empty li element to the end to help with stretch
const li = document.createElement('li');
document.querySelector('ul#wrapper').append(li);
