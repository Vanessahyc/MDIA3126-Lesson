export default function Button({ onClick, loading }) {

    return(
        <button 
            disabled={loading}
            onClick={onClick}
            className='border-white border-solid border-2 p-2'
        >
            {loading ? 'Fetch Astronomy Data...' : 'Display Content'}
        </button>
    );
}