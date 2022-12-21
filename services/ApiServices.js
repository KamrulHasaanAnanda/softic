import axios from "axios";

const apiServices = {}

apiServices.getAuthor = async() => {

    let res = await axios.get('users')
        .then(response => response.data)
        .catch(error => console.log(error))
        return res
}
apiServices.getPosts = () => {

    let res =  axios.get('posts')
        .then(response => response.data)
        .catch(error => console.log(error))
        return res
}
apiServices.getComments = async() => {

    let res = await axios.get('comments')
        .then(response => response.data)
        .catch(error => console.log(error))
        return res
}

export default apiServices