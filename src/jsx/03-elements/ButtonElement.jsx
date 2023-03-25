export const ButtonElement = ({title, alt, img, func}) => {
    return (
        <button className="board-actions__button" onClick={ func } type="button" title={title}>
            <img src={img} alt={alt} />
        </button>
    )
}
