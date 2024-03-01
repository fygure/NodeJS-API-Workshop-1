const UserModel = require('../models/UserModel');

async function getAllUsersWithProcessing() {
    try {
        const { users } = await UserModel.getAllUsers();

        //Example processing: Filter users based on a criterion
        const processedUsers = users.filter(user => user.age <= 40);

        return processedUsers;
    } catch (error) {
        console.error('Error processing users:', error);
        throw error;
    }
}

module.exports = {
    getAllUsersWithProcessing,
};