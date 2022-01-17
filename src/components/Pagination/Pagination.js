export default function Pagination({ currentPage, lastPage, setCurrentPage, data }) {
    const minusCurrentPage = setCurrentPage(previousCurrentPage => previousCurrentPage - 1);
    const plusCurrentPage = setCurrentPage(previousCurrentPage => previousCurrentPage - 1);
    return (
        <div>
            {currentPage !== 1 && <button onClick={minusCurrentPage}>Prev</button>}
            {data}
            {currentPage !== lastPage && <button onClick={plusCurrentPage}>Next</button>}
        </div>
    )
}