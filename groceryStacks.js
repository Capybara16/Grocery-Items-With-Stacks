// File: groceryStacks.js

// Initialize an empty array for the stack
let groceryStack = [];
const maxItems = 5; // Maximum number of items allowed in the stack

// Function to check the top item of the stack or if the stack is empty
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        console.log(Top item: ${groceryStack[groceryStack.length - 1]});
        return groceryStack[groceryStack.length - 1];
    }
}

// Function to push an item onto the stack
function push(item) {
    if (groceryStack.length < maxItems) {
        groceryStack.push(item);
        console.log(${item} has been added to the stack.);
    } else {
        console.log("The stack is full. Cannot add more items.");
    }
    console.log("Current stack:", groceryStack);
    peek();
}

// Function to pop an item off the stack
function pop() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty. Nothing to remove.");
    } else {
        const removedItem = groceryStack.pop();
        console.log(${removedItem} has been removed from the stack.);
    }
    console.log("Current stack:", groceryStack);
    peek();
}

// Main logic to accept grocery items using prompt()
for (let i = 0; i < maxItems; i++) {
    const item = prompt(Enter grocery item ${i + 1}:);
    if (item) {
        push(item);
    } else {
        console.log("Invalid input. Please enter a valid item.");
        i--; // Retry the current iteration
    }
}

// Example of pop function usage
console.log("\nRemoving items from the stack:");
pop();
pop();
