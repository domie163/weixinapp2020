const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1171u/",
            name: "springboot1171u",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1171u/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "“口腔助手”小程序的设计与实现"
        } 
    }
}
export default base
