import './UserCard.css';

export const UserCard = (props)=> {
    return(
        <div className="card">
            <div className="card-header">
                <h1 className="firstName">{props.data.firstName}</h1>
                <h1 className="lastName">{props.data.lastName}</h1>
                <img src={props.data.image} alt="" />
            </div>
            <div className="card-body">
                <p className="gender"><b>Gender :{props.data.gender}</b></p>
                <p className="age"><b>Age :{props.data.age} </b></p>
                <p className="email"><b>Email : {props.data.email} </b></p>
                <p className="height"><b>Height : {props.data.height}cm</b></p>
                <p className="weight"><b>Weight : {props.data.weight}kg</b></p>
            </div>
        </div>
    )
}