use actix_web::{get, web, HttpResponse, Responder, Result};
use serde::Serialize;

const VERSION: &str = env!("CARGO_PKG_VERSION");

#[derive(Serialize)]
struct Person {
    name: String,
}

#[get("")]
pub async fn home() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[get("/version_info")]
pub async fn version_info() -> impl Responder {
    HttpResponse::Ok().body(VERSION)
}

#[get("/greet/{name}")]
pub async fn greet(name: web::Path<String>) -> Result<impl Responder> {
    Ok(web::Json(Person {
        name: name.to_string(),
    }))
}
