 React + Vite
 Abdul A Ahmad
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
 
Feature
Admin login (username: admin, password: admin)
- Add/update/delete car listings (protected)
- Image upload via Cloudinary
- Responsive dashboard UI


Frontend (project/):

1. cd project
2. npm install
3. npm run dev

Backend (server/):

1. cd server
2. npm install
3. Create a .env with:
   - MONGODB_URI=mongodb://localhost:27017/car-app
   - JWT_SECRET=car-app-secret-key
   - CLOUDINARY_CLOUD_NAME=...
   - CLOUDINARY_API_KEY=...
   - CLOUDINARY_API_SECRET=...
4. npm run dev


- Frontend: npm run dev | build | preview
- Backend: npm run dev | start

## User Flow

```mermaid
graph TD
    A[User Visits App] --> B[View Car Dashboard]
    B --> C{Want to Add Car?}
    C -->|Yes| D[Login as Admin]
    C -->|No| B
    D --> E[Enter Credentials]
    E --> F{Valid Credentials?}
    F -->|Yes| G[Access Admin Panel]
    F -->|No| H[Show Error]
    H --> D
    G --> I[Fill Car Details]
    I --> J[Upload Car Image]
    J --> K[Submit Car Listing]
    K --> L[Car Added to Dashboard]
    L --> B
    B --> M[View All Cars]
```

## Data Storage:
## MongoDb And Cloudinary
 MongoDB stores all the car information including:
Car details (make, model, year, price)
Image URLs (after Cloudinary processing)
User authentication data (for admin login)


## How Cloudinary Works in This Application

Cloudinary is a cloud-based service that handles image storage and processing. Here's how it works in our car listing app:
## Image Upload Process:
When an admin adds a new car and selects an image, the image is first temporarily stored on our server
The application then sends this image to Cloudinary's servers through their API
Cloudinary processes and stores the image securely in the cloud
## Image Processing:
Cloudinary automatically optimizes images for web use, reducing file size while maintaining quality
It generates a unique URL for each uploaded image
Images are organized in folders within your Cloudinary account
## Image Delivery:
When users view the car listings, the application uses the URLs provided by Cloudinary to display images
Cloudinary delivers images quickly through its content delivery network (CDN)
This ensures fast loading times regardless of the user's location
## Benefits:
Images are stored securely and won't take up space on our own servers
Automatic optimization reduces bandwidth usage
CDN delivery ensures fast loading times
Images are automatically formatted for different browsers
Easy to manage and organize images through Cloudinary's dashboard
## Security:
Only authenticated admins can upload images
The application uses secure API keys to communicate with Cloudinary
Images are private by default until made 

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

 Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
