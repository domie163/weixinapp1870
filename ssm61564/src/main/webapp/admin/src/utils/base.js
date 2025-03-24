const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm61564/",
            name: "ssm61564",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm61564/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的美容院管理系统"
        } 
    }
}
export default base
