var UserModel = can.Model.extend({
  findOne: 'GET /user'
}, {});

// simulate server response
can.fixture("GET /user", function(request, response) {
  var User = {
    id: 1,
    progress: 68,
    assignment: {
      target: "Gold",
      due: "17 August 2013"
    },
    allAssigntments: [
      {name: "Adding Fractions", due: "13/01/13"},
      {name: "Substracting Fractions", due: "13/01/13"},
      {name: "Multiplying Fractions", due: "13/01/13"},
      {name: "Dividing Fractions", due: "13/01/13"}
    ]
  };
  return User;
});

$(document).ready(function() {
  UserModel.findOne({}, function(user) {
    $('.assignment').html(can.view('assignment-tmpl', user.assignment));
    $('.all-assignments-container').html(can.view('assignments-tmpl', {assignments: user.allAssigntments}));
    $('.study-progress').append(can.view('progress-tmpl', {progress: user.progress}));
  });
});