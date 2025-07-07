import { Link } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lift grid grid-cols-3">

            {
                categories.map(category => (
                    <Link key={category.category} 
                    
                    to={`/category/${category.category}`}
                    
                     role="tab" className="tab">
                        {category.category}
                    </Link>
                ))
            }

        </div>
    );
};

export default Categories;