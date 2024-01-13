import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "Nguyen Lam",
            image: "https://media.istockphoto.com/id/487557586/photo/business-and-financial-district-on-saigon-riverbank.jpg?s=1024x1024&w=is&k=20&c=M9uo-vUn7ttPCj0cvi-xcRjmrpLyVvh9Z-8SUifClmg=",
            places: 3,
        },
    ];

    return <UsersList items={USERS} />;
};

export default Users;
