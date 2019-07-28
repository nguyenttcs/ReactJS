
const initialState = {
    listSubTenant: [] 
}

export function reducerFilter(state = initialState, action) {
    switch (action.type) {
        case "SHOW_SUBTENANT":
            return {
                ...state,
                listSubTenant: action.payload
            }
        default:
            return state;
    }
}

const initialBrandState = {
    listBrand: [] 
}
export function reducerBrand(state = initialBrandState, action) {
    switch (action.type) {
        case "SHOW_BRAND":
            return {
                ...state,
                listBrand: action.payload
            }
        default:
            return state;
    }
}

const initialSubTenantIdState = {
    subTenantId: '1' 
}

export function reducerGetSubTenantId(state = initialSubTenantIdState, action) {
    switch (action.type) {
        case "GET_SUBTENANTID":
            return {
                ...state,
                subTenantId: action.subTenantId
            }
        default:
            return state;
    }
}

