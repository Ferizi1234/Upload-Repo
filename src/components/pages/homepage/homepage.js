import Button from "../../buttons/button";
import TextInput from "../../inputs/inputText";
import { useState, useEffect } from "react";
import "./homepage.css"
function Homepage(props) {
    const [products, setProducts] = useState([{ test: "test" }, { test: "test1" }]);
    const [usersData, setUsersData] = useState();
    const [onChange, setOnChange] = useState(false);
    const [onChangeGetUsers, setOnChangeGetUsers] = useState(false);

    useEffect(() => {
        if (onChange == true) {
            fetch("https://dummyjson.com/products")
                .then(response => response.json())
                .then(data => { console.log('data', data); setProducts(data); setOnChangeGetUsers(!onChange) })
                .catch(error => console.error(error));
        }
    }, [onChange]);

    useEffect(() => {
        if (onChangeGetUsers == true) {
            fetch("https://dummyjson.com/users")
                .then(response => response.json())
                .then(data => setUsersData(data), setOnChange(!onChangeGetUsers))
                .catch(error => console.error(error));
        }

    }, [onChangeGetUsers]);
    // console.log("data", data)
    // console.log("usersData", usersData)

    return (
        <div className="homepage_layout">
            <div className="container">

                <h1>Homepage</h1>
                <div className="inputs">
                    <Button className={"get_users_button"} setOnChange={setOnChangeGetUsers} state={onChangeGetUsers} label="Get Users" />
                    <Button className={"get_products_button"} setOnChange={setOnChange} state={onChange} label="Get Products" />
                </div>
                <div className="all_users">
                    {onChangeGetUsers == true ? 
                        usersData?.users?.map((el) => {
                            return (
                                <div className="user_card">
                                    <b><p>First Name: {el?.firstName}  </p></b>
                                    <b><p>Last Name:{el?.lastName} </p></b>
                                </div>
                            )
                        })
                        :

                        onChange == true ?
                            products?.products?.map((el) =>
                                // console.log('elements of products',el)
                                <>
                                    <h1>{el?.title}</h1>
                                </>
                            )

                            : products?.map((el) =>
                                // console.log('elements of products',el)
                                <>
                                    <h1>{el?.test}</h1>
                                </>
                            )}
                </div>
                {console.log("onChange", products)}
            </div>
        </div >

    )
}
export default Homepage;