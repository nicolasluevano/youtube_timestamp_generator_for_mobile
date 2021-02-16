//EXAMPLE link
//https://youtu.be/dQw4w9WgXcQ
//

document.querySelector('#get-link').addEventListener('click', generateLink)
document.querySelector('#copy').addEventListener('click', copyLink)


function generateLink(){

    document.querySelector("#copy").style.display = "block"
    
    //take original link from input
    let usersLink = document.querySelector('#yt-link').value
    console.log(usersLink)

    let minute = +document.querySelector('#minute').value
    console.log(minute)
    let second = +document.querySelector('#second').value
    console.log(second)

    let timeConvertToSecs = (minute * 60) + second
    console.log(timeConvertToSecs)

    const delimiters = ['?v=', 'tu.be/', '/embed/'];
    let videoID; 
    if (delimiters.filter(x => usersLink.includes(x))) {
    let splitter = delimiters.filter(x => usersLink.includes(x))[0];
    videoID = usersLink.split(splitter)[1].split('&')[0];
    console.log(videoID)
    }
    
    //new links
    // let newLink = `${usersLink}?t=${timeConvertToSecs}`
    let newEmbedLink = `https://www.youtube.com/embed/${videoID}?start=${timeConvertToSecs}`
    let timeStampLink = `https://youtu.be/${videoID}?t=${timeConvertToSecs}`


    document.querySelector('#timestamp-link').href = timeStampLink
    document.querySelector('#timestamp-link').innerText = timeStampLink
    document.querySelector('iframe').src = newEmbedLink

   

  
    //add ?t= to end of link
    //take min and second from input and covert to seconds
    //add seconds to end of link
    //needs to be able to take in three link formats and output three dif link formats
    //"https://www.youtube.com/embed/zuegQmMdy8M?start=262"

    //take users link
    //extract the vid ID from the users link
    //vid ID is stored after the / in OG link
    //only keep text to the right of last /
    //keep vidID only
    //
    //store that ID in a variable
    //insert vidID variable where needed

    //LINKTYPES
    //https://youtu.be/uqao3dOYO7U
    //https://www.youtube.com/watch?v=uqao3dOYO7U&ab_channel=Munchies

}

    //Copies link to clipboard
    function copyLink() {
        navigator.clipboard.writeText(document.querySelector('#timestamp-link').innerText).then(function() {
        console.log("success")
        
        }, function() {
        console.log("fail")
        });
    }

//   function copyLink() {
//     const str = document.getElementById('timestamp-link').innerText;
//     const el = document.createElement('textarea');
//     el.value = str;
//     el.setAttribute('readonly', '');
//     el.style.position = 'absolute';
//     el.style.left = '-9999px';
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
// }
