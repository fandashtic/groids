import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'carts';
const _primaryKey = 'cart_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (cart, callback) => {
    cart = AddDetaultValues(cart, 'cart_id', PreFix.Cart, cart.created_by);
    return await Add(_tableName, _primaryKey, cart, callback);
}

let Update = async (key, cart, callback) => {
    cart = UpdateDetaultValues(cart, cart.modified_by);
    return await Edit(_tableName, _primaryKey, key, cart, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion