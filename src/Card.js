import { useSelector } from 'react-redux';
import './Card.css';
import { AiFillStar, AiOutlineStar }  from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Card = () => {

    const data = useSelector(state => state.counter.data);
    console.log(data);
    
    return (
        <>
            <div className="card-body">
                <div class="main">
                    <h1>Responsive Card Grid Layout</h1>
                    <ul class="cards">
                        {   
                            data.map((val, i) => {

                                var full = [];
                                var half = [];
                                for(var k=0;k<5;k++)
                                {
                                    if(k<val.rating.rate)
                                    {
                                        full.push('1');
                                    }
                                    else
                                    {
                                        half.push('0');
                                    }
                                }
                                return (
                                    <li class="cards_item" key={i}>
                                        <div class="card">
                                            <div class="card_image"><Link to={`/Single_Card/${val.id}`}><img src={val.image} /></Link></div>
                                            <div class="card_content">
                                                <h2 class="card_title"><div className='title'>{val.title}</div><div className='price'>{val.price} $</div></h2>
                                                {/* <h2 class="card_title">{val.price}</h2> */}
                                                <p class="card_text">{val.description}</p>
                                                <h2 class="text-center">
                                                    {
                                                        full.map((icon,i1)=>{
                                                            return(
                                                                <AiFillStar key={i1}/>
                                                            )
                                                        })
                                                    }
                                                    {
                                                        half.map((icon,i2)=>{
                                                            return(
                                                                <AiOutlineStar key={i2}/>
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
};

export default Card;