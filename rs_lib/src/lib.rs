pub mod types;

use wasm_bindgen::prelude::wasm_bindgen;

use std::{
  env::{
    current_dir,
    set_current_dir
  },
  process::Command
};


#[wasm_bindgen]
pub fn dev() {
  if !current_dir().unwrap().to_str().unwrap().ends_with("proton-xd") {
    set_current_dir("proton-xd").unwrap();
  }

  let dev=Command::new("deno").args(["run"]);
  
}

#[wasm_bindgen]
pub fn build() {
  

}

#[wasm_bindgen]
pub fn start() {
  

}

#[wasm_bindgen]
pub fn clean() {



   
}

