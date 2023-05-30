use wasm_bindgen::{
  prelude::wasm_bindgen,
  JsValue
};
#[wasm_bindgen]
pub fn build(perms: JsValue) {
  deno("compile",perms,"proton-xd/src/main.ts")
}

fn deno(_action: &str,permissions: JsValue,_main: &str) {
  let mut _perms: Vec<String>=permissions.into_serde().unwrap();

  
  // wasm_bus_process::process::Command::new("deno")
  // .arg(action)
  // .args(perms)
  // .arg(main)
  // .arg("--no-prompt")
  // .spawn()
  // .unwrap()
  // .wait()
  // .unwrap();
}