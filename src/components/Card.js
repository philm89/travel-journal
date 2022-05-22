import pin from '../images/pin.png'

function Card(props) {
    return (
        <div>
            <div className='container'>
                <div>
                    <img src={require(`../images/${props.img}`)} className="card--photo" />
                </div>
                <div className="card--stats">
                    <span className='card--country'>
                        {/* <img src={require(`../images/${pin}`)} /> */}
                        {props.country}
                    </span>
                    <span className='card--mapsLink'><a href={props.googleMaps}>View on Google Maps</a></span><br />
                    <span className='cards--title'>{props.title}</span><br />
                    <span className='cards--date'>{props.startDate} - {props.endDate}</span><br />
                    <span className='cards--description'>{props.description}</span>
                </div>
            </div>
            <hr className='lineDivider' />
        </div>
    )
}

export default Card