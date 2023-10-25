var stranger = document.querySelector(".picture h1");
var addFriend = document.querySelector(".picture button");
var key = 1;
addFriend.addEventListener("click", function(){
    if(key ==1){
        stranger.innerHTML = "Friends"
        addFriend.innerHTML = "Remove Friend"
        addFriend.style.backgroundColor = "Pink"
        key = 0;
    }
    else{
        stranger.innerHTML = "Stranger"
        
addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "lightgreen"
        key = 1;
    }
})
