# Recipes App

A full CRUD (Create, Read, Update, Delete) REST API for managing recipes using Node.js, Express.js, and MongoDB.

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- Postman (for testing)
- MVC Architecture

## API Endpoints

### POST /api/recipes
- Create a new recipe
- Body: JSON  
```json
{
  "name": "Veg Pulao",
  "ingredients": ["Rice", "Peas", "Carrot", "Spices"],
  "instructions": "Boil rice and mix with veggies and spices."
}
