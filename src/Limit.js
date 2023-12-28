import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Limit = () => {

    const { limit } = useParams();
    // console.log(limit);

    const data = useSelector(state => state.counter.data);
    // console.log(data);

    var arr = [];

    if (limit >= 1 && limit <= 20) {
        for (var i = 0; i < limit; i++) {
            arr.push(data[i]);
        }
    }
    else {
        arr = data;
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
                                var rate = val && val.rating.rate;
                                var full = [];
                                var half = [];
                                for (var k = 0; k < 5; k++) {
                                    if (k < rate) {
                                        full.push('1');
                                    }
                                    else {
                                        half.push('0');
                                    }
                                }
                                return (
                                    <li class="cards_item" key={i}>
                                        <div class="card">
                                            <div class="card_image"><Link to={`/Single_Card/${val && val.id}`}><img src={val && val.image} /></Link></div>
                                            <div class="card_content">
                                                <h2 class="card_title"><div className='title'>{val && val.title}</div><div className='price'>{val && val.price} $</div></h2>
                                                <p class="card_text">{val && val.description}</p>
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
                                                    &nbsp;[{val && val.rating.count}]
                                                </h2>
                                                <Link to={`/Single_Card/${val && val.id}`}><button class="btn card_btn">Read More</button></Link>
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

export default Limit;