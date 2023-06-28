let foodList = [];
let totalCalories = 0;

function addFood() {
    const foodItemInput = document.getElementById("calorie-food-item");
    const caloriesInput = document.getElementById("calorie-calories");

    const newFood = {
        foodItem: foodItemInput.value,
        calories: parseInt(caloriesInput.value),
        time: new Date().toLocaleString()
    };

    foodList.push(newFood);

    // Update the UI
    updateFoodList();
    updateTotalCalories();

    // Reset the form
    foodItemInput.value = "";
    caloriesInput.value = "";
}

function updateFoodList() {
    const foodListElement = document.getElementById("calorie-food-list");

    // Clear the current list
    foodListElement.innerHTML = "";

    // Add each food item to the list
    foodList.forEach((food, index) => {
        const li = document.createElement("li");
        li.innerText = `${food.foodItem} - ${food.calories} calories (${food.time})`;

        // Edit button
        const editButton = document.createElement("div");
        editButton.classList.add("calorie-edit", "text-underline");
        editButton.innerText = "Edit";
        editButton.onclick = () => {
            editFood(index);
        };
        li.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement("div");
        deleteButton.classList.add("calorie-del", "text-underline");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => {
            deleteFood(index);
        };
        li.appendChild(deleteButton);

        foodListElement.appendChild(li);
    });
}

function editFood(index) {
    const food = foodList[index];
    const newFoodItem = prompt("Enter new food item:", food.foodItem);
    const newCalories = parseInt(prompt("Enter new calorie count:", food.calories));

    if (newFoodItem && !isNaN(newCalories)) {
        food.foodItem = newFoodItem;
        food.calories = newCalories;

        // Update the UI
        updateFoodList();
        updateTotalCalories();
    }
}

function deleteFood(index) {
    foodList.splice(index, 1);

    // Update the UI
    updateFoodList();
    updateTotalCalories();
}

function updateTotalCalories() {
    totalCalories = foodList.reduce((total, food) => total + food.calories, 0);

    const totalCaloriesElement = document.getElementById("calorie-total-calories");
    totalCaloriesElement.innerText = totalCalories;
}
