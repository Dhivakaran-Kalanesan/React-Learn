

export default ({props}) => {
    return <>
        <div className="card h-100">
            <div className="card-image-wrapper">
                <img className='card-image' src={props.img} alt="user" />
            </div>
            <div className="card-detail-wrapper">
                <h4 className="fw-bold mt-2 p-0 m-0">{props.name}</h4>
                <p className="text-muted m-0 p-0">{props.city}</p>
            </div>
        </div>
    </>
}