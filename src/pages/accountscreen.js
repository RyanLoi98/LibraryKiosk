import React from "react";

// Import components needed for page
import profileLogo from '../assets/profile-icon.png';
import cplLogo from '../assets/calgary-public-library-logo.png';
import hungerGames from '../assets/hunger.jpg';
import greenEggs from '../assets/greeneggs.jpg';
import leviathan from '../assets/leviathan.jpg';
import HomeFooter from '../components/home-footer';
import mockingJay from '../assets/mockingjay.jpg';
import memoryLegion from '../assets/memory.jpg';
import HomeHeaderLoggedIn from "../components/home-header-loggedin";
import  { useState } from "react";
import BackFooter from "../components/back-footer";
import { useNavigate } from "react-router-dom";
// import { format, addMonths, isPast, parseISO } from 'date-fns'; 

import "./accountscreen.css";

function AccountScreen(){

    // rename useNavigate function to navigate
    let navigate = useNavigate();

    const [checkedOutBooks, setCheckedOutBooks] = useState([
        {
          id: 1,
          image: hungerGames,
          title: "The Hunger Games",
          dueDate: new Date('2023-10-16'), // Use the Date object for dates
          status: "No Fees",
          renew: "Available"
        },
        {
            id: 2,
            image: greenEggs,
            title: "Green Eggs and Ham",
            dueDate: new Date('2023-10-16'), // Use the Date object for dates
            status: "Overdue!",
            renew: "Unavailable",
            lateFees: "$1.10" 
          },
          {
            id: 3,
            image: leviathan,
            title: "Leviathan Wakes",
            dueDate: new Date('2023-10-16'), // Use the Date object for dates
            status: "No Fees",
            renew: "Available"
          },
      ]);

    // make our navigate home path/function
    const goHome = () => {
        let homePath = '/accountScreen/editdetails';
        navigate(homePath);
    }

    const goViewRecommendationPage = () => {
        let homePath = '/viewRecommendations';
        navigate(homePath);
    }

    const [reservedBooks, setReservedBooks] = useState([
        // Example data for reserved books (you can replace this with your actual data)
        { id: 1, title: "Mocking Jay", status: "Reserved", availableDate: "10/16/2023", reservedLocation: "Central Library"},
    ]);

    const [favouriteBooks, setFavouriteBooks] = useState([
        { id: 2, title: "Memory Legion", status: "Available at Central Library", addedOn: "09/23/2023", bookLocation: "Science Fiction"},
        { id: 3, title: "Memory Legion", status: "Available at Central Library", addedOn: "09/23/2023", bookLocation: "Science Fiction"},
    ]);
    const removeBook = (id) => {
        // Filter out the book to be removed
        const updatedBooks = reservedBooks.filter((book) => book.id !== id);
        // Update the state with the updated list of books
        setReservedBooks(updatedBooks);
    };

    const removeBookFavourite = (id) => {
        // Filter out the book to be removed
        const updatedBooks = favouriteBooks.filter((book) => book.id !== id);
        // Update the state with the updated list of books
        setFavouriteBooks(updatedBooks);
    };

    const handleRenewal = (id) => {
        setCheckedOutBooks(prevBooks => {
            return prevBooks.map(book => {
                if (book.id === id && book.renew === "Available") {
                    // Calculate the new due date (1 month from today)
                    const newDueDate = new Date();
                    newDueDate.setMonth(newDueDate.getMonth() + 1);

                    // Update the book's due date
                    return { ...book, dueDate: newDueDate};
                }
                return book;
            });
        });
    };

    return(
    
        <div>
            <HomeHeaderLoggedIn />
            <div>
            <div class="left-container">
                <div class="left-box">
                    {checkedOutBooks.map(book => (
                        <div className={"book-info"} key={book.id}>
                            <img src={book.image} alt="Book Cover" />
                            <div className="text-details">
                                <h3>{book.title}</h3>
                                <p className={`status ${book.status === 'Overdue!' ? 'overdue' : ''}`}><strong>Date Checked out:</strong> 09/23/2023</p>
                                <p className={`due-date ${book.status === 'Overdue!' ? 'overdue' : ''}`}><strong>Due Date:</strong> {book.dueDate.toLocaleDateString()}</p>
                                <p className={`status ${book.status === 'Overdue!' ? 'overdue' : ''}`}><strong>Status:</strong> {book.status}</p>
                                {book.lateFees && (
                                    <p className={`late-fees ${book.status === 'Overdue!' ? 'overdue' : ''}`}><strong>Late Fees:</strong> {book.lateFees}</p>
                                )}
                                <p className={`renew ${book.status === 'Overdue!' ? 'overdue' : ''}`}><strong>Renew:</strong> {book.renew}</p>
                                <button className="renew-button" onClick={() => handleRenewal(book.id)} disabled={book.renew !== 'Available'}>
                                    Renew
                                </button>
                            </div>
                        </div>
                    ))}
                    
                </div>
                <div class="left-box1">
                    <p><strong>Items Checked Out:</strong> 1</p>
                    <p><strong>Items Overdue:</strong> 1</p>
                    <p><strong>Total Late Fees </strong> $1.10</p>
                </div>

            </div>
   
                <div class="right-box-container">
                <button className="recommendation-button-accountscreen" onClick={goViewRecommendationPage}>View/Recommend Items</button>
                <div className="right-box" style={{ marginTop: '20px' }}>
                        <p className="reserved">Reserved</p>
                        {reservedBooks.map((book) => (
                            <div className="book-info" key={book.id}>
                                <img src={mockingJay} alt="Book Cover" />
                                <div className="text-details">
                                    <h3>{book.title}</h3>
                                    <p><strong>Status:</strong> {book.status}</p>
                                    <p><strong>AvailableDate:</strong> {book.availableDate}</p>
                                    <p><strong>Reserved Location:</strong> {book.reservedLocation}</p>
                                    <button className="remove-button" onClick={() => removeBook(book.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                    <div class="right-box1"><p class="item-reserved"><strong>Items Reserved:</strong> {reservedBooks.length}</p></div>
                    <div class="right-box">
                    <p class="reserved">Favorites</p>
                    {favouriteBooks.map((book) => (
                    <div className="book-info" key={book.id}>
                                <img src={memoryLegion} alt="Book Cover" />
                                <div className="text-details">
                                    <h3>{book.title}</h3>
                                    <p><strong>Status:</strong> {book.status}</p>
                                    <p><strong>Added On:</strong> {book.addedOn}</p>
                                    <p><strong>Book Location:</strong> {book.bookLocation}</p>
                                    <button className="remove-button" onClick={() => removeBookFavourite(book.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                    ))}
                    </div>
                    <div class="right-box1"><p class="item-reserved"><strong>Items Favourited:</strong> {favouriteBooks.length}</p></div>
                </div>
                <div class="profile-container">
                    <div class="profile-icon"></div>
                    <div class="profile-details">
                        <p><strong>Name:</strong> Ryan Loi</p>
                        <p><strong>Date of Birth:</strong> January 01, 1998</p>
                        <p><strong>Email:</strong> ryan.loi@ucalgary.ca</p>
                        <p><strong>Main Branch:</strong> Central Library</p>
                        <p><strong>Library Card#:</strong> 1234567890</p>
                        <p><strong>Pin#:</strong> ******</p>
                        <p><strong>Payment:</strong> Mastercard ending in 1234</p>
                        <button class="edit-details-button" onClick={goHome}>Edit Details</button>
                    </div>
                </div>
            </div>
            <BackFooter />
        </div>
    )
}

export default AccountScreen;