export default function SortToggle({asc, onToggle}){
    return(
        <button onClick={onToggle}>
            Sort {asc ? '↓ (A–Z)' : '↑ (Z–A)'}
        </button>
    )
}