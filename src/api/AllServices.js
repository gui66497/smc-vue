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
 * 新增或修改资产
 * @param json 资产json
 * @returns {AxiosPromise}
 */
export function addAsset(json) {
    return http({
        url: '/asset/addOrUpdate/',
        method: 'post',
        data: json
    })
}

/**
 * 删除指定资产
 * @param id 资产id
 * @returns {AxiosPromise}
 */
export function deleteAsset(id) {
    return http({
        url: '/asset/' + id,
        method: 'delete'
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
 * 获取组织机构
 * @returns {AxiosPromise}
 */
export function organizeList() {
    return http({
        url: '/organize/list/1',
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

