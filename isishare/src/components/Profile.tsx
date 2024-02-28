'use client'
import React, { useState, useEffect } from 'react';

export default function Profile() {
    const [name, setName] = useState([]);
    const [points, setPoints] = useState([]);

    const [showModal, setShowModal] = React.useState(false);
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

    useEffect(() => {
        fetch('http://localhost:3001/users?id=1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setName(data[0].nameUser);
                setPoints(data[0].pointsUser);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);
    return (
        <div>
            <div className="ml-12 w-1/5 max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 float-right">
                <img
                className="object-cover object-center w-full h-56"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"/>
        <div className="flex items-center px-6 py-3 bg-gray-900">
            <h1 className="mx-3 text-lg font-semibold text-white">Nom : {name}</h1>
            <br />
            <h1 className="mx-3 text-lg font-semibold text-white">Points : {points}</h1>
        </div>

            <div className="px-6 py-4">
                {contacts.map(contact => (
                    <div key={contact}>
                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <img className="object-cover w-10 h-10" src={contact.iconSource} alt="discord-logo" /> 
                            <h1 className="px-2 text-sm">{contact.informationContact}</h1>
                        </div>
                    </div>
                ))}
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <button onClick={() => setShowModal(true)} className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Ajouter un contact
    </button>
            </div>
        </div>
    </div>

    {showModal ? (
    <>
    <div
        className="fixed inset-0 z-10 overflow-y-auto" 
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
    >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                    <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                        Ajouter un contact
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Ajouter un moyen de contact à votre profile !
                    </p>

                    <form className="mt-4" action="#">
                        <label className="block mt-3" >
                            <input type="email" name="email" id="email" placeholder="Type" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label className="block mt-3">
                            <input type="email" name="email" id="email" placeholder="Pseudo" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                            <button type="button" onClick={() => setShowModal(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Retour
                            </button>

                            <button type="button" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Ajouter
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    </>
    ) : null}
        </div>
    )
}