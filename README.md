# mrjp2022
This is a development version of the mrjonathanpotter.com site.
Site is being developed as a pre-assignment for the FlatIron School
Software Engineering course starting in January, 2022.  

The goal for the site is to display a full window of images layed out in a masonry
like grid across the screen.  Interspersed with the images will be random text boxes
or youtube embeds.  These are all data types that would need to be handled as objects
using a javascript action on a button to fire a loading of a new set of data for the 
document.  The data is iterated through UL with each li being dynamically resized.
I would also like to implement dynamically resizing text based on its container - 
esentially sizing the containers against rem values, but text against em values.

Currently the plan is the work through the site in a few phases:
1) design a nice layout in adobe illustrator
2) annotate illustrator design with div sizing, class names, and other info
3) begin implementation of original plan
4) Throw out original plan
5) decide on new gallery style site

We are Here --> 6) implement basic working version of layout UL

7) javascript to create new LI items for ul based on data source (object?)
8) define modules for 3 data types: image, youtube, text
9) hook data to html with js
10) style refining
11) data generation