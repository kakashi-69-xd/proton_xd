use wasm_bindgen::{
  prelude::wasm_bindgen,
  JsValue
};
use std::process::Command;


#[wasm_bindgen]
pub fn dev(_perms: JsValue) {
  

  deno("run",_perms,String::from("proton-xd/src/main.ts"));
  
}

#[wasm_bindgen]
pub fn build(_perms: JsValue) {
  deno("compile",_perms,String::from("proton-xd/src/main.ts"))
}

#[wasm_bindgen]
pub fn start(_perms: JsValue) {
  todo!()
}

#[wasm_bindgen]
pub fn clean(_perms: JsValue) {
  todo!()
}


fn deno(action: &str,permissions: JsValue,main: String) {
  let perms: Vec<String>=permissions.into_serde().unwrap();
  Command::new("deno")
  .arg(action)
  .args(perms)
  .arg(main)
  .spawn()
  .unwrap();
}