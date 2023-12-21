# Table App - Backend

This is the backend part of the Table App, a small web application that presents a list of JSON files on the server and provides information about tables within those files.

## Prerequisites

- Node.js installed ([Download Node.js](https://nodejs.org/))
- NPM (Node Package Manager) installed (comes with Node.js)
- JSON files with table information in the `public` folder

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sunnyDev93/Beaconcure.git
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    ```bash
    npm start
    ```

    The server will be running on `http://localhost:3000`.

## API Endpoints

### 1. Get List of Files

- **Endpoint:** `/files`
- **Method:** `GET`
- **Description:** Get a list of JSON files in the `public` folder.

### 2. Get List of Tables for a File

- **Endpoint:** `/tables/:file`
- **Method:** `GET`
- **Parameters:**
  - `:file` - The name of the JSON file without extension
- **Description:** Get a list of tables within the specified JSON file.

### 3. Get Table Information

- **Endpoint:** `/table/:file/:table`
- **Method:** `GET`
- **Parameters:**
  - `:file` - The name of the JSON file without extension
  - `:table` - The name of the table within the specified JSON file
- **Description:** Get detailed information about the specified table.

