/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: 
 * Email:
 */
// var button = document.getElementById("create-twit-button");
// var modalBackdrop = document.getElementById("modal-backdrop");
// var modal = document.getElementById("create-twit-modal");
// var modalCancelButton = document.getElementsByClassName("modal-cancel-button")[0];
// var modalCloseButton = document.getElementsByClassName("modal-close-button")[0];
// var modalAcceptButton = document.getElementsByClassName("modal-accept-button")[0];
// var twitText = document.getElementById("twit-text-input");
// var twitAuthor = document.getElementById("twit-attribution-input");
// var twitSearch = document.getElementById("navbar-search-input");
// var twitSearchButton = document.getElementById("navbar-search-button")

// function modalToggle(event) {
//   if (modal.classList.contains("hidden")) {
//     twitText.value = "";
//     twitAuthor.value = "";
//     modal.classList.remove('hidden');
//     modalBackdrop.classList.remove('hidden');
//   }
//   else {
//     modal.classList.add('hidden');
//     modalBackdrop.classList.add('hidden');
//   }
// }

// function addTwit(event) {
//   if ((twitText.value == "") || (twitAuthor.value == "")) {
//     alert("You have not entered a value for either text or author")
//     return;
//   }

//   var icon = document.createElement('i');
//   icon.classList.add('fa');
//   icon.classList.add('fa-bullhorn');

//   var twitIcon = document.createElement('div');
//   twitIcon.classList.add('twit-icon');
//   twitIcon.appendChild(icon);

//   var text = document.createElement('p');
//   text.classList.add('twit-text');
//   text.textContent = twitText.value;

//   var author = document.createElement('a');
//   author.href = '#';
//   author.textContent = twitAuthor.value;

//   var attribution = document.createElement('p');
//   attribution.classList.add('twit-attribution');
//   attribution.appendChild(author);

//   var twitContent = document.createElement('div');
//   twitContent.classList.add("twit-content");
//   twitContent.appendChild(text);
//   twitContent.appendChild(attribution);


//   var twit = document.createElement('article');
//   twit.classList.add('twit');
//   twit.appendChild(twitIcon);
//   twit.appendChild(twitContent);

//   var body = document.getElementsByClassName('twit-container')[0];
//   body.appendChild(twit);

//   modalToggle();
// }

// function search(event) {
//   var twits = document.getElementsByClassName('twit');
//   for (i = 0; i < 8; i++) {
//     if ((twits[i].childNodes[3].childNodes[1].textContent.includes(twitSearch.value)) || (twits[i].childNodes[3].childNodes[3].textContent.includes(twitSearch.value))) {
//       twits[i].classList.remove('hidden');
//       continue;
//     }
//     else {
//       twits[i].classList.add('hidden');
//     }
//   }
//   if (twits.length > 8) {
//     for (i = 8; i < twits.length; i++) {
//       if ((twits[i].childNodes[1].childNodes[0].textContent.includes(twitSearch.value)) || (twits[i].childNodes[1].childNodes[1].textContent.includes(twitSearch.value))) {
//         twits[i].classList.remove('hidden');
//         continue;
//       }
//       else {
//         twits[i].classList.add('hidden');
//       }
//     }
//   }
// }



// button.addEventListener('click', modalToggle);
// modalCancelButton.addEventListener('click', modalToggle);
// modalCloseButton.addEventListener('click', modalToggle);
// modalAcceptButton.addEventListener('click', addTwit);
// twitSearchButton.addEventListener('click', search);
// twitSearch.addEventListener('keyup', search);
document.getElementById("create-twit-button").addEventListener('click', function() {
  document.getElementById("modal-backdrop").style.display = "unset";
  document.getElementById("create-twit-modal").style.display = "unset";
});

var textinput = document.getElementById("twit-text-input");
var author = document.getElementById("twit-attribution-input");

var cancelButton = function() {
  document.getElementById("modal-backdrop").style.display = "none";
  document.getElementById("create-twit-modal").style.display = "none";
  textinput.value = "";
  author.value = "";
}

var cancel = document.getElementsByClassName("modal-cancel-button");
for(var i = 0; i < cancel.length; i++){
  cancel[i].addEventListener('click', cancelButton );
  }

var xbutton = document.getElementsByClassName("modal-close-button");
for(var i = 0; i < xbutton.length; i++){
  xbutton[i].addEventListener('click', cancelButton );
  }

var acceptButton = function() {
  console.log(textinput.value);
  console.log(author.value);
  if(textinput.value == "" || author.value == ""){
      window.alert("One of the fields is empty, please fill in the form completely.");
  }
  else{
      var article = document.createElement("article");
      article.classList.add("twit");
      var mainclass = document.querySelector(".twit-container");
      mainclass.appendChild(article);
      
      var div1 = document.createElement("div");
      div1.classList.add("twit-icon");
      
      var bullhorn = document.createElement("i");
      bullhorn.classList.add("fas");
      bullhorn.classList.add("fa-bullhorn");
      div1.appendChild(bullhorn);
      
      
      var div2 = document.createElement("div");
      div2.classList.add("twit-content");
      
      var p1 = document.createElement("p");
      p1.classList.add("twit-text");
      p1.append(textinput.value);
      
      var p2 = document.createElement("p");
      p2.classList.add("twit-author");
      
      var authorlink = document.createElement("a");
      authorlink.href = "#";
      authorlink.append(author.value);
      p2.appendChild(authorlink);
      
      div2.appendChild(p1);
      div2.appendChild(p2);
      article.appendChild(div1);
      article.appendChild(div2);
      
      document.getElementById("modal-backdrop").style.display = "none";
      document.getElementById("create-twit-modal").style.display = "none";
      
      /*reset*/
      author.value = "";
      textinput.value = "";
  }
}

var accept = document.getElementsByClassName("modal-accept-button");
accept[0].addEventListener("click", acceptButton);


/*for the search bar*/
var nav = document.querySelector("#navbar-search-input");
nav.addEventListener("keyup", function() {
  
  var input = document.getElementById("navbar-search-input");
  console.log(input.value);

  input = input.value.toLowerCase();
  
  var content = document.getElementsByClassName("twit-content");
  
  for(var i = 0; i < content.length; i++){
    if(input === ""){
      content[i].closest(".twit").classList.remove("hidden");
      continue;
    }
      var twitText = content[i].getElementsByClassName('twit-text');
      var authorText = content[i].getElementsByClassName('twit-author');
      console.log(twitText);

      var txtvalue = twitText[0].textContent;
      var authvalue = authorText[0].textContent;

      if(txtvalue.toLowerCase().indexOf(input) === -1 && authvalue.toLowerCase().indexOf(input) === -1){
          content[i].closest(".twit").classList.add("hidden");
          continue;
      }
  }
});