import request from "@/utils/request";

export function user_login(params) {
    return request({
        url: '/api/springTravel/citys',
        method: 'get',
        params
    })
}