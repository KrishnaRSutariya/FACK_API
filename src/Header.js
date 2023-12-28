import { GoThreeBars } from "react-icons/go";
import './Header.css';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Header = () => {

    const data = useSelector(state => state.counter.data);
    // console.log("Data :- "+data[5].category);
    // console.log(data.length);
    const arr = [];
    for(var index=0;index<data.length;index++)
    {
        if(!arr.includes(data[index].category))
        {
            arr.push(data[index].category);
        }
    }
    // console.log("Array :- "+arr);
    
    const { catagory } = useParams();
    var active;
    // console.log(catagory);
    if(catagory!=null)
    {
        active = catagory;
    }
    else
    {
        active = "Home";
    }

    return (
        <>
            <div className="header">
                <header class="topnav" id="myTopnav">
                    <a href={`/`}><img class="logo" src={require('./Images/download.webp')} alt="Smiley face" /></a>
                    <div class="navlist" id="navlist">
                        <a class="cursor0">&nbsp;</a>
                        <a className={(catagory=="Home")?'navoption header_hover':'navoption active '} href={`/Catagory/Home`}>Home</a>
                        {
                            arr.map((val,i)=>{
                                return(
                                    <a class="navoption" className={(catagory==val)?'header_hover':''} href={`/Catagory/${val}`} key={i}>{val}</a>
                                )
                            })
                        }
                        <a href="javascript:void(0);" class="icon" id="hamburger">
                            <i class="fa fa-bars"><GoThreeBars/></i>
                        </a>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header;