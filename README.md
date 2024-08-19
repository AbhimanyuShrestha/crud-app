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

- `GET /api/v1/product`: Retrieve all items.
- `GET /api/v1/product:id`: Retrieve details of an item by its ID.
- `POST /api/v1/product`: Create a new item.
- `PUT /api/v1/product:id`: Update an existing item.
- `DELETE /api/v1/product:id`: Delete an item.


## Components Overview

### `ProductListComponent`
- Displays a list of products.
- Integrates search functionality.

### `ProductDetailsComponent`
- Displays detailed information about a selected product.

### `ProductEditCompoent`
- Used for creating and editing product.
- Handles form validation and submission.

### `ErrorMessageComponent`
- Handle the form validtion error message

### `LoaderComponent`
- Handle the global loader










