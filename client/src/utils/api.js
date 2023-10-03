import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
};

//very very important Function!!!!!!!!
export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
            params
        );
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return <div>{err.message}</div>;
    }
};

// export const makePaymentRequest = axios.create({
//     baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
//     headers: {
//         Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
//     },
// });
