import { useCallback, useEffect, useState } from "react";
import UsersList from "./components/UsersList";

//https://boolean-api-server.fly.dev/YOUR_GITHUB_USERNAME/contact

const ApiRequest = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
};

function UsersSection() {
    const [userData, setUserData] = useState([]);

    const getData = useCallback(async () => {
        const response = await fetch(
            "https://boolean-api-server.fly.dev/YOUR_GITHUB_USERNAME/contact",
            ApiRequest
        );
        const data = await response.json();
        console.log(data);
        setUserData([...data]);
    }, [setUserData]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <section>
            <h2>Users Section</h2>
            <div className="scroll-container">
                <UsersList data={userData} />
            </div>
        </section>
    );
}

export default UsersSection;
