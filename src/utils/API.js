import axios from "axios";

let url = "https://randomuser.me/api/"


const getEmployees = function() {
        return axios.get(url);
    };

export default getEmployees;
