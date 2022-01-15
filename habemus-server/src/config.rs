use dotenv::dotenv;
use std::env;

pub struct Config {
    pub port: String,
}

impl Config {
    pub fn load_env() -> Config {
        dotenv().ok();

        let port = match env::var("PORT") {
            Ok(val) => val,
            Err(_) => "8080".to_string(),
        };
        Config { port }
    }
}
