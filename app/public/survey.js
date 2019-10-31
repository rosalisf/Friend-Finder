// const $todoContainer = $(".todo-container");
$();
// Adding event listeners for buttons to collect data from users/clients.
$("#subButton").on("click", function(event) {
  event.preventDefault();
  let answers = [];
  $("label.btn").each(function(element) {
    if (
      $(this)
        .attr("class")
        .indexOf("active") > -1
    ) {
      let radioInput = $(this)
        .children("input")
        .first();
      console.log(radioInput.attr("name"));
      answers.push(parseInt(radioInput.attr("id").replace("option", "")));
    }
  });
  if (answers.length != 10) {
    alert("Answer all questions please");
  }
  console.log(answers);
  let nameAndPhoto = {};

  let name = $("#inputName").val();
  nameAndPhoto.name = name;

  let photo = $("#inputPhoto").val();
  nameAndPhoto.photo = photo;
  let surveyAnswers = {};

  surveyAnswers["photo"] = photo;
  surveyAnswers["name"] = name;
  surveyAnswers["scores"] = answers;
  console.log(surveyAnswers);
  // console.log(name, photo);

  $.ajax({
    type: "POST",
    url: "api/friends",
    data: surveyAnswers,
    dataType: "json",
    success: function(response) {
      console.log(response);
      $("#friendName").html(response.name);
      $("#friendPicture").attr("src", response.photo);
      $("#exampleModalCenter").modal("show");
    }
  });
});

// $(document).on("click", "#subButton", function() {
//   let button = {};

//   let but1 = $("#option1").val();
//   button.but1 = but1;

//   let but2 = $("#option2").val();
//   button.but2 = but2;

//   let but3 = $("#option3").val();
//   button.but3 = but3;

//   let but4 = $("#option4").val();
//   button.but4 = but4;

//   let but5 = $("#option5").val();
//   button.but5 = but5;
// });

// const surveyAnswers = [];
