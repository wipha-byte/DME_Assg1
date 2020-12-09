const submitBtn = document.getElementById('submit-btn');
var urlInput = document.querySelector("#url");
var titleInput = document.querySelector("#entryTitle");
var captionInput = document.querySelector("#entryCaption");
var textContentInput = document.querySelector("#content-input");
var dateInput = document.querySelector("#dateInput");

submitBtn.addEventListener("click", function(){
    const url = urlInput.value;
    const title = titleInput.value;
    const caption = captionInput.value;
    const date = dateInput.value;

    $("#card-content").append(
        `<ion-card>
        <img src="${url}" />
        <ion-card-header>
          <ion-card-subtitle>${date}</ion-card-subtitle>
          <ion-card-title>${title}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
         <b>${caption}</b>
         <p></p>
        </ion-card-content>
      </ion-card>`
    );

});