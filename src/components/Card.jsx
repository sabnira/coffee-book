
const Card = ({coffee}) => {

    const {id, name, image, category, origin, type, rating, popularity} = coffee || {};

    return (
        <div>
            {name}
        </div>
    );
};

export default Card;