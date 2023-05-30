interface Config {
  name: string;
  framework: string;
  ext: string;
  script: Scripts
  permissions: Permissions;
}

interface Permissions {
  env: string[]|boolean;
  sys: string[]|boolean;
  hrtime: boolean;
  net: string[]|boolean;
  ffi: boolean;
  read: string[]|boolean;
  run: string[]|boolean;
  write: string[]|boolean;
  unstable: boolean;
}


interface Scripts {
  frontend: string;
  backend: string;
  build: string;
}


export async function getPermissions(config: Config): Promise<string[]> {
  type Flags="env"|"sys"|"net"|"ffi"|"run"|"hrtime"|"read"|"write"|"unstable";
  const keys: Flags[]=["env","sys","net","ffi","run","hrtime","read","write","unstable"];
  const flags: string[]=[];
  
  try {
    for await(const flag of keys) {
      const permission=config.permissions[flag];
      switch(typeof permission) {
        case "boolean":
          if(permission) flags.push(flag.includes("unstable")?"--unstable":`--allow-${flag}`);
        break;
        case "object":
          if(permission.length) flags.push(`--allow-${flag}=${permission.join(",")}`);
        break;
      }
    }
  } catch {
    Deno.exit(1);
  }
  return flags;
}


export const config=async (): Promise<Config>=> await JSON.parse(Deno.readTextFileSync("./proton-xd.config.json")) satisfies Config;
