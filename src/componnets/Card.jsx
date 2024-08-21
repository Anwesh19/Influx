
const Card = ({image,title,para,customStyle}) => {
  return (
    <div className="card bg-black" style={customStyle} >
        <img className="card-img-top w-25 ms-4 mt-4" src={image} alt="Card image"/>
        <div className="card-body ms-3">
        <h4 className="card-text ">{title}</h4>
        <p className="card-text text-secondary ">{para}</p>
        </div>
    </div>
  )
}

export default Card