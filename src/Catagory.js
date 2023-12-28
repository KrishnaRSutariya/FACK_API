import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import { useSelector } from 'react-redux';

const Catagory = () => {

    const { catagory } = useParams();
    // console.log(catagory);

    const data = useSelector(state => state.counter.data);
    // console.log(data);

    var arr = [];

    for (var i = 0; i < data.length; i++) {
        // console.log("Catagory :-"+ data[i].category);
        if (data[i].category == catagory) {
            arr.push({ id: data[i].id, title: data[i].title, description: data[i].description, price: data[i].price, category: data[i].category, image: data[i].image, rating: { rate: data[i].rating.rate, count: data[i].rating.count } });
        }
        else if(catagory=="Home")
        {
            arr=data;
        }
    }
    // console.log(arr);
    return (
        <>
            <Header />
            <div className="card-body">
                <div class="main">
                    <h1>Responsive Card Grid Layout</h1>
                    <ul class="cards">
                        {
                            arr.map((val, i) => {

                                var full = [];
                                var half = [];
                                for (var k = 0; k < 5; k++) {
                                    if (k < val.rating.rate) {
                                        full.push('1');
                                    }
                                    else {
                                        half.push('0');
                                    }
                                }
                                return (
                                    <li class="cards_item" key={i}>
                                        <div class="card">
                                            <div class="card_image"><Link to={`/Single_Card/${val.id}`}><img src={val.image} /></Link></div>
                                            <div class="card_content">
                                                <h2 class="card_title"><div className='title'>{val.title}</div><div className='price'>{val.price} $</div></h2>
                                                <p class="card_text">{val.description}</p>
                                                <h2 class="text-center">
                                                    {
                                                        full.map((icon, i1) => {
                                                            return (
                                                                <AiFillStar key={i1} />
                                                            )
                                                        })
                                                    }
                                                    {
                                                        half.map((icon, i2) => {
                                                            return (
                                                                <AiOutlineStar key={i2} />
                                                            )
                                                        })
                                                    }
                                                    &nbsp;[{val.rating.count}]
                                                </h2>
                                                <Link to={`/Single_Card/${val.id}`}><button class="btn card_btn">Read More</button></Link>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

                <h3 class="made_by">Made with ♡</h3>
            </div>
        </>
    )
}

export default Catagory;