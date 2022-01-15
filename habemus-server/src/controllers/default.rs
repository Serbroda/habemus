use actix_web::{get, HttpResponse, Responder};

const VERSION: &str = env!("CARGO_PKG_VERSION");

#[get("/")]
pub async fn home() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[get("/version_info")]
pub async fn version_info() -> impl Responder {
    HttpResponse::Ok().body(VERSION)
}
