import request from "@/utils/request";

export function banner(data) {
    return request({
        url: '/homeApi/os/banner/list',
        method: 'post',
        data
    })
}