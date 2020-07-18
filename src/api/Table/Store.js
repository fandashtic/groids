let Store = {
    store_id: String,
    store_name: String,
    store_type: String,
    billing_address: String,
    shipping_address: String,
    area_id: String,
    area_name: String,
    city_id: String,
    city_name: String,
    state_id: String,
    state_name: String,
    country_id: String,
    country_name: String,
    pincode: String,
    latitude: String,
    longitude: String,
    email: String,
    mobilenumber: String,
    contactperson: String,
    tin: String,
    gst: String,
    logo: String,
    banner: String,
    business_days_hours: String,
    delivery_days_hours: String,
    company_id: String,
    status: Boolean,
    created_on: Date,
    created_by: String,
    modified_on: Date,
    modified_by: String
}

let Store_Lookup = {
    store_id: String,
    store_name: String,
    store_type: String,
    billing_address: String,
    shipping_address: String,
    area_id: String,
    area_name: String,
    areas: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    city_id: String,
    city_name: String,
    cities: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    state_id: String,
    state_name: String,
    states: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    country_id: String,
    country_name: String,
    countries: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    pincode: String,
    latitude: String,
    longitude: String,
    email: String,
    mobilenumber: String,
    contactperson: String,
    tin: String,
    gst: String,
    logo: String,
    banner: String,
    business_days_hours: String,
    delivery_days_hours: String,
    company_id: String,
    status: Boolean,
    created_on: Date,
    created_by: String,
    modified_on: Date,
    modified_by: String
}

export { Store, Store_Lookup };