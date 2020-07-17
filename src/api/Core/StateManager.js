import { GetById, GetAll, Save, Update, Delete } from 'api/Data/State';

let IsStateValid = async (stateName, password, callback) => {
    return await GetById(stateName, async (state) => {
        if (state.password === password) {
            return await callback({
                'data': {
                    StateName: state.stateName,
                    StateDisplayName: state.firstName + ' ' + state.lastName,
                    StateType: state.stateType,
                    CompanyId: state.companyId,
                    StoreId: state.storeId,
                    StateProfileImage: state.profileImageUrl
                },
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let AddState = async (state, callback) => {
    return await Save(state, async (state) => {
        if (state) {
            return await callback({
                'data':state,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let UpdateState = async (key, state, callback) => { 
    return await Update(key, state, async (state) => {
        if (state) {
            return await callback({
                'data':state,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let DeleteState = async (key, callback) =>
{
    return await Delete(key, async (state) => {
        if (state) {
            return await callback({
                'data':state,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let GetState = async (stateName, callback) => {
    return await GetById(stateName, async (state) => {
        if (state) {
            return await callback({
                'data':state,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let GetAllStates = async (filter, callback) => {
    return await GetAll(filter, async (states) => {
        if (states) {
            return await callback({
                'data':states,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

export { IsStateValid, AddState, UpdateState, DeleteState, GetState, GetAllStates };