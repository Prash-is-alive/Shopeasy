import { useNavigate } from "react-router-dom";
import "./Category.scss";
import Tilt from "react-parallax-tilt";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <Tilt gyroscope={true}>
              <img
                src={
                  process.env.REACT_APP_STRIPE_APP_DEV_URL +
                  item.attributes.img.data.attributes.url
                }
                alt=""
              />
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
