mod config;
mod controllers;

use actix_web::{App, HttpServer};

use crate::config::Config;
use crate::controllers::default::home;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let config = Config::load_env();
    let bind_address = format!("127.0.0.1:{}", config.port);

    println!(
        "started server on {}, url: http://{}",
        bind_address, bind_address
    );

    HttpServer::new(|| App::new().service(home))
        .bind(bind_address)?
        .run()
        .await
}
