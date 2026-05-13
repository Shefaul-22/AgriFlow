
# 🌱 AgriFlow – Smart Agriculture Marketplace Platform

AgriFlow is a modern agriculture-based web platform built with **Next.js (TypeScript)**. It connects **farmers, buyers, and delivery partners** in one ecosystem to simplify crop selling, buying, and live trading.

---

## 🚀 Features

### 🌐 Public Pages

* 🏠 Home
* 🛒 Marketplace
* ℹ️ About
* 🌾 Fertilizer Info
* 🌱 Crops & Diseases
* ⚙️ How It Works
* 🧑‍🌾 Services
* 📡 Live Crops
* 👨‍🔬 Agriculturists
* 🤖 AI Chatbot (Smart Assistant)

---

## 🤖 AI Chatbot – Smart Farming Assistant

AgriFlow includes an **AI-powered chatbot** that helps users get instant agriculture-related information and platform guidance.

### 💬 Capabilities

* 🌾 Crop information & farming tips
* 🐛 Disease identification (based on symptoms)
* 🌱 Fertilizer suggestions
* 💰 Market price guidance
* 🛍️ Help with buying & orders
* 🚚 Delivery assistance
* 📡 Live selling & bidding guidance

### 🧠 Smart Role-Based Support

* 👨‍🌾 **Farmer:** রোগ, ফসলের সমস্যা, সমাধান
* 🛍️ **Buyer:** দাম, product info, order help
* 🚚 **Delivery Partner:** delivery status, নির্দেশনা

### ⚙️ Chatbot Tech

* AI API: OpenAI
* API Route: `/api/chat`
* Model: GPT-based assistant
* UI: Floating chat widget (bottom-right)

---

## 🔐 User Roles & Dashboards

### 👨‍💼 Admin

* Manage users (delete users, change roles)
* Manage marketplace (delete products)
* View analytics:

  * Crop buying
  * Selling data
  * Delivery process
* Full system control

---

### 👨‍🌾 Farmer

* Add products to marketplace with full details
* Manage products:

  * View all (My Products)
  * Update
  * Delete
* Go live:

  * Show crops in real-time
  * Sell crops via live session

---

### 🛍️ Buyer

* Browse marketplace products
* Purchase via secure payment system
* View all orders in **My Orders**
* Participate in **Live Bidding**
* Buy crops from live sessions

---

### 🚚 Delivery Partner

* Receive assigned orders
* Deliver products to buyers
* Manage delivery workflow

---

## 📡 Live Features

* Real-time crop showcasing
* Live selling system
* Live bidding functionality

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (TypeScript)
* **Styling:** Tailwind CSS
* **Backend:** API Routes / Server-side logic
* **Database:** MySQL & Prisma
* **Authentication:** Role-based system
* **Version Control:** Git & GitHub
* **AI Integration:** OpenAI API

---

## 📦 Core Functionalities

* Role-based authentication & authorization
* Marketplace system
* Product management (CRUD)
* Order & payment system
* Live streaming & bidding system
* Analytics Dashboard
* Delivery tracking
* 🤖 AI chatbot assistance

## 🎨 Project Structure

```bash
client
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ prisma
│  ├─ migrations
│  │  ├─ 20260513104140_init
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ README.md
├─ src
│  ├─ actions
│  │  └─ server
│  │     └─ userActions.ts
│  ├─ app
│  │  ├─ about
│  │  │  └─ page.tsx
│  │  ├─ agriculturist
│  │  │  └─ page.tsx
│  │  ├─ api
│  │  │  ├─ auth
│  │  │  │  └─ [...nextauth]
│  │  │  │     └─ route.ts
│  │  │  ├─ chat
│  │  │  │  └─ route.ts
│  │  │  ├─ delivery
│  │  │  │  ├─ accept
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ active
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ assigned
│  │  │  │  │  └─ route.ts
│  │  │  │  └─ complete
│  │  │  ├─ register
│  │  │  │  └─ route.ts
│  │  │  └─ socket
│  │  │     └─ route.ts
│  │  ├─ components
│  │  │  ├─ Button.tsx
│  │  │  ├─ Chatbot.tsx
│  │  │  ├─ Dropdown.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ GoogleTranslate
│  │  │  │  └─ GoogleTranslate.tsx
│  │  │  ├─ live
│  │  │  │  ├─ ChatBox.tsx
│  │  │  │  ├─ FarmInfo.tsx
│  │  │  │  ├─ LiveRoom.tsx
│  │  │  │  ├─ LiveSidebar.tsx
│  │  │  │  └─ VideoPlayer.tsx
│  │  │  ├─ Logo.tsx
│  │  │  └─ Navbar.tsx
│  │  ├─ crop-dieseases
│  │  │  └─ page.tsx
│  │  ├─ Dashboard
│  │  │  ├─ admin
│  │  │  │  ├─ analytics
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ delivery-manage
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ manage-marketplace
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ manage-users
│  │  │  │  │  └─ page.jsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ buyer
│  │  │  │  ├─ cart
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ live-bidding
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ my-orders
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ crop-health
│  │  │  │  └─ page.tsx
│  │  │  ├─ delivery-partner
│  │  │  │  ├─ active-delivery
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ assigned
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ delivery-workflow
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ farmer
│  │  │  │  ├─ add-product
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ my-products
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ inventory
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ live
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [room]
│  │  │  │     └─ page.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ QueryProvider.tsx
│  │  │  └─ settings
│  │  │     └─ page.tsx
│  │  ├─ fertilizer
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ Home
│  │  │  ├─ CTA.tsx
│  │  │  ├─ FAQ.tsx
│  │  │  ├─ Features.tsx
│  │  │  ├─ Hero.tsx
│  │  │  └─ State.tsx
│  │  ├─ how-it-works
│  │  │  └─ page.tsx
│  │  ├─ icon.png
│  │  ├─ Images
│  │  │  ├─ apple.png
│  │  │  ├─ compost.png
│  │  │  ├─ compostcreate.png
│  │  │  ├─ Crop-Analysis.png
│  │  │  ├─ fertilixer.jpg
│  │  │  ├─ flower.jpg
│  │  │  ├─ Map.png
│  │  │  └─ tomato live.jpg
│  │  ├─ layout.tsx
│  │  ├─ lib
│  │  │  ├─ socket.ts
│  │  │  └─ webrtc.ts
│  │  ├─ live
│  │  │  ├─ page.tsx
│  │  │  └─ [room]
│  │  │     └─ page.tsx
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  ├─ marketplace
│  │  │  ├─ page.tsx
│  │  │  └─ [id]
│  │  │     └─ page.jsx
│  │  ├─ page.tsx
│  │  ├─ providers.tsx
│  │  ├─ register
│  │  │  └─ page.tsx
│  │  ├─ server
│  │  │  └─ socket-server.js
│  │  ├─ services
│  │  │  └─ page.tsx
│  │  └─ test
│  │     └─ page.tsx
│  ├─ lib
│  │  └─ prisma.ts
│  └─ providers
│     └─ Providers.tsx
├─ tailwind.config.ts
├─ tsconfig.json
└─ types
   └─ next-auth.d.ts

```