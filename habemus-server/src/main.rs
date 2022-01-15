mod config;
mod controllers;

use actix_cors::Cors;
use actix_web::{web, App, HttpServer};

use crate::config::Config;
use crate::controllers::default::{greet, home, version_info};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let config = Config::load_env();
    let mode = config.mode;

    let context_path = config.context_path;
    let bind_address = format!("127.0.0.1:{}", config.port);

    println!(
        "started server on {}, url: http://{}{}",
        bind_address, bind_address, context_path
    );

    HttpServer::new(move || {
        let cors: Cors = if mode.eq("dev") {
            Cors::default()
                .allow_any_header()
                .allow_any_method()
                .allow_any_origin()
        } else {
            Cors::default()
        };

        App::new().service(
            web::scope(&context_path)
                .wrap(cors)
                .service(home)
                .service(version_info)
                .service(greet),
        )
    })
    .bind(bind_address)?
    .run()
    .await
}
