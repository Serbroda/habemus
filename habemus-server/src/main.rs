mod config;
mod controllers;

use actix_web::{middleware, web, App, HttpServer};

use crate::config::Config;
use crate::controllers::default::{home, version_info};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let config = Config::load_env();

    let context_path = config.context_path;
    let bind_address = format!("127.0.0.1:{}", config.port);

    println!(
        "started server on {}, url: http://{}{}",
        bind_address, bind_address, context_path
    );

    HttpServer::new(move || {
        App::new()
            .wrap(middleware::NormalizePath::default())
            .service(
                web::scope(&context_path)
                    .service(home)
                    .service(version_info),
            )
    })
    .bind(bind_address)?
    .run()
    .await
}
