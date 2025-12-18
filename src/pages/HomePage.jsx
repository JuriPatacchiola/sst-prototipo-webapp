import Card from "../components/Card";
import travels from "../data/travels";

export default function HomePage() {

    <travels />;

    return (
        <>
            <div className="container pt-5 pb-5 my-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                    {travels.map((thisTravel) => (
                        <Card
                            key={thisTravel.id}
                            destination={thisTravel.destination}
                            start_date={thisTravel.start_date}
                            end_date={thisTravel.end_date}
                            description={thisTravel.description}
                            path={`/detail/${thisTravel.id}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}