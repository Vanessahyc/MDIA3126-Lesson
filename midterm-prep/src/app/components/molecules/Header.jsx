import Button from '../atoms/Button'

export default function Header({ onClick, loading}) {

    return(
        <header>
            <h1>Welcome to my Api Atomic Design Midterm Prep</h1>
            <Button onClick={onClick} loading={loading}/>
        </header>
    );
}