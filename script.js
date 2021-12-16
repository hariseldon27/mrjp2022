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
        blocks: [ {
              'uniqueID' : '00',
              'property1' : 'image',
              'text' : 'I love NYC',
              'property2' : 'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib',
        },
        {
            'uniqueID' : '01',
            'property1' : 'image',
            'text' : 'I love nature',
            'property2' : 'https://images.unsplash.com/photo-1620497998642-c89a1a70ebe0',
        },
        {
            'uniqueID' : '02',
            'property1' : 'image',
            'text' : 'go away bad man',
            'property2' : 'https://images.unsplash.com/photo-1529966464641-ccc3988e5e4e',
        },
    ]
}
        

const p = {
        'p0': 'value0',
        'p1': {
          'subDude': 'value1',
        },
        'p2': 'value2',
        'p3': {
          'subDude' : 'value3',
          'subDude2' : 'artbitrary stuff'
        }
    };

const myImages = [
        "http://mrjonathanpotter.com/wp-content/uploads/2019/03/bw-180602-ladp18-perfb-180602-DSCF7837.jpg",
        "http://mrjonathanpotter.com/wp-content/uploads/2019/03/ladp18-perfa-color-180609-ladp18-perfA-180609-DSCF7423.jpg",
        "http://mrjonathanpotter.com/wp-content/uploads/2018/10/HamletMachine-1730107.jpg",
        "http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180805-DSCF4313.jpg",
        "http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180805-DSCF3799.jpg",
        "http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180804-DSCF8684.jpg",
        "http://mrjonathanpotter.com/wp-content/uploads/2018/10/jakroo18-180804-DSCF1840.jpg",
    ]
const itemDetails = myData

function randomPicker(dataset) {
    const randomChoice = dataset[Math.floor(Math.random()*dataset.length)];
    /*console.log(randomChoice);*/
    return(randomChoice);
}

function iterator(itemCount) {
      let count = 0;
        for (const k in itemCount) {
            if (itemCount.hasOwnProperty(k)) {
                 count++;
                 console.log(count);
                 const li = document.createElement('li');
                 li.classList.add(`itembox`);
                 li.id = `item${count}`;
                 document.querySelector('ul#wrapper').append(li);
                 const img = document.createElement('img');
                 document.querySelector('ul#wrapper .itembox').append(img);
                 img.src = randomPicker(myImages);

            }
            else {console.log()}
        }
    }
iterator(itemDetails)




/*
function blockBuilder(dataSet) {
    let count = 0;
    for (const k in dataSet) {
        if (dataSet.hasOwnProperty(k)) {
             count++;
             console.log(count);
             const img = document.createElement('img');
             document.querySelector('ul#wrapper li').append(img);
             img.src = randomPicker(myImages);
        }
        else {console.log("poop");}  
}}
blockBuilder(itemDetails)
*/
