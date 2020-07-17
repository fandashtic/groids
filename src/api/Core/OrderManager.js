import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Order';

let IsOrderValid = async (orderName, password, callback) => {
    return await GetById(orderName, async (order) => {
        if (order.password === password) {
            return await callback({
                'data': {
                    OrderName: order.orderName,
                    OrderDisplayName: order.firstName + ' ' + order.lastName,
                    OrderType: order.orderType,
                    CompanyId: order.companyId,
                    StoreId: order.storeId,
                    OrderProfileImage: order.profileImageUrl
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

let AddOrder = async (order, callback) => {
    return await Save(order, async (order) => {
        if (order) {
            return await callback({
                'data':order,
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

let UpdateOrder = async (key, order, callback) => { 
    return await Update(key, order, async (order) => {
        if (order) {
            return await callback({
                'data':order,
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

let DeleteOrder = async (key, callback) =>
{
    return await Delete(key, async (order) => {
        if (order) {
            return await callback({
                'data':order,
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

let GetOrder = async (orderName, callback) => {
    return await GetById(orderName, async (order) => {
        if (order) {
            return await callback({
                'data':order,
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

let GetAllOrders = async (filter, callback) => {
    return await GetAll(filter, async (orders) => {
        if (orders) {
            return await callback({
                'data':orders,
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

export { IsOrderValid, AddOrder, UpdateOrder, DeleteOrder, GetOrder, GetAllOrders };