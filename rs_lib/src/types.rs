


pub struct  Config {
  pub name: String,
  pub framework: String,
  pub ext: String,
  pub script: Scripts,
  pub permissions: Permissions,
}

pub struct  Permissions {
  pub env: Vec<String>,
  pub sys: Vec<String>,
  pub hrtime: bool,
  pub net: Vec<String>,
  pub ffi: bool,
  pub read: Vec<String>,
  pub run: Vec<String>,
  pub write: Vec<String>,
  pub unstable: bool,
}

// export interface NPMPackage {
//   name: String,
//   version: String,
//   description: String,
//   main: String,
//   scripts: {
//     [script: String]: String,
//   },
//   keywords: Vec<String>,
//   author: String,
//   license: String,
// }

pub struct  Scripts {
  pub frontend: String,
  pub backend: String,
  pub build: String,
}