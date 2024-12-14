SaaS Plan Management with Stripe Integration
Overview
This project is a SaaS (Software as a Service) Plan Management system. It enables users to purchase SaaS plans with payment integration via Stripe. The platform provides the following features:

Super Admin: Manages SaaS plans and admins.
Admin: Manages users under their organization based on the purchased plan.
Users: Access limited to their organization as regular users.
Stripe Payment Integration: Enables purchasing plans with secure payment processing.
Features

1. Plan Management
Super Admin can:
Create, edit, and delete SaaS plans.
Monitor organization subscriptions.

2. User Management
Super Admin:
Adds and manages Admins.
Admin:
Adds and manages Users within the organization based on the purchased plan.

3. Stripe Integration
Seamlessly integrates with Stripe for payments.
Plan limitations and features are applied automatically post-purchase.

4. Authentication
Registration and login system with role-based access control.
Secure password hashing with bcrypt.
Tech Stack

Backend
Node.js
Express.js
MongoDB (via Atlas)
Stripe SDK

Frontend
React.js
React Router for navigation
File Structure
Backend

Backend/
│
├── config/
│   ├── db.js                    # Database connection
            
│
├── controllers/
│   ├── planController.js        # Plan management logic
│   ├── userController.js        # User management logic
│
├── middlewares/
│   ├── authMiddleware.js        # Authentication middleware
│   ├── roleMiddleware.js  
|   ├──maxUserCheckMiddleware.js
│
├── models/
│   ├── Plan.js                  # Plan model
│   ├── User.js                  # User model
│   ├── Payment.js               # Payment model
│
├── routes/
│   ├── planRoutes.js            # Plan-related routes
│   ├── userRoutes.js            # User-related routes
│   ├── paymentRoutes.js         # Payment-related routes
│  
│                    
├── app.js                       # Application entry point
├── package.json                 # Node.js dependencies and scripts
└── README.md                    # Backend README

Frontend

Frontend/
│
├── public/
│   ├── index.html               # Main HTML file
│
├── src/
│   ├── components/
│   │   ├── Header.js   # Form for Admin to add users
│   │   ├── Dashboard.js # Admin dashboard
│   │   ├──Checkout.js
|   |   ├──PlanList.js
│   ├── pages/
│   │   ├── OrderHistory.js          # Landing page
│   │   ├── Login.js             # Login page
│   │   ├── Register.js         # Role-based dashboard
│   │    
│   │
│   ├── App.js                   # App entry point with routes
│   ├── index.js                 # Main React entry point
│                  
├── package.json                 # React dependencies and scripts
└── README.md                    # Frontend README
Setup and Installation
1. Backend Setup
Clone the repository and navigate to the Backend directory.
bash
Copy code
git clone <repository-url>
cd Backend
Install dependencies.
npm install
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
STRIPE_SECRET_KEY=sk_test_<your-secret-key>
JWT_SECRET=your-jwt-secret
Start the serverserver. 
npm start
3. Frontend Setup
Navigate to the Frontend directory.
cd ../Frontend
Install dependencies.
npm install
npm start
Usage
1. Super Admin
Access http://localhost:3000/admin/users/superadmin to register as the first Super Admin.
Use the dashboard to create, edit, or delete plans.
2. Admin
Super Admin creates an Admin account.
Admin can log in and manage users under their organization.
3. User
Admin registers users who can log in and access limited features.
4. Stripe Checkout
Select a plan as Admin.
Proceed to checkout using Stripe.
Upon successful payment, the purchased plan is applied to the Admin's account.
