# Product-CRUD

## Project Structure

```

src/
│
├── app/
│   ├── components/       # Reusable components
│   ├── directives/       # Custom directives
│   ├── models/           # TypeScript models and interfaces
│   ├── pipe/             # Custom pipes
│   ├── services/         # Angular services for API calls
│   ├── app-routing.module.ts  # Application routing module
│   └── app.module.ts     # Main application module
│
├── assets/               # Static assets (images, fonts, etc.)
├── environments/         # Environment-specific configurations
│
├── index.html            # Main HTML file
├── styles.css            # Global styles
└── main.ts               # Application entry point
```


## Routing

The application uses Angular's router to navigate between different pages.

### Routes

- `/products`: Displays a list of products.
- `/products/:id`: Displays details of a specific product by its ID.
- `/products/:id/edit`: Allows for creating or editing a product based on the ID.


## Features

- **Create**: Add a new product to the list.
- **Details**: View detailed information about a product.
- **Read**: Display a list of products.
- **Update**: Edit an existing product.
- **Delete**: Remove a product from the list.


## API Integration
The application interacts with a https://mockapi.io/ RESTful API to perform CRUD operations. The service layer handles HTTP requests using Angular's `HttpClient` module.

### Example API Endpoints

- `GET /api/items`: Retrieve all items.
- `GET /api/items/:id`: Retrieve details of an item by its ID.
- `POST /api/items`: Create a new item.
- `PUT /api/items/:id`: Update an existing item.
- `DELETE /api/items/:id`: Delete an item.


## Components Overview

### `ItemListComponent`
- Displays a list of items.
- Integrates search and filtering functionality.

### `ItemDetailComponent`
- Displays detailed information about a selected item.
- Allows editing and deleting of the item.

### `ItemFormComponent`
- Used for creating and editing items.
- Handles form validation and submission.

### `SearchComponent`
- Provides a search interface to filter the list of items.
- Integrates with the item list to display filtered results based on the search query.









