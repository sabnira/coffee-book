import Banner from "../components/Banner";
import Heading from "../components/Heading";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Heading */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees fit in your taste.'}></Heading>

            {/* Categories tab section */}
            {/* Dynamic Nested Component */}
        </div>
    );
};

export default Home;