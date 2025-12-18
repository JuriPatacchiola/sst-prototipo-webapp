import { useState } from "react"
import { useParams } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import travels from "../data/travels"
import users from "../data/users"

export default function DetailTravel() {

    const { id } = useParams() // ottengo id dall'URL

    const travelId = parseInt(id)
    const travelUsers = users.filter(user => user.travel_id === travelId)

    // stato iniziale: mostro tutti gli utenti già filtrati per il singolo viaggio
    const [displayedUsers, setDisplayedUsers] = useState(travelUsers)




    return (
        <>
            <div className="container mt-5">



                <h1 className="text-center mb-4 fw-bold text-uppercase">{travels[travelId - 1].destination} trip</h1>

                <div className="d-flex justify-content-center mb-5">
                    <div className="w-100" style={{ maxWidth: "600px" }}>

                        <SearchBar users={travelUsers} onSearchResults={setDisplayedUsers} />
                    </div>
                </div>
                {/* table */}
                <div className="table-responsive shadow-sm rounded">
                    <table className="table table-hover align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col" className="ps-3">#</th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Phone number</th>
                                <th scope="col" className="pe-3">ID Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedUsers.length > 0 ? (
                                displayedUsers.map(user => (
                                    <tr key={user.id}>
                                        <th className="ps-3">{user.id}</th>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td className="pe-3"><code>{user.id_code}</code></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-muted">
                                        Nessun partecipante trovato.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}