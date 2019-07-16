/*
    This file defines a javascript function to load videos from youtube.
    Josh Barney
    CS 1810 Final Project
    April 17th 2019
*/

$(function() {
    var placeToPutVideos = $('main ul.videos');
    for (var i = 0; i < videoIDs.length; i++)
    {
        placeToPutVideos.append($(`<li>
        <iframe class="video" width="420" height="315" alt="Elenyi Music Video" 
        allowfullscreen="allowfullscreen" 
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
        src="https://www.youtube.com/embed/${videoIDs[i]}">
        </iframe></li>`));
    }
});