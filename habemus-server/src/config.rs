use dotenv::dotenv;
use std::env;

pub struct Config {
    pub port: String,
    pub context_path: String,
}

fn get_value_with_default(key: &str, default_value: String) -> String {
    match env::var(key) {
        Ok(val) => val,
        Err(_) => default_value,
    }
}

impl Config {
    pub fn load_env() -> Self {
        dotenv().ok();

        let context_path = get_value_with_default("CONTEXT_PATH", "".to_string());

        Config {
            port: get_value_with_default("PORT", "8080".to_string()),
            context_path: if context_path.eq("/") {
                "".to_string()
            } else {
                context_path
            },
        }
    }
}
