## Saas Plan Integration

This project is a SaaS application that provides user role-based functionalities for managing plans and user subscriptions. It incorporates Stripe for payment integration and offers different access levels for super-admin, admin, and standard users.

#### The primary functionalities 

Super Admin: Can manage plans and create admin users.

Admin: Can manage standard users based on purchased plans.

User: Access the application as per assigned roles and features.

```
Directory Structure
Saas-Plan-Management/
│
├── Backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── planController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   ├── models/
│   │   ├── Plan.js
│   │   ├── User.js
│   │   └── Payment.js
│   ├── routes/
│   │   ├── planRoutes.js
│   │   ├── userRoutes.js
│   │   ├── paymentRoutes.js
│   ├── utils/
│   │   ├── db.js
│   │   ├── stripe.js
│   ├── app.js
│   └── server.js
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminDashboard/
│   │   │   ├── SuperAdminDashboard/
│   │   │   ├── UserDashboard/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── PlanSelection.js
│   │   │   ├── Payment.js
│   │   ├── App.js
│   │   ├── api/
│   │   │   └── apiService.js
│   │   ├── utils/
│   │   │   ├── auth.js
│   │   │   ├── roleRedirect.js
│   │   ├── index.js
│   ├── package.json
```

### Backend Architecture
Database Models

### User Model (User.js)

Fields: name, email, password, role, plan, createdAt, updatedAt.

### Relationships:
plan: References the Plan model.

### Plan Model (Plan.js)

Fields: name, price, maxUsers, features

### Payment Model (Payment.js)

Fields: user, amount, status, stripeSessionId, createdAt.

## API Endpoints

### Authentication


```
POST	/api/users/register	Register new users
POST	/api/auth/login	User login

Plan Management

POST	/api/plans	Add a new plan (Super Admin)

GET	/api/plans	View all plans
PUT	/api/plans/:id	Edit a plan (Super Admin)
DELETE	/api/plans/:id	Delete a plan (Super Admin)
```

### User Management


```
POST	/api/users/admin	Create an admin (Super Admin)
POST	/api/users/user	Create a user (Admin)
GET	/api/users	List all users (Admin/Super Admin)

Stripe Payments
POST	/api/payment/checkout	Create
Stripe session
GET	/api/payment/status	Check payment
status
```

#### Frontend Architecture

Login/Register: Forms for authentication.

Dashboard Components:

SuperAdminDashboard: Manage plans and view admin usage.

AdminDashboard: Add users and view plan limits.

UserDashboard: View profile and 
available features.

PlanSelection: Display plans for purchase.

Payment: Integrate Stripe for checkout.


### Super Admin Workflow

Install dependencies:
```
npm install
```
Set environment variables in .env:
makefile
```
MONGO_URI=<your-mongo-uri>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
```
Start the server:
```
npm start
```

Frontend
Navigate to Frontend/.
Install dependencies:
```
npm install
```
Set environment variables in .env:
```
REACT_APP_BACKEND_URL=http://localhost:5000/api
```
Start the React app:

```
npm start
```
### Testing
#### Postman

Test all API endpoints with Postman.
Use Stripe's test keys to simulate payment flows.
Browser
Access the frontend and test role-specific dashboards.
Test plan selection and payment workflows.
##### Technologies 

Backend: Node.js, Express.js, MongoDB, Stripe API.

Frontend: React, Context API for state management.

Authentication: JSON Web Tokens (JWT).

Database: MongoDB Atlas.
