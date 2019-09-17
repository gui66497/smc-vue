import http from '@/api/http'

/**
 * 资产列表
 * @param query
 * @returns {AxiosPromise}
 */
export function assetList(query) {
    return http({
        url: '/asset/list',
        method: 'post',
        data: query
    })
}

/**
 * 资产类型列表
 * @param isAll 是否显示全部 false代表只显示有资产的类型
 * @returns {AxiosPromise}
 */
export function assetTypeList(isAll) {
    let url = '/assetType/list/' + (isAll ? '1' : '0');
    return http({
        url: url,
        method: 'get'
    })
}

/**
 * 机历信息
 * @returns {AxiosPromise}
 */
export function assetHistory(assetId) {
    let url = '/assetHistory/' + assetId;
    return http({
        url: url,
        method: 'get'
    })
}

