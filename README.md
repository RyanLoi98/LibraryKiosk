# 📚 Library Interactive Kiosk Interface


## 📸 Screenshot of the Application

![Library Kiosk Screenshot](https://i.imgur.com/faV4h5u.png)

---

## 🎥 Watch the Demo Video

[![Watch the demo video](https://img.youtube.com/vi/8AlpN_8Rhks/0.jpg)](https://youtu.be/8AlpN_8Rhks)

---



**CPSC 481 – Fall 2023 (HCI Course)**
Group 2 – Tutorial T06
Developed by:
Ryan Loi · Michelle Loi · Alan Huynh · Jaron Baldazo · Rohan Chaudhary

## 📌 Summary

This project was developed as part of **CPSC 481 (Fall 2023)**, a Human-Computer Interaction (HCI) course at the University of Calgary. The goal was to design and prototype a **creative, intuitive, and user-friendly front-end interface**. We chose to **rebuild the Calgary Public Library’s interactive front-end kiosk system** focusing on improving **usability** and **accessibility**. This is a **front-end only** application with no back-end implementation, ensuring a direct focus on **HCI design principles**.

---

## 🚀 Project Setup

### 🔗 Online Demo

No setup required — just click the link to open the site: https://library-kiosk-mu.vercel.app/

### 🖥️ Local Setup (Submitted Code)

1. Download and unzip the project.
2. Navigate to the `library-app` folder.
3. Open a terminal and `cd` into the folder.
4. Ensure Node.js is installed on your machine.
5. Run `npm install`.
6. Run `npm start`.
7. The application will open in your default web browser.

---

## 🧭 System Operation Guide

The interface supports **mouse**, **keyboard**, and **touchscreen** input — with **touchscreen** being the preferred method (as used in library kiosks). Below are instructions for each major feature:

### 🔐 Login

1. Click the **Login** button (top right).
2. Enter any library card number using the pin pad.
3. Click **Enter**, then enter any PIN.
4. Click **Enter** again to access the main screen.

---

## 🌐 Features Overview

### 🌍 Language Toggle

* Hover over the **Language** button (top right) to view options.
* Currently, only **English** is supported.

---

### 📚 Weekly Recommendations Scroll Pane

* Scroll by **dragging**, using **arrow buttons**, or clicking **pagination dots**.
* Click a book (e.g., *The Hunger Games*) to view more info.
* Use the **CPL logo** to return home.

---

### 🗺️ Map Navigation

* Click the **Map** button (bottom left) to view **Level 0** of the Central Library.
* Use **L0–L4** tabs to view different levels.
* Return using **Back** or the **CPL logo**.

---

### 🔙 Back Button

* Present on all pages except the home screen.
* Returns to the previous page.

### 🏠 CPL Logo

* Clickable on all pages — always returns to the main screen.

---

### 🆘 Request Assistance

* Click the **Request Assistance** button (bottom right).
* Displays a popup confirming help is on the way.
* The button blinks until cleared (simulated with a timer).
* Close the popup via the "X" or **Close** button.

---

### 🔄 Return Book

* Click the yellow **Return Book** button.
* Scan and place the book in the kiosk slot.
* Click **Finish Returns** to complete the process.

---

### ✅ Checkout

1. Click the green **Checkout** button.
2. Click **Add Next Item** to simulate scanning.
3. Scroll to review items. Remove if needed.
4. Click **Finish Checkout** and choose a receipt option.
5. System auto-logs out after 10 seconds for security.

---

### 🔎 Search

1. Click on the **Search Bar**.
2. Use the virtual keyboard to enter a query (e.g., *The Hunger Games*).
3. Search is rejected if empty.
4. Results include books, audio, and movies.

---

## 🎯 Features From Search Results Page

### 🧪 Refine Results

* Use **Refine Results > Format > Book** to filter.

### ⭐ Rate, ❤️ Favorite, 📌 Place on Hold

* Click **stars** to rate (1–5).
* Click the **heart** icon to toggle favorites.
* Click **Place on Hold** to reserve or unreserve.

### 📍 Show on Map

* Click **Show on Map** to view book location.
* Map includes directions from your location.

### 📖 Book Information

* Click the book title to view:

  * Description
  * Ratings
  * Favorites
  * Hold
  * Location on map

### 📚 Find Another Library

* Click **Find Another Library**.
* Popup shows availability in other branches (green/red).
* Close via "X" or **Close**.

### 📂 Add to List

* Use dropdown to select a list to save the book.
* Dropdown turns yellow to confirm.

### ✍️ Create Review

* Click **Create Review**.
* Fill in name, rating, and comment.
* Submit to return to the book page.

### 📈 View More Recommendations

* Click **View More Recommendations**.
* Shows related books with summaries.

### 📃 User Lists

* Click on user-created lists (e.g., *Steven’s YA Books*).
* Click **View More Lists** for more.
* Use **Back** to return.

### 👤 Account / Profile

* Click the **avatar** at the top right.
* Displays personal info:

  * Name, email, DOB
  * Library card, PIN
  * Branch, payment method

### 📘 Checked Out Books

* Scrollable list of books currently borrowed.

---

## 🛠️ Technologies Used

This project was developed entirely on the **front-end** with the following technologies:

* **HTML** – Used for structuring the application’s content.
* **CSS** – Used for styling and responsive design.
* **JavaScript** – Core programming language used for dynamic interactions and logic.
* **React** – Front-end JavaScript library for building the user interface.
* **React Bootstrap** – A library that provides pre-built Bootstrap components for React.
* **React Router DOM** – For routing and navigation within the app.
* **React Slick** – Carousel library used for the weekly recommendations scroll pane.
* **React Simple Keyboard** – Virtual keyboard implementation.
* **Slick Carousel** – Used for the carousels and sliding content sections.
* **Bootstrap** – For responsive layout and grid system.