'use client'
import React, { useState, useEffect } from 'react';
import { GoTrash } from 'react-icons/go';

export default function WTL() {
    const [idUser, setIdUser] = useState([localStorage.getItem("idTargetUser")]);

    const [wantToLearns, setWantToLearn] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/wtl?id=${idUser}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setWantToLearn(data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const [interets, setInterets] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/interets`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setInterets(data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    //#region DELETE
    const [showDelete, setShowDelete] = React.useState(false);
    const [idWTL, setIdWTL] = useState([]);

    const deleteWTLTrigger = (idWTL) => {
        setShowDelete(true);
        setIdWTL(idWTL);
    }
    const deleteWTL = () => {
        console.log(`http://localhost:3001/delete/objectif?id=${idWTL}`);

        fetch(`http://localhost:3001/delete/objectif?id=${idWTL}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setShowDelete(false);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }
    //#endregion
    
    //#region ADD
    const [showAdd, setShowAdd] = React.useState(false);
    const [interet, setInteret] = useState([]);
    const [description, setDescription] = useState([]);

    const handleInteretChange = (event: React.ChangeEvent<HTMLSelectElement>) => {setInteret(event.target.value);}
        
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {setDescription(event.target.value);}

    const addWTL = () => {
        console.log(`http://localhost:3001/add/objectif?user=${idUser}&interet=${interet}&description=${description}`);

        fetch(`http://localhost:3001/add/objectif?user=${idUser}&interet=${interet}&description=${description}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setShowAdd(false);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }
    //#endregion

    return (
        <div>
            <section className="container px-4 mx-auto">
        <div className="flex flex-col">
        <h1 className="flex items-center justify-center mt-10 mb-3 text-3xl">
            Envie d'apprendre
            <button onClick={() => setShowAdd(true)} className="px-6 py-2 ml-4 tracking-wide text-white capitalize transition-scale duration-300 transform rounded-md hover:scale-110 focus:outline-none ">
                <img className="object-cover w-10 h-10" src="Logo/AddLogo.png" alt="logo" /> 
            </button>
        </h1>
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="bg-dark-blue px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400 w-1/8">
                                        Connaissance
                                    </th>
                                    <th scope="col" className="bg-dark-blue px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400 w-4/5">
                                        Description
                                    </th>
                                    <th scope="col" className="bg-dark-blue px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400 w-1/5">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                {wantToLearns.map(wtl => (
                                    <tr key={wtl}>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                                    <img className="object-cover w-10 h-10 " src={wtl.iconInteret} alt="logo" /> 
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{wtl.descriptionObjectif}</td>
                                    <td className="px-4 py-4 text-sm">
                                        <div className="flex items-center gap-x-6">
                                        <button
                                            onClick={() => deleteWTLTrigger(wtl.idObjectif)} 
                                            className="flex items-center px-6 py-2 ml-4 tracking-wide text-red capitalize transition-scale duration-300 transform rounded-md hover:scale-110 focus:outline-none">
                                            <GoTrash size={30} style={{ color: "red"}} />
                                        </button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            </section>
            {showAdd ? (
            <>
            <div
                className="fixed inset-0 z-10 overflow-y-auto" 
                aria-labelledby="modal-title" role="dialog" aria-modal="true"
            >
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                Ajouter une WTL
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Ajouter une WTL pour étoffer votre profile !
                            </p>

                            <form className="mt-4" action="#">
                                    <label className="block mt-3">
                                        <select onChange={handleInteretChange} name="interets" id="interets" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300">
                                        <option value="">Sélectionner un interet</option>
                                        {interets.map(interet => (
                                            <option key={interet.idInteret} value={interet.idInteret}>{interet.libelleInteret}</option>
                                        ))}
                                        </select>
                                    </label>

                                    <label className="block mt-3">
                                        <input onChange={handleDescriptionChange} type="text" name="description" id="description" placeholder="Description" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                    </label>

                                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                        <button type="button" onClick={() => setShowAdd(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                            Retour
                                        </button>

                                        <button type="button" onClick={addWTL} className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                            Ajouter
                                        </button>
                                    </div>
                                </form>
                        </div>
                </div>
            </div>
            </>
            ) : null}
            {showDelete ? (
    <>
    <div
        className="fixed inset-0 z-10 overflow-y-auto" 
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
    >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                    <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                        Suppression d'un objectif
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Êtes vous sure de vouloir supprimer cet objectif ?
                    </p>

                    <form className="mt-4" action="#">
                        <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                            <button type="button" onClick={() => setShowDelete(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Non
                            </button>

                            <button type="button" onClick={deleteWTL} className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Oui
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