'use client'
import React, { useState, useEffect } from 'react';

export default function Profile() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/contacts?id=1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setContacts(data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
    <div className="ml-12 w-1/5 max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 float-right">
        <img
        className="object-cover object-center w-full h-56"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"/>

        <div className="flex items-center px-6 py-3 bg-gray-900">
            <h1 className="mx-3 text-lg font-semibold text-white">Nom / Prenom</h1>
        </div>

            <div className="px-6 py-4">


                {contacts.map(contact => (
                    <div key={contact}>
                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <img className="object-cover w-10 h-10" src="Logo/DiscordLogo.png" alt="discord-logo" /> 
                            <h1 className="px-2 text-sm">Discord BIS</h1>
                        </div>
                    </div>
                ))}



            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <img className="object-cover w-10 h-10" src="Logo/DiscordLogo.png"></img>
                <h1 className="px-2 text-sm">Discord</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <img className="object-cover w-10 h-10" src="Logo/InstagramLogo.png"></img>
                <h1 className="px-2 text-sm">Instagram</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <img className="object-cover w-10 h-10" src="Logo/LinkedinLogo.png"></img>
                <h1 className="px-2 text-sm">Linkedin</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <img className="object-cover w-10 h-10" src="Logo/MailLogo.png"></img>
                <h1 className="px-2 text-sm">Mail</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <img className="object-cover w-10 h-10" src="Logo/TeamsLogo.png"></img>
                <h1 className="px-2 text-sm">Teams</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <img className="object-cover w-10 h-10" src="Logo/TelephoneLogo.png"></img>
                <h1 className="px-2 text-sm">Telephone</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <img className="object-cover w-10 h-10" src='Logo/XLogo.png'></img>
                <h1 className="px-2 text-sm">X</h1>
                <button className="ml-20 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">-</button>
            </div>

            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add contact</button>
            </div>
        </div>
    </div>
    )
}