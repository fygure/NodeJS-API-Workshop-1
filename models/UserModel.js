/*
- Model handles complex business logic directly relating to data
- Model enforces business rules of application
- Ex: Logic to calculate user's age based on their DOB
*/
const axios = require('axios');
////////////////////////////////////////////////////////////////////////
async function getAllUsers() {
    try {
        const url = 'https://dummyjson.com/users';
        //const params = '?skip=5&limit=10';
        const response = await axios.get(url);
        console.log(response);
        return response.data;

    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
////////////////////////////////////////////////////////////////////////
/*TODO: add more functions to call dummyjson*/


module.exports = {
    getAllUsers,
};