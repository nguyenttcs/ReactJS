import {combineReducers} from 'redux'
import {reducerFilter, reducerBrand, reducerGetSubTenantId} from './reducer'

const rootReducer = combineReducers({
    subTenant: reducerFilter,
    brand: reducerBrand,
    subTenantID: reducerGetSubTenantId
})

export default rootReducer;