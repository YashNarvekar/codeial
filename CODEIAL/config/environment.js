
const development ={
    name:' development',
    asset_path: './assets',
    session_cookie_key: 'somethingBla',
    db: 'codeial_development',
    smtp:{
            service: 'gmail',
            host : 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth:{
                user: 'yash.narvekar01',
                pass: 'rxltsfzvdsodseym'
            }
        },
    google_client_id: '1069318262883-tbo9e4a0ljtlq6d2l8veplhgb0a9d6b5.apps.googleusercontent.com',
    google_client_secret: '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' ,
    google_call_back_url: "http://localhost:9000/users/auth/google/callback",
    jwt_secret : 'codeial'
    
        
    }



// const production ={
//     name:' production'
// }

module.exports = development;