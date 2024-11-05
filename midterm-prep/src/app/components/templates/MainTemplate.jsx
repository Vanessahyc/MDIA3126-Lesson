import Header from "../molecules/Header";
import DataDisplay from "../organisms/DataDisplay";

export default function MainTemplate({ fetchData, loading, data}) {
    return (
        <div className="m-8">
            <Header onClick={fetchData} loading={loading}/>
            <DataDisplay loading={loading} data={data}/>
        </div>
    )
}