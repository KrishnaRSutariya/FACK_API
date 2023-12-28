import { useSelector } from "react-redux";
import "./User_Card.css";

const UserCard = () => {
  const data = useSelector((state) => state.counter.data);
  return (
    <>
      <div className="user_card">
        <div class="user_container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" width="10%">ID</th>
                <th scope="col" width="10%">Image</th>
                <th scope="col" width="10%">Title</th>
                <th scope="col" width="10%">Price</th>
                <th scope="col" width="10%">Category</th>
                <th scope="col" width="10%">Description</th>
                <th scope="col" width="10%">Rating</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, i) => {
                return (
                  <tr key={i} className="vertical_center">
                    <th scope="row">{val.id}</th>
                    <td><img src={val.image} alt="" srcset="" width="75px" /></td>
                    <td>{val.title}</td>
                    <td>$ {val.price}</td>
                    <td>{val.category}</td>
                    <td>{val.description}</td>
                    <td>
                        <table cellPadding="5">
                            <tr>
                                <th>Rate :</th>
                                <td>{val.rating.rate}</td>
                            </tr>
                            <tr>
                                <th>Count :</th>
                                <td>{val.rating.count}</td>
                            </tr>
                        </table>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserCard;
