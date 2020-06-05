# React Forms & State

## Part 1: Conceptual questions
1. When should we use props vs state?
2. What is a situation in which we would want to pass a function as a prop?
3. What is a controlled vs uncontrolled form?

## Part 2: Coding Challenge - Adding Functionality to your Reservation App
* Note: this challenge is a continuation of the previous week's. Last week you should have added state to your app. If you do not have a project with a few components already built, borrow this solution as starter code: https://github.com/Captainmango/foxes/tree/react-components/react-components/react-components
* A state park has hired you to build their front end reservation system so its employees can more easily manage campsite reservations. They were leaning toward using React for the frontend and last week hired you to prove its usefulness by building an application with basic presentational functionality. They are sold on the framework, and now want you to wire it up so someone could interact with it.
1. Wire up your `<NewReservationForm>`. Turn it into a controlled form. Track changes to its input in the component's state.
2. Expand your form submit event listener. Submitting the form should cause the `<Reservations>` component to add a new Reservation to it. HINT: In order to pass data between sibling components, give your `<ReservationsContainer>` the responsibility of defining what happens when the form is submitted.
3. BONUS: Add input validation to your form. Restrict users from entering anything except numbers into the campsite input field.