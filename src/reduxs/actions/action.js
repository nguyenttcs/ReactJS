import axios from 'axios';

export function showSubTenant(payload) { // ({name, subtenantId})
    return {
        type: 'SHOW_SUBTENANT',
        payload,
    }
}

export function showBrand(payload) { // ({id, subtenantId, url})
    return {
        type: 'SHOW_BRAND',
        payload,
    }
}

export function getData(subTenantId) { //subtenantId
    return {
      type: "GET_SUBTENANTID",
      subTenantId
    };
  }

export const fetchSubTenant = () => {
    return axios.get('https://5cee87a11c2baf00142cc083.mockapi.io/sub-tenant')
        .then(res => {
            return res.data;
        })
        .catch(err => console.log(err))
}

export const fetchBrand = () => {
    return axios.get('https://5cee87a11c2baf00142cc083.mockapi.io/brand')
        .then(res => {
            return res.data;
        })
        .catch(err => console.log(err))
}
