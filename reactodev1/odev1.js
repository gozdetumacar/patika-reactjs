import axios from "axios";

export default async function getData(num) {

    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + num)

    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/" + num)

    console.log("user: ", user)

    console.log("post: ", post)
}

