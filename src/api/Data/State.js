import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'states';
const _primaryKey = 'state_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (state, callback) => {
    state = AddDetaultValues(state, 'area_id', PreFix.State, state.created_by);
    return await Add(_tableName, _primaryKey, state, callback);
}

let Update = async (key, state, callback) => {
    state = UpdateDetaultValues(state, state.modified_by);
    return await Edit(_tableName, _primaryKey, key, state, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion