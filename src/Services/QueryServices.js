const axios = require('axios');


export default {
    async getData(search) {
        const config = {
            method: 'get',
            url: `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=0&maxResults=40`
        };

        let res = await axios(config);
        return res.data;
    },

    async postData(url, data){
        const config = {
            method: 'post',
            data: data,
            url: url
        };
        let res = await axios(config);
        return res;
    }
}