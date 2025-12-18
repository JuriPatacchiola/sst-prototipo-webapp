import { useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useTravels } from "../contexts/TravelsContext";
import users from "../data/users";

export default function DetailTravel() {
    const { id } = useParams(); // ottengo id dall'URL

    const travelId = Number(id);
    const travelUsers = users.filter((user) => user.travel_id === travelId);

    const { list } = useTravels();
    const travelName = list.find((current) => current.id === travelId);

    // stato iniziale: mostro tutti gli utenti già filtrati per il singolo viaggio
    const [displayedUsers, setDisplayedUsers] = useState(travelUsers);

    return (
        <div className="container pt-5 pb-5 my-5">

            <h1 className="d-flex justify-content-center">
                {travelName.destination} trip
            </h1>
            <SearchBar users={displayedUsers} onSearchResults={setDisplayedUsers} />
            <div className="accordion" id="accordionExample">
                {travelUsers.map((user, i) => (
                    <div key={user.id} className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${i}`}
                                aria-expanded="false"
                                aria-controls={`#collapse-${i}`}
                            >
                                {user.first_name} {user.last_name}
                            </button>
                        </h2>
                        <div
                            id={`collapse-${i}`}
                            className="accordion-collapse collapse"
                            data-bs-parent='#accordionExample'
                        >
                            <div className="accordion-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>Email:</strong>
                                        <span className="text-secondary">{user.email}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>Codice ID:</strong>
                                        <span className="badge bg-light text-dark border">{user.id_code}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>Telefono:</strong>
                                        <span className="text-secondary">{user.phone}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}