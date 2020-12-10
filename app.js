//journal variables
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
var urlInput = document.querySelector("#url");
var titleInput = document.querySelector("#entryTitle");
var captionInput = document.querySelector("#entryCaption");
var textContentInput = document.querySelector("#content-input");
var dateInput = document.querySelector("#dateInput");
var cardContent = document.querySelector("#card-content");



//function Entry(title, caption, text, date, url){
//  this.title = titleInput.value();
//  this.caption = captionInput.value();
//  this.text = textContentInput.value();
//  this.date = dateInput.value();
//  this.url = urlInput.value();
//}

submitBtn.addEventListener("click", function(){

  var url = urlInput.value;
  var title = titleInput.value;
  var caption = captionInput.value;
  var textContent = textContentInput.value;
  var date = dateInput.value;
  
    $("#card-content").append(
        `<ion-card>
        <img src="${url}" />
        <ion-card-header>
          <ion-card-subtitle>${date}</ion-card-subtitle>
          <ion-card-title>${title}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
         <b>${caption}</b>
         <p>${textContent}</p>
        </ion-card-content>
      </ion-card>`
    );
    urlInput.value = "";
    titleInput.value = "";
    captionInput.value = "";
    dateInput.value = "";
    textContentInput.value = "";

});


clearBtn.addEventListener("click", function(){
  urlInput.value = "";
  titleInput.value = "";
  captionInput.value = "";
  dateInput.value = "";
  textContentInput.value = "";
});

//Profile
var editProfileBtn = document.querySelector("#edit-profile");
var createProfileBtn = document.querySelector("#create-profile");
var firstNameInput = document.querySelector("#firstName-input");
var lastNameInput = document.querySelector("#lastName-input");
var genderInput = document.querySelector("#gender-input");
var emailInput = document.querySelector("#email-input")



editProfileBtn.addEventListener("click", function(){
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;
  var gender = genderInput.value;
  var email = emailInput.value;

  document.getElementById("p-name").innerHTML = `${firstName}`;
  document.getElementById("p-gender").innerHTML = `${gender}`;
});
