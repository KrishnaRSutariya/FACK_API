import { useSelector } from 'react-redux';
import './SingleCard.css';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const SingleCard = () => {

    const data = useSelector(state => state.counter.data);
    const { id } = useParams();

    var arr = [];
    for (var i = 0; i < data.length; i++) {
        if (i + 1 == id) {
            arr = data[i];
        }
    }
    console.log(arr);
    var full = [];
    var half = [];
    for (var k = 0; k < 5; k++) {
        if (k < arr.rating.rate) {
            full.push('1');
        }
        else {
            half.push('0');
        }
    }

    return (
        <>
            <div className="single-body">
                <div class="single-container">
                    <div class="card">
                        <div class="imgBx">
                            <img src={arr.image} alt="" />
                        </div>
                        <div class="contentBx">
                            <div class="content">
                                <h2>{arr.title}</h2>
                                <h6>[ {arr.category} ]</h6>
                                <h3>
                                    <div className='star'>
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
                                        &nbsp;[{arr.rating.count}]
                                    </div>
                                    <div>
                                        $ {arr.price}
                                    </div>
                                </h3>
                                <p>{arr.description}</p>
                                <a href="/">GO - BACK</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCard;