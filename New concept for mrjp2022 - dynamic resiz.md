New concept for mrjp2022 - dynamic resizing browser filling gallery style site.  
based on the concept of this: https://css-tricks.com/adaptive-photo-layout-with-flexbox/
What if we use that as the general layout for a block based site.  
Site loads X number of blocks across, and at least Y number of those blocks are
"informational" based on a small database, or array maybe?  or maybe it's
nonesense.  I don't know.  But, either way - it fills the browser with images
and interspersed in, with size matched, is textual info boxes.  
This would be a cool packaged plug in - you could organize it like a slide show.
Or, maybe it's organized by tags?  You can tag groups and those with cross over
will be matched together?  So, I guess we'll store them all as objects in a script.
Maybe we have two scripts?  Or...looking in to localstorage or some sort of browser
processed database?  Question will be whether it needs to hold both images and 
textual blocks?  I suppose so.  I guess I could just think of it as a hard-code
gallery...setting 

ideas: set height and width for blocks through JS?  That way it can be set class-wide.  
Use javascript to iterate through entries and create li div 
maybe each holder can be either: a) photo, b) poster (h3 text on spec'd color)
c) youtube embed?