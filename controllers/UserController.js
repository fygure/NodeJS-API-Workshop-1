/*
- Controller orchestrates calls to multiple models or services.
- Controller prepares data to be displayed by the view.
*/
const UserModel = require('../models/UserModel');
const UserService = require('../services/UserService');
////////////////////////////////////////////////////////////////////////
async function getAllUsers(req, res) {
    try {
        //Uncomment to test
        //const users = await UserModel.getAllUsers(); //{}
        const usersProcessed = await UserService.getAllUsersWithProcessing();
        //console.log(users);
        return res.status(200).json(usersProcessed);
    } catch (error) {
        console.error('Error getting users:', error);
        return res.status(500).json({ error: 'Failed to get users' });
    }
}
////////////////////////////////////////////////////////////////////////
async function searchUsers(req, res) {
    try {
        const searchQuery = req.query.q;
        if (!searchQuery) {
            return res.status(400).json({ error: 'Search query required' });
        }
        const users = await UserModel.searchUsers(searchQuery);
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error searching for users:', error);
        return res.status(500).json({ error: 'Failed to search for users' });
    }
}
////////////////////////////////////////////////////////////////////////
/*TODO: add more functions & dont forget to export the function*/

module.exports = {
    getAllUsers,
    searchUsers,
};