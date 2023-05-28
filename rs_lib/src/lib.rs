use wasm_bindgen::prelude::wasm_bindgen;

use std::{
  env::{
    current_dir,
    set_current_dir
  },
  process::Command, fs
};


#[wasm_bindgen]
pub fn dev() {
  deno("run",vec![],String::from("proton-xd/src/main.ts"));
  
}

#[wasm_bindgen]
pub fn build() {
  deno("compile",vec![],String::from("proton-xd/src/main.ts"))
}

#[wasm_bindgen]
pub fn start() {
  
}

#[wasm_bindgen]
pub fn clean() {
  
   
}


fn deno(action: &str,permissions: Vec<String>,main: String) {
  Command::new("deno").arg(action).args(permissions).arg(main).spawn().unwrap();
}