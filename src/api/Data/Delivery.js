import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';

const _tableName = 'deliveries';
const _primaryKey = 'delivery_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (delivery, callback) => {
    return await Add(_tableName, _primaryKey,delivery, callback);
}

let Update = async (key, delivery, callback) => { 
    return await Edit(_tableName, _primaryKey, key, delivery, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion