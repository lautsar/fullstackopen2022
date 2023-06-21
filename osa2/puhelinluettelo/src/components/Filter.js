const Filter = ({ filterWith, handleFilter}) => {
    return (
        <div>
            Filter shown with <input value={filterWith} onChange={handleFilter}></input>
        </div>
    )
}

export default Filter