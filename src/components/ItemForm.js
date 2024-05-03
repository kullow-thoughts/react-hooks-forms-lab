import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// There is a new component called ItemForm that will allow us to add new items to our shopping list. When the form is submitted, a new item should be created and added to our list of items.
// Make all the input fields for this form controlled inputs, so that you can access all the form data via state. When setting the initial state for the <select> tag, use an initial value of "Produce" (since that's the first option in the list).

// Handle the form's submit event, and use the data that you have saved in state to create a new item object with the following properties:
// const newItem = {
//   id: uuid(), // the `uuid` library can be used to generate a unique id
//   name: itemName,
//   category: itemCategory,
// };

// Add the new item to the list by updating state. To get the test passing, you'll need to use a prop called onItemFormSubmit as a callback and pass the new item to it.


function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      ...formData
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;