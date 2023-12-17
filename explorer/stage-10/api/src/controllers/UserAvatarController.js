const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/DiskStorage');

class UserAvatarController {
    async update(request, response) {
        const user_id = request.user.id;
        const avatarFilename = request.file.filename;  

        const diskStorage = new DiskStorage();

        const user = await knex("users")
        .where({ id: user_id }).first(); // sem esse first da erro update users set 0

        if(!user) {
            throw new AppError('Only authenticated users can update the avatar.', 401);
        }

        if(user.avatar) {
            await diskStorage.deleteFile(user.avatar);
        }

        const filename = await diskStorage.saveFile(avatarFilename);
        user.avatar = filename;

        await knex("users").update(user).where({ id: user_id });

        return response.json(user);
    }
}

module.exports = UserAvatarController;