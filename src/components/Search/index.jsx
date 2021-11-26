import './styles.css';

export const Search = (props) => {
    
    return (
        <input className="search-input" name="search" placeholder="Search by breed.."
        type="text" onChange={props.handleSearchUpdate} />
    )
}