import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'users';
const _primaryKey = 'user_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (user, callback) => {
    return await Add(_tableName, user, callback);
}

let Update = async (key, user, callback) => { 
    return await Edit(_tableName, _primaryKey, key, user, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion