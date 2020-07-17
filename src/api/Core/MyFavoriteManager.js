import { GetById, GetAll, Save, Update, Delete } from 'api/Data/MyFavorite';

let IsMyFavoriteValid = async (myFavoriteName, password, callback) => {
    return await GetById(myFavoriteName, async (myFavorite) => {
        if (myFavorite.password === password) {
            return await callback({
                'data': {
                    MyFavoriteName: myFavorite.myFavoriteName,
                    MyFavoriteDisplayName: myFavorite.firstName + ' ' + myFavorite.lastName,
                    MyFavoriteType: myFavorite.myFavoriteType,
                    CompanyId: myFavorite.companyId,
                    StoreId: myFavorite.storeId,
                    MyFavoriteProfileImage: myFavorite.profileImageUrl
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

let AddMyFavorite = async (myFavorite, callback) => {
    return await Save(myFavorite, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data':myFavorite,
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

let UpdateMyFavorite = async (key, myFavorite, callback) => { 
    return await Update(key, myFavorite, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data':myFavorite,
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

let DeleteMyFavorite = async (key, callback) =>
{
    return await Delete(key, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data':myFavorite,
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

let GetMyFavorite = async (myFavoriteName, callback) => {
    return await GetById(myFavoriteName, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data':myFavorite,
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

let GetAllMyFavorites = async (filter, callback) => {
    return await GetAll(filter, async (myFavorites) => {
        if (myFavorites) {
            return await callback({
                'data':myFavorites,
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

export { IsMyFavoriteValid, AddMyFavorite, UpdateMyFavorite, DeleteMyFavorite, GetMyFavorite, GetAllMyFavorites };