$(document).ready(function() {
  var responses = {};

  // QUESTION "PAGES"
  var q0 = $("#q0"),
    q1 = $("#q1"),
    q2 = $("#q2"),
    q3 = $("#q3"),
    q4 = $("#q4"),
    q5 = $("#q5"),
    q6 = $("#q6"),
    q7 = $("#q7");

  // RESULT PAGES
  var emergencyInfo = $("#emergencyInfo"),
    callNurse = $("#callNurse"),
    selfIsolate = $("#selfIsolate"),
    selfIsolateWithTravel = $("#selfIsolateWithTravel"),
    selfIsolateWithExposure = $("#selfIsolateWithExposure"),
    unlikelySick = $("#unlikelySick"),
    unlikelySickWithRisk = $("#unlikelySickWithRisk");

  // ARRAYS OF QUESTION/RESULT PAGES (used to show/hide content)
  var qArray = [q0, q1, q2, q3, q4, q5, q6, q7];
  var rArray = [emergencyInfo, callNurse, selfIsolate, selfIsolateWithTravel, selfIsolateWithExposure, unlikelySick, unlikelySickWithRisk];

  var footer = $("footer"),
    retakeNotification = $("#retakeNotification");

  // event handlers for back and reset buttons
  $("body")
    .on("click", ".backBtn", function() {
      goBack();
    })
    .on("keypress", ".backBtn", function(e) {
      if (e.which == 13) {
        goBack();
      }
    })
    .on("click", ".resetBtn", function() {
      init();
    })
    .on("keypress", ".resetBtn", function(e) {
      if (e.which == 13) {
        init();
      }
    });

  // skip to main content llink
  $("a.skip-link").click(function(event) {
    event.preventDefault();
    $("#main-content")
      .attr("tabindex", -1)
      .focus();
  });

  // Tracking for mouse being in the window.
  // We are using this to differentiate between
  // in-page back button and browser buttons
  document.onmouseover = function() {
    //User's mouse is inside the page.
    window.innerDocClick = true;
  };

  document.onmouseleave = function() {
    //User's mouse has left the page.
    window.innerDocClick = false;
  };

  window.onhashchange = function() {
    if (window.innerDocClick) {
      window.innerDocClick = false;
    } else {
      goBack(window.location.hash || null);
    }
  };

  // APPLICATION FUNCTIONS
  init();

  function init() {
    // reveal the first question/buttons
    responses = {};
    window.history.pushState(null, document.title, "#q0");
    goBack("#q0");
  }

  function disable(x) {
    // hide the element on the page via fadeOut
    if (x.selector === "#q0") {
      x = x.add(retakeNotification);
    }
    x.add(footer).fadeOut(200);
  }

  function reveal(x) {
    if (x.selector === "#q0") {
      x = x.add(retakeNotification);
    }
    x.add(footer)
      .delay(300)
      .fadeIn();
  }

  function goBack(hash) {
    var hashEl = hash ? $(hash) : null;
    var popped = hashEl || stack.pop();

    // If we have no history we can't go back
    if (!popped) return;

    // hide all questions elements on the page
    for (var i = 0; i < qArray.length; i++) {
      disable(qArray[i]);
    }
    // hide all answers elements on the page
    for (var i = 0; i < rArray.length; i++) {
      disable(rArray[i]);
    }

    location.href = popped.selector;
    reveal(popped);
  }

  // QUESTION STACK
  var stack = [];

  // QUESTION YES/NO BUTTON ACTIONS
  function handleClick(previous, next, response) {
    if (response) {
      responses[previous.selector.slice(1)] = response;
    }
    disable(previous);
    reveal(next);
    stack.push(previous);
    location.replace(next.selector);
  }

  function determineOutcome(previous) {
    var next = unlikelySick;

    if (hasCloseContact()) {
      if (hasSevereSymptoms()) {
        next = callNurse;
      } else {
        next = isHighRisk() ? unlikelySickWithRisk : selfIsolateWithExposure;
      }
    } else {
      if (hasSymptoms()) {
        next = isHighRisk() ? (hasSevereSymptoms() ? callNurse : unlikelySickWithRisk) : selfIsolate;
      } else {
        next = isHighRisk() ? unlikelySickWithRisk : unlikelySick;
      }
    }

    handleClick(previous, next);
  }

  function determineOutcomeAfterTravel() {
    var nextAction = selfIsolateWithTravel;

    if (hasSevereSymptoms()) {
      nextAction = callNurse;
    } else if (isHighRisk()) {
      nextAction = unlikelySickWithRisk;
    }

    return nextAction;
  }

  function hasSymptoms() {
    return responses.q2 || responses.q3;
  }

  function hasSevereSymptoms() {
    return responses.q2;
  }

  function hasCloseContact() {
    return responses.q7;
  }

  function isHighRisk() {
    return responses.q4;
  }

  // Landing page btns
  $("#launchSelfAssessment").click(function() {
    handleClick(q0, q1);
  });

  // q1 btns
  $("#emergencyCheckYes").click(function() {
    handleClick(q1, emergencyInfo);
  });
  $("#emergencyCheckNo").click(function() {
    handleClick(q1, q2);
  });

  // q2 btns
  $("#emergencyCheckTwoYes").click(function() {
    handleClick(q2, q3, true);
  });
  $("#emergencyCheckTwoNo").click(function() {
    handleClick(q2, q3, false);
  });

  // q3 btns
  $("#testingRequiredYes").click(function() {
    handleClick(q3, q4, true);
  });
  $("#testingRequiredNo").click(function() {
    handleClick(q3, q4, false);
  });

  // q4 btns
  $("#riskFactorsYes").click(function() {
    handleClick(q4, q5, true);
  });
  $("#riskFactorsNo").click(function() {
    handleClick(q4, q5, false);
  });

  // q5 btns
  $("#exposedYes").click(function() {
    handleClick(q5, determineOutcomeAfterTravel(), true);
  });
  $("#exposedNo").click(function() {
    handleClick(q5, q6, false);
  });

  // q6 btns
  $("#closeContactYes").click(function() {
    handleClick(q6, callNurse, true);
  });
  $("#closeContactNo").click(function() {
    handleClick(q6, q7, false);
  });

  // q7 btns
  $("#closeContactWithSickYes").click(function() {
    responses["q7"] = true;
    determineOutcome(q7);
  });
  $("#closeContactWithSickNo").click(function() {
    responses["q7"] = false;
    determineOutcome(q7);
  });
});
