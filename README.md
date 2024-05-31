# Visit the Website

Please open your browser and navigate to [this link](https://my-restaurant-menu-manager-3gpv.vercel.app/) to access the website.

Thank you!

# Simple CRUD for Menu

This is a simple CRUD (Create, Read, Update, Delete) application for managing a restaurant's menu using React and TypeScript. The application allows restaurant merchants to create, edit, and save menu items, which are stored in Firebase Realtime Database. The UI is designed to be user-friendly and intuitive, ensuring a smooth experience for the merchant.

## Features

- **Create Menu Items**: Merchants can create new menu items with details such as category, name, options (e.g., sizes), price, cost, and amount in stock.
- **Edit Menu Items**: Existing menu items can be edited and updated as needed.
- **Save Items**: All created and edited items are saved in Firebase Realtime Database.
- **User-Friendly UI**: The interface is designed to provide the most user-friendly experience possible.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Firebase Realtime Database**: A cloud-hosted NoSQL database that lets you store and sync data between your users in real-time.
- **Hooks**: React hooks for managing state and side effects.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase project set up with Realtime Database enabled.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MariferA/my-restaurant-menu-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-restaurant-menu-manager
   ```
3. Install the dependencies:
   ```bash
   yarn install
   ```

### Firebase Configuration

1. Create a Firebase project and enable Realtime Database.
2. Add your Firebase configuration to a `.env` file in the root of the project:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   REACT_APP_FIREBASE_DATABASE_URL=https://your-database-name.firebaseio.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

### Running the App

1. Start the development server:
   ```bash
   yarn start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Usage

- To **create** a new menu item, fill in the details in the form and click the "Save" button.
- To **edit** an existing menu item, click on the item in the list, update the details in the form, and click the "Save" button again.
- To **delete** a menu item, click the "Delete" button next to the item in the list.

## Acknowledgments

- Thanks to the creators of React, TypeScript, and Firebase for their awesome tools.

---

Feel free to reach out if you have any questions or need further assistance at mariferalcon@gmail.com. Happy coding!
