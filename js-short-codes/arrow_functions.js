/**
 * @param  {} question
 * @param  {} yes
 * @param  {} no
 */

 // without arrow function
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function () { alert("You agreed."); },
  function () { alert("You canceled the execution."); }
);


// with arrow function
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);


// most concise arrow function
(() => confirm("Do you agree?") ? alert("You agreed") : alert("You canceled execution"))()