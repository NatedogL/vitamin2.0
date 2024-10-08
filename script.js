/**
 * Question 1
  hi*/
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button"); //get the sidebar button
  const sidebar = document.getElementById("sidebar"); //get the sidebar

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains("opened"); //check if the sidebar has the class "opened"

    if (sidebarIsOpen) {
      // Close the sidebar
      /** YOUR CODE HERE */
      sidebar.classList.remove("opened"); //remove the class "opened" from the sidebar
      sidebarButton.textContent = "›"; //change the text to right arrow
      
    } else {
      // Open the sidebar
      /** YOUR CODE HERE */
      sidebar.classList.add("opened"); //add the class "opened" to the sidebar
      sidebarButton.textContent = "‹"; //change the text to left arrow
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name"); //get the task name input
  const addTodoButton = document.getElementById("add-todo"); //get the add todo button, event listener
  const todoListUl = document.getElementById("todo-list"); //get the todo list, to append the new li

  /** YOUR CODE HERE */
  addTodoButton.addEventListener("click", () => { //eventlistner to check for button
    if (taskName.value !== "") { //check if the input field is empty
      const taskNameValue = taskName.value;  //get the value of the task name input
      const newTodoLi = document.createElement("li"); //create a new li element
      newTodoLi.textContent = taskNameValue; //set the text from taskName to the text of li
      todoListUl.append(newTodoLi); //append the new li to the todo list
      taskName.value = ""; //clear the input field
    }
  });

};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name"); //get the first name input
  const lastNameInput = document.getElementById("last-name"); //get the last name input
  const message = document.getElementById("message"); //get the message input

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    /** YOUR CODE HERE */
    const firstName = firstNameInput.value; //get the value of the first name input
    const lastName = lastNameInput.value; //get the value of the last name input
    message.textContent = `Hello, ${firstName} ${lastName}!`; //set the text content of the message to the first name and last name
  };

  /** YOUR CODE HERE */
  firstNameInput.addEventListener("input", updateMessage); //add event listener to the first name input
  lastNameInput.addEventListener("input", updateMessage); //add event listener to the last name input

};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
