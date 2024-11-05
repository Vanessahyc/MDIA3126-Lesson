import Loading from "../atoms/Loading";
import Heading from "../atoms/Heading";
import DataCard from "../molecules/DataCard";

export default function DataDisplay({ loading, data }) {
    if (loading) return <Loading/>;

    return(
        <section>
            <Heading text="Display Data Below ▼"/>
            {data?.length > 0 ? (
                <div>
                    {
                        data.map((entry, i) => (
                            <DataCard
                                key={i}
                                title={entry.title}
                                url={entry.url}
                                explanation={entry.explanation}
                            />
                        ))
                    }
                </div>
            ) : (
                <div>No data fetched yet!</div>
            )}
        </section>
    );
}