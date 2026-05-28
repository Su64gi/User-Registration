module.exports={
    server:{
        port: process.env.PORT || 3000,
        host: "localhost",
    },
    register:{
        plugins:[require("../plugins/mysql")]
    }
};