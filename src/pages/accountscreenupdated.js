import React from "react";

import {useEffect} from "react";

import stickHead from '../assets/stickHead.png';

import { useLocation } from 'react-router-dom';

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
import { useNavigate } from "react-router-dom";
// import { format, addMonths, isPast, parseISO } from 'date-fns'; 

import "./accountscreen.css";

function AccountScreenUpdated(){
    
    // rename useNavigate function to navigate
    let navigate = useNavigate();

    // make our navigate home path/function
    const goHome = () => {
        let homePath = '/';
        navigate(homePath);
    }



    // Constant for the time, 12 hr format
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour12: true}));
    // Constant for the date
    const [date, setDate] = useState(new Date().toLocaleDateString());

    // use effect to continually update the date and the time every 1000 ms = 1 second
    useEffect(() => {
        const intervalId = setInterval(() => {
            // temp string for the date that will be used to reassign the date
            const tempDate = new Date().toLocaleDateString();
            setDate(tempDate);

            // temp string for the time that will be used to reassign the time
            const tempTime = new Date().toLocaleTimeString([], { hour12: true});
            setTime(tempTime);
        }, 1000)

        return () => {clearInterval(intervalId);}
    }, []);


    const location = useLocation();
  const userDetails = location.state?.userDetails || {};


    // const [checkedOutBooks, setCheckedOutBooks] = useState([
    //     {
    //       id: 1,
    //       image: "hungerGames",
    //       title: "The Hunger Games",
    //       dueDate: new Date('2023-10-16'), // Use the Date object for dates
    //       status: "No Fees",
    //       Renew: "Available"
    //     },
    //     {
    //         id: 2,
    //         image: "greenEggs",
    //         title: "Green Eggs and Ham",
    //         dueDate: new Date('2023-10-16'), // Use the Date object for dates
    //         status: "Overdue!",
    //         renew: "Unavailable",
    //         lateFees: "$1.10" 
    //       },
    //       {
    //         id: 3,
    //         image: "leviathan",
    //         title: "Leviathan Wakes",
    //         dueDate: new Date('2023-10-16'), // Use the Date object for dates
    //         status: "No Fees",
    //         Renew: "Available"
    //       },
    //   ]);

    // make our navigate home path/function
    const goeditdetails = () => {
        let homePath = '/accountScreen/editdetails';
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

    // const renewBook = (bookId) => {
    //     setCheckedOutBooks(checkedOutBooks.map(book => {
    //         if (book.id === bookId) {
    //             // Check if the book is not overdue
    //             if (!isPast(parseISO(book.dueDate)) && book.status.toLowerCase() === 'available') {
    //                 return {
    //                     ...book,
    //                     dueDate: format(addMonths(new Date(), 1), 'MM/dd/yyyy') // Extend due date by one month from today
    //                 };
    //             }
    //         }
    //         return book;
    //     }));
    // };

    // const calculateLateFees = (dueDate) => {
    //     // Your logic to calculate late fees based on the dueDate and current date
    //     // For example, a flat rate per day after the due date
    //     const lateDays = isPast(parseISO(dueDate)) ? Math.floor((new Date() - parseISO(dueDate)) / (1000 * 60 * 60 * 24)) : 0;
    //     return lateDays * 0.10; // Assume $0.10 per day
    // };

    return(
    
        <div>
            <div className="header">

                <div className = "date">
                    <h1>{date}</h1>
                </div>

                <div className="time">
                <h1>{time}</h1>
                </div>


                <div className="hhl-logout">
                    <button className="hhl-logoutButton" onClick={goHome}> Logout</button>
                </div>

                <h1 className="GreetingMessage" style={{ fontSize: 20 }}>Welcome {userDetails.name}!</h1>

                <div className='headerButtons'>
                    <button className="hhl-cplButton" onClick={goHome} ><img src={cplLogo}  width={200} height={100} /></button>
                    <button className="hhl-language" onClick={goHome}> Language</button>
                    <button className="profile" ><img src={stickHead}  width={100} height={100} /></button>
                </div>


            </div>
            <div>
            <div class="left-container">
                <div class="left-box">
                    <div class="book-info">
                         <img src={hungerGames} alt="Book Cover"/>
                        <div class="text-details">
                            <h3>The Hunger Games</h3>
                            <p><strong>Date Checked out:</strong> 09/23/2023</p>
                            <p><strong>Due Date:</strong> 10/16/2023</p>
                            <p><strong>Status:</strong> No Fees</p>
                            <p><strong>Renew:</strong> Available</p>
                            <button class="renew-button">Renew</button>
                        </div>
                    </div>
                    <div class="book-info">
                        <img src={greenEggs} alt="Book Cover"/>
                        <div class="text-details">
                            <h3>Green Eggs and Ham</h3>
                            <p><strong>Date Checked out:</strong> 09/23/2023</p>
                            <p class="late"><strong>Due Date:</strong> 09/19/2023</p>
                            <p class="late"><strong>Status:</strong> Overdue!</p>
                            <p class="late"><strong>Renew:</strong> Unavailable</p>
                            <p class="late"><strong>Late Fees:</strong> $1.10</p>
                            <button class="renew-button">Renew</button>
                        </div>
                    </div>
                    <div class="book-info">
                        <img src={leviathan} alt="Book Cover"/>
                        <div class="text-details">
                            <h3>Leviathan Wakes</h3>
                            <p><strong>Date Checked out:</strong> 09/23/2023</p>
                            <p><strong>Due Date:</strong> 10/16/2023</p>
                            <p><strong>Status:</strong> No Fees</p>
                            <p><strong>Renew:</strong> Available</p>
                            <button class="renew-button">Renew</button>
                        </div>
                    </div> 
                    
                </div>
                <div class="left-box1">
                    <p><strong>Items Checked Out:</strong> 1</p>
                    <p><strong>Items Overdue:</strong> 1</p>
                    <p><strong>Total Late Fees </strong> $1.10</p>
                </div>

            </div>
                <div class="right-box-container">
                <div className="right-box">
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
                    <div class="right-box1"><p class="item-reserved"><strong>Items Favortied:</strong> {favouriteBooks.length}</p></div>
                </div>
                <div class="profile-container">
                    <div class="profile-icon"></div>
                    <div class="profile-details">
                        <p><strong>Name:</strong> {userDetails.name}</p>
                        <p><strong>Date of Birth:</strong> {userDetails.dob}</p>
                        <p><strong>Email:</strong> {userDetails.email}</p>
                        <p><strong>Main Branch:</strong> {userDetails.mainBranch}</p>
                        <p><strong>Library Card#:</strong> 1234567890</p>
                        <p><strong>Pin#:</strong> ******</p>
                        <p><strong>Payment:</strong> Mastercard ending in 1234</p>
                        <button class="edit-details-button" onClick={goeditdetails}>Edit Details</button>
                    </div>
                </div>
            </div>
            <div className="footer">
            <div className='footerButtons'>
                    <button className="mapbutton">Back</button>
                    <button className="assistancebutton">Request Assistance</button>
            </div>
        </div>
        </div>
    )
}

export default AccountScreenUpdated;