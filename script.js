let count = 0; /* so, this right here is why I'm sure this isn't working right - this count variable
//is critical for everything - it's like a victorian era factory with all the machines running off a central 
//steam driven axle.  Essentially, this counter is what steps us through the dataset and blockbuilder.
*/

const fileStore = 'https://mrjpfiles.s3.us-west-2.amazonaws.com/' //this is where my lil piccies are stored

/* dataset below - I really really don't think this is a great way of doing this, but 
//I'm experimenting with JS and trying to use some of the stuff I learned in the prework!
*/
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
                'type' : 'image',
                'text' : '',
                'url' : `california6-bw-horiz-23.jpg`,
        },
        {
                'type' : 'image',
                'text' : '',
                'url' : `cyanotype4-TheBuilder.jpg`,
        },
        {
                'type' : 'image',
                'text' : '',
                'url' : `california8-bw--vert-23.jpg`,
        },
        {
                'uniqueID' : '08',
                'type' : 'poster',
                'text' : 'everything here is my work',
                'subtext' : '~unless noted~',
                'color' : '#BAD9E8',
                'fontcolor' : '#E8E6A2',
    },
            {
                'type' : 'image',
                'text' : '',
                'url' : `oregon1-color-horiz.jpg`,
            },
            {
                'uniqueID' : '10',
                'type' : 'image',
                'text' : 'I am from Oregon',
                'url' : `california14-color-horiz-23.jpg`,
                'subtext' : '',
                'customtag' : 'oregon',
                'fontcolor' : '#FFF',
        },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'cyanotype1-StillLife1.jpg',
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
                'type' : 'poster',
                'text' : 'but I have a deep love for California',
                'color' : '#000',
            },
            {
                'uniqueID' : '14',
                'type' : 'image',
                'text' : '',
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
            'url' : 'california27-color-sq.jpg',
         },
        {
            'type' : 'image',
            'text' : '',
            'url' : 'california19-color-horiz-43.jpg',
         },
        {
            'type' : 'image',
            'text' : '',
            'url' : 'california29-color-sq.jpg',
         },
        {
            'type' : 'image',
            'text' : '',
            'url' : 'california33-bw-69.jpg',
         },
         {
             'type' : 'poster',
             'text' : 'I met my wife Alex there->',
             'subtext' : '',
             'color' : '#0f4c81',
             'fontcolor' : '#fff'
     },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'etc1-color-horiz-nyc.jpg',
                'fontcolor' : '#fff',
                'subtext' : '~this photo credit: jonathan devich~',
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
                'type' : 'poster',
                'text' : 'in 2013 we moved to Los Angeles',
                'color' : '#E8E6A2',
                'fontcolor' : 'e78b90',

             },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'california30-color-sq.jpg',
                'customtag' : 'california',
             },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'california20-color-horiz-43-friends.jpg',
                'customtag' : 'california',
                'color' : '#0f4c81',
                'fontcolor' : '#fff',
             },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'california23-color-vert.jpg',
             },
            {
                'type' : 'poster',
                'text' : 'alex studied theater design',
                'color' : '#000',

             },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'california22-color-horiz.jpg',
             },
            {
                'type' : 'poster',
                'text' : 'I took photos',
                'url' : 'california22-color-horiz.jpg',
             },
            {
                'type' : 'image',
                'text' : '',
                'url' : 'california21-color-horiz-friends.jpg',
                'fontcolor' : '#fff',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'analogvideo4.gif',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'california23-bw-horiz.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'california26-color-horiz.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'cycling1-ATOC18-uhcpc-bus.jpg',
             },
             {
                'type' : 'poster',
                'text' : 'somehow ... I found myself doing PR and digital media for an international professional cycling team',
                'color' : '#fff',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'cycling2-colombia18.jpg',
             },
             {
                'type' : 'image',
                'text' : 'and I started traveling',
                'url' : 'cycling9-europe.jpg',
                'fontcolor' : '#fff'
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'cycling3-colombia18.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'cycling4-colombia18.jpg',
                'fontcolor' : '#e78b90'
             },
             {
                'type' : 'image',
                'text' : 'lots of traveling',
                'url' : 'cycling6-colombia18.jpg',
                'fontcolor' : '#fff',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'cycling7-colombia18.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'cycling8-europe.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'oregon2-color-horiz.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'analogvideo3.gif',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'california38-bw-135.jpg',
             },
             {
                'type' : 'poster',
                'text' : 'in 2018 I fell in with a bunch of dancers',
                'subtext' : '~LA Dance Project to be specific~',
                'color' : '#e78b90',
                
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'ladp5-color-vert.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'california39-bw-135-ladp.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'ladp3-bw-135.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'ladp8-color-horiz.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'ladp1-bw-135.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'ladp7-color-horiz.jpg',
             },
             {
                'type' : 'image',
                'text' : '',
                'url' : 'ladp2-bw-135.jpg',
             },
             {
                'type' : 'poster',
                'text' : 'in 2019 I put up a solo show',
                'color' : '#000',
                'fontcolor' : '#e78b90',
             },
             {
                 'type' : 'image',
             }


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
