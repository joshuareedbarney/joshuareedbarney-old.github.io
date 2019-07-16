/*
    This file defines a javascript function to load photos.
    Josh Barney
    CS 1810 Final Project
    April 26th 2019
*/

$(function() {
    //Load the photos in from the folder
    var placeToPutPhotos = $('main ul.photos');
    for (var i = 0; i < photoNames.length; i++)
    {
        placeToPutPhotos.append($(`<li><img src="img/${photoNames[i]}" 
        alt="Photo of Elenyi Music Group" class="photo"/></li>`));
    }
    //console.log($('body img.bigPhoto'));
    //Add an event to make a big version of the photo appear when clicked.
    var placeToPutBigPhoto = $('body');
    $('li img.photo').on('click', function(e){
        //console.log(e);
        if($('body img.bigPhoto').length == 0)
        {
            //console.log($('body img.bigPhoto'));
    
            var newBigPhoto = $(`<img src="${e.target.src}" 
            alt="Photo of Elenyi Music Group" class="bigPhoto"/>`);
            placeToPutBigPhoto.append(newBigPhoto);
    
            //console.log(newBigPhoto);
    
            //Delete the photo when it is clicked again.
            newBigPhoto.on('click', function(){
                newBigPhoto.remove();
            });
        }
        else
        {
            $('body img.bigPhoto').remove();
        }
    });

    // $('window').scroll(function(){
    //     console.log('scroll');
    //     if($('body img.bigPhoto').length > 0)
    //     {
    //         $('body img.bigPhoto').remove();
    //     }
    // });
});