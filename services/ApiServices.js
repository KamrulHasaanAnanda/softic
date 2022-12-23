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
apiServices.getAlbums = async() => {

    let res = await axios.get('albums')
        .then(response => response.data)
        .catch(error => console.log(error))
        return res
}
apiServices.getPhotos= async() => {

    let res = await axios.get('photos')
        .then(response => response.data)
        .catch(error => console.log(error))
        return res
}
export default apiServices