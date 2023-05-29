use wasm_bindgen::{
  prelude::wasm_bindgen,
  JsValue
};



#[wasm_bindgen]
pub fn dev(perms: JsValue) {
  deno("run",perms,String::from("proton-xd/src/main.ts"),false);

}

#[wasm_bindgen]
pub fn build(perms: JsValue) {
  deno("compile",perms,String::from("proton-xd/src/main.ts"),true)
}

#[wasm_bindgen]
pub fn start() {
  todo!()
}

#[wasm_bindgen]
pub fn clean() {
  todo!()
}


fn deno(action: &str,permissions: JsValue,main: String,strict: bool) {
  let mut perms: Vec<String>=permissions.into_serde().unwrap();
  if strict {perms.push(String::from("--no-prompt"))}

  std::process::Command::new("deno")
  .arg(action)
  .args(perms)
  .arg(main)
  .spawn()
  .unwrap();
}