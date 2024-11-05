export default function DataCard({ title, url, explanation }) {
    return(
        <article>
            <img className="bg-[length:200px_200px]" src={url} alt={title}/>
            <h3 className="text-lg font-semibold text-fuchsia-300">{title}</h3>
            <p>{explanation}</p>
        </article>
    );
}