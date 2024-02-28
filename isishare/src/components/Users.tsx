'use client'
import React, { useState, useEffect } from 'react';
export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <section className="container px-4 mx-auto">
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto">
                    <div className="inline-block py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg table-width">
                            <table className="max-w-1xl divide-y divide-gray-200 dark:divide-gray-700 td-width">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right bg-dark-blue text-white">
                                            <div className="flex items-center gap-x-3">
                                                <span>Name</span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right bg-dark-blue text-white" title="Cette colonne vise à mettre en lumière les objectifs individuels de chaque utilisateur. Si vous partagez un objectif similaire, je vous encourage à vous entraider. Si vous possédez les compétences nécessaires, n'hésitez pas à contacter la personne pour l'assister dans la réalisation de son objectif.">
                                            <button className="flex items-center gap-x-2">
                                                <span>Objectifs</span>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                                </svg>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right bg-dark-blue text-white">
                                            <button className="flex items-center gap-x-2">
                                                <span>Connaissances</span>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                                </svg>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right bg-dark-blue text-white" title="Plus l'utilisateur participe dans les forums et plus elle appartiens à de nombreux groupes, plus la personne aura de points.">
                                            <button className="flex items-center gap-x-2">
                                                <span>Points</span>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                                </svg>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right bg-dark-blue text-white">
                                            <button className="flex items-center gap-x-2">
                                                <span>Notation</span>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                                </svg>
                                            </button>
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right bg-dark-blue text-white">
                                            <button className="flex items-center gap-x-2">
                                                <span>Groups</span>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                                </svg>
                                            </button>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-light-gray bg-white text-black">
                                    {users.map(user => (
                                        <tr>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <div>
                                                            <h2>{user.nameUser}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm   whitespace-nowrap">{user.descriptionObjectif}</td>
                                            <td className="px-4 py-4 text-sm   whitespace-nowrap">{user.descriptionConnaissance}</td>
                                            <td className="px-4 py-4 text-sm   whitespace-nowrap">{user.pointsUser}</td>
                                            <td className="px-4 py-4 text-sm   whitespace-nowrap">{user.notationUser}</td>
                                            <td className="px-4 py-4 text-sm   whitespace-nowrap">{user.libelleGroupe}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}