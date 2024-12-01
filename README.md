Calculator Project Design Document

Overview

This project is a simple calculator web application that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator is built using HTML, CSS, and JavaScript, and features a clean, user-friendly interface with interactive elements designed in a neumorphic style.

Features

Basic Arithmetic Operations: The calculator supports addition, subtraction, multiplication, division, and percentage calculations.

Keyboard Support: Users can interact with the calculator using their keyboard, including number keys, arithmetic operators, Enter for calculating, Backspace for deleting, and Escape for clearing.

Interactive Design: The calculator features neumorphic design elements, giving it a soft, 3D-like appearance.

Technologies Used

HTML: Used to create the structure of the calculator.

CSS: Used to style the calculator, including the neumorphic design, shadows, and transitions.

JavaScript: Adds functionality to the calculator, allowing users to perform operations and interact with it.

Functional Requirements

Display Value: The calculator should display numbers and the results of arithmetic operations on the screen.

Clear Functionality: Users should be able to clear the entire screen to start a new calculation.

Delete Functionality: Users should be able to delete the last character entered.

Calculate Expression: The calculator should evaluate mathematical expressions and display the result.

Keyboard Interactions: Users should be able to use the keyboard to input numbers, operators, and perform calculations.

User Interface

The calculator consists of the following components:

Input Screen: Displays the current number or arithmetic expression.

Buttons: Includes buttons for numbers (0-9), arithmetic operations (+, -, *, /), percentage (%), clear (Cl), delete (DEL), decimal point (.), and an equal button (=) for evaluating the expression.

Button Layout

The calculator layout consists of buttons arranged in a 4x5 grid.

The input screen spans across the top, taking up the full width.

The "equal" button spans two columns at the bottom to provide emphasis.

JavaScript Code Functionality

The JavaScript code provides the functionality to make the calculator interactive. Key functions include:

display(value): Appends the given value to the output screen.

Clear(): Resets the output screen to "0".

del(): Deletes the last character from the output screen. If the screen becomes empty, it resets to "0".

Calculate(): Evaluates the mathematical expression and displays the result. Displays "Error" if the input is invalid.

Keyboard Event Listener: Handles keyboard input to allow users to interact with the calculator using their keyboard.

Design Considerations

Neumorphic Design

The calculator's user interface is designed with a neumorphic aesthetic to provide a visually appealing, soft, and intuitive look. This involves the use of:

Box Shadows: To create raised and inset effects, giving the buttons a 3D appearance.

Rounded Corners: All buttons and input fields have rounded edges for a modern, smooth look.

Color Palette: A light gray palette is used to emphasize the soft, extruded elements.

User Experience

The calculator is designed to be user-friendly, with large buttons for easy tapping on touch devices.

The active state of buttons is styled to give feedback when pressed, enhancing interactivity.

Keyboard interactions are implemented to make calculations quicker and more accessible for users who prefer keyboard input.


Conclusion

This project aims to create a simple yet visually appealing calculator that provides all the essential features users expect. With its neumorphic design and full keyboard support, it serves as a practical and educational exercise in building interactive web applications with HTML, CSS, and JavaScript.