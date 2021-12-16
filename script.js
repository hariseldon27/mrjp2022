const h2 = document.createElement('h2');
h2.textContent = 'This content added by Javascript';

document.querySelector('body').appendChild(h2);

const div = document.createElement('div');
div.textContent = 'This is a new element';

document.querySelector('li').appendChild(div);

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

    */
const items = {
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
    item4: {
        type: "image",
        url: "https://picsum.photos/638/",
        altText: "A lovely photo of downtown everywhereville.",
        tag1: "inspirational",
        tag2: "tangential"
      },
    item5: {
          type: "poster",
          text: "This is a poster block - whatcha think?",
          background: "0f4c81",
          orientation: "landscape",
          tag1: "wild",
          tag2: "wisdom"
        },
    item6: {
            type: "image",
            url: "https://picsum.photos/638/",
            altText: "A lovely photo of downtown everywhereville.",
            tag1: "inspirational",
            tag2: "tangential"
          },
    item7: {
            type: "image",
            url: "https://picsum.photos/638/",
            altText: "A lovely photo of downtown everywhereville.",
            tag1: "inspirational",
            tag2: "tangential"
          },
    item8: {
            type: "image",
            url: "https://picsum.photos/638/",
            altText: "A lovely photo of downtown everywhereville.",
            tag1: "inspirational",
            tag2: "tangential"
          },
    item9: {
            type: "image",
            url: "https://picsum.photos/638/",
            altText: "A lovely photo of downtown everywhereville.",
            tag1: "inspirational",
            tag2: "tangential"
          },
    item10: {
            type: "poster",
            text: "This is a poster block - whatcha think?",
            background: "0f4c81",
            orientation: "landscape",
            tag1: "wild",
            tag2: "wisdom"
          },

  };