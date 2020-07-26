import { v4 as uuidv4 } from 'uuid';
import generator from 'generate-password';
import { Base64 } from 'js-base64';

let GetUpdateExpressionAndAttributeValuesAndNames = (obj, type) => {
    let result = {};
    result.expression = 'set ';
    result.names = {};
    result.attributeValues = {};
    if (IsHasValue(obj)) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (i === 0) result.expression = (type === 0 ? '' : 'set ');
            result.expression = result.expression + (type === 0 ? '#' : '') + keys[i] + ' = :' + keys[i];

            result.attributeValues[':' + keys[i]] = obj[keys[i]];
            result.names['#' + keys[i]] = keys[i];

            if (i < keys.length - 1) result.expression = result.expression + ', ';
        }
    }
    return result;
};

let GetKey = (key, value) => {
    let _key = {};
    _key[key] = value;
    return _key;
};

let GetNewKey = (type) => {
    let _key = uuidv4();
    let buff = new Buffer(_key);
    let base64data = buff.toString('base64');
    if (IsHasValue(type)) {
        base64data = type + '0' + base64data;
    }
    return base64data;
};

let GetKeyNameFromObject = (obj, value) => {
    var keys = Object.keys(obj);
    console.log(keys[value]);
    return keys[value];
}

let ReturnObject = (callback, err, data, methodName) => {
    if (err) {
        callback(null, 'Error on ' + methodName + ': ' + JSON.stringify(err));
    } else {
        if (IsHasValue(data)) {
            if (IsHasValue(data.Item)) { return callback(SortByCreatedOn(data.Item), null); }
            if (IsHasValue(data.Attributes)) { return callback(SortByCreatedOn(data.Attributes), null); }
            if (IsHasValue(data)) { return callback(SortByCreatedOn(data), null); }
        } else {
            return callback(null, 'Error on ' + methodName);
        }
    }
};

let IsHasValue = (data) => {
    if (data !== null && data !== undefined && data !== '') {
        return true;
    }
    return false;
};

let GetLookUpData = (dataList, idCoulmn, dataLabel, dependCol, selectedValue) => {
    let result = { list: [], label: '' };
    let _isSelected = false;
    dataList.forEach(l => {
        _isSelected = ((l[idCoulmn] === selectedValue) ? true : false);
        if (_isSelected === true) {
            result.label = l[dataLabel];
        }

        result.list.push(
            {
                label: l[dataLabel],
                value: l[idCoulmn],
                isSelected: _isSelected,
                depend: IsHasValue(dependCol) ? l[dependCol] : ''
            }
        )
    });
    return result;
}

let AddDetaultValues = (tableData, keyColumn, type, created_by) => {
    tableData[keyColumn] = GetNewKey(type);
    tableData['created_by'] = created_by;
    tableData['created_on'] = GetDate();
    tableData['status'] = true;
    return tableData;
}

let UpdateDetaultValues = (tableData, modified_by) => {
    tableData['modified_by'] = modified_by;
    tableData['modified_on'] = GetDate();
    return tableData;
}

let SortByCreatedOn = (tableData) => {
    return DeCode(tableData);
}

let AppendLeadingZeroes = (n) => {
    if (n <= 9) {
        return "0" + n;
    }
    return n
}

let GetDate = () => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let current_datetime = new Date();
    let formatted_date = current_datetime.getFullYear() + "-"
        + months[current_datetime.getMonth()] + "-"
        + AppendLeadingZeroes(current_datetime.getDate()) + " "
        + AppendLeadingZeroes(current_datetime.getHours()) + ":"
        + AppendLeadingZeroes(current_datetime.getMinutes()) + ":"
        + AppendLeadingZeroes(current_datetime.getSeconds())
    return formatted_date;
}

let EnCode = (data) => {
    return Base64.encode(data);
}

let DeCode = (data) => {
    return Base64.decode(data);
}

let CreatePassword = (password, password_salt) => {
    return Base64.encode(password + password_salt);
};

let ComparePassword = (password, password_salt, sys_password) => {
    return Base64.encode(password + password_salt) === sys_password ? true : false;
};

let CreatePasswordSalt = () => {
    return generator.generate({
        length: 10,
        numbers: true,
        symbols: true,
        lowercase: true,
        uppercase: true
    });
};

let GetFileExtn = (fileName) => {
    return fileName.slice((Math.max(0, fileName.lastIndexOf(".")) || Infinity) + 1);
}

export {
    GetLookUpData, GetDate, SortByCreatedOn, IsHasValue, GetUpdateExpressionAndAttributeValuesAndNames,
    ReturnObject, GetKey, GetNewKey, AddDetaultValues, UpdateDetaultValues, CreatePassword, CreatePasswordSalt,
    ComparePassword, GetKeyNameFromObject, EnCode, DeCode, GetFileExtn
};