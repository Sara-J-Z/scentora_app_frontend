# 🌸 Scentora — Perfume & Makeup Store
![alt text](logo.png)

**Scentora** is a full-stack web application for discovering, browsing, and shopping for perfumes and makeup products. It features a clean and responsive UI, custom authentication, and a robust backend for managing brands, categories, products, and newsletter subscriptions.

## 📖 Description

Scentora was built to combine elegance and functionality, providing beauty enthusiasts with an online experience where they can explore curated fragrances and cosmetics.  
The app uses a React front-end and Django REST Framework back-end, communicating via RESTful APIs.

## 🎯 User Stories

### As a user, I want to:
- ✅ Register and log in securely.
- ✅ Browse products by category or brand.
- ✅ View detailed product pages with images, descriptions, and prices.
- ✅ Subscribe to the newsletter.
- ✅ Sign out securely.

### As an admin, I want to:
- ✅ Manage brands (with logos).
- ✅ Manage categories (with icons).
- ✅ Add, edit, or delete products.
- ✅ View newsletter subscriptions.

## ✨ Features

- 🔐 **Custom Authentication** (Django custom user model)
- 📦 **Product Management** by brand and category
- 📧 **Newsletter Signup** saved to backend

## 🗂 ERD (Entity Relationship Diagram)


## 🚀 Getting Started

### 🔹 Front-End (React + Vite)
**Deployed Link**: 

**Repository**:  
`git clone https://github.com/Sara-J-Z/scentora_app_frontend.git`  
`cd scentora_app_frontend/scentora-frontend`  
`npm install`  
`npm run dev`

Frontend will run at:  
`http://localhost:5173`



### 🔹 Back-End (Django REST Framework)

**Repository**:  
`git clone https://github.com/Sara-J-Z/E_commerce_Product_Catalog.git`  
`cd E_commerce_Product_Catalog/scentora_app`  


#### Installation:
```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Backend will run at:
`http://localhost:8000` 

🔑 API Endpoints

### 🧾 Authentication

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/register/` | Register a new user     |
| POST   | `/api/login/`    | Login and receive token |
| POST   | `/api/logout/`   | Logout user             |

---

### 🏷️ Brands

| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| GET    | `/api/brands/`       | List all brands    |
| POST   | `/api/brands/`       | Create a new brand |
| GET    | `/api/brands/:id/`   | Retrieve brand     |
| PUT    | `/api/brands/:id/`   | Update brand       |
| DELETE | `/api/brands/:id/`   | Delete brand       |

---

### 🗂️ Categories

| Method | Endpoint                | Description           |
|--------|-------------------------|-----------------------|
| GET    | `/api/categories/`      | List all categories   |
| POST   | `/api/categories/`      | Create a new category |
| GET    | `/api/categories/:id/`  | Retrieve category     |
| PUT    | `/api/categories/:id/`  | Update category       |
| DELETE | `/api/categories/:id/`  | Delete category       |

---

### 💄 Products

| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | `/api/products/`      | List all products    |
| POST   | `/api/products/`      | Create a new product |
| GET    | `/api/products/:id/`  | Retrieve product     |
| PUT    | `/api/products/:id/`  | Update product       |
| DELETE | `/api/products/:id/`  | Delete product       |

---

### 📨 Newsletter

| Method | Endpoint                   | Description             |
|--------|----------------------------|-------------------------|
| GET    | `/api/newsletter/`         | List all subscribers    |
| POST   | `/api/newsletter/`         | Add subscriber          |
| DELETE | `/api/newsletter/:id/`     | Remove subscription     |

## 🛠 Technologies Used

### 🖥️ Front-End

- [Vite](https://vitejs.dev/) — Fast frontend build tool  
- [React.js](https://reactjs.org/) — UI library  
- [React Router DOM](https://reactrouter.com/) — Routing  
- [Axios](https://axios-http.com/) — API requests  
- **CSS** — Styling  
- [Node.js](https://nodejs.org/) — JavaScript runtime  
- [npm](https://www.npmjs.com/) — Package manager  

---

### ⚙️ Back-End

- [Python 3](https://www.python.org/)  
- [Django](https://www.djangoproject.com/) — Web framework  
- [Django REST Framework](https://www.django-rest-framework.org/) — API layer  
- [Pillow](https://python-pillow.org/) — Image uploads  
- [django-cors-headers](https://pypi.org/project/django-cors-headers/) — CORS handling  
- **SQLite / PostgreSQL** — Databases

## 📂 Models Included
- **Custom User Model**
- **Product Model**
- **Brand Model** *(logo field for image)*
- **Category Model** *(icon field for image)*
- **Newsletter Model**

📦 Project Structure (Front-End)


📦 Project Structure (Back-End)



🔮 Next Steps

🛒 Implement shopping cart & checkout
🔍 Add product search 
💳 Integrate Stripe or PayPal
⭐ Enable user reviews & ratings



























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
