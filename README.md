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


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

 Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
