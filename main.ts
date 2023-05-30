import { instantiate,dev,build,start,clean } from "./lib/rs_lib.generated.js";
import { getPermissions,config } from "./proton-xd.config.ts";

await instantiate();
const permissions: string[]=(await getPermissions(await config()));

console.log(permissions);



switch(Deno.args[0]) {
  case "dev":case "d":
    dev(permissions);
  break;
  case "build":case "b":
    build(permissions);
  break;
  case "start":case "s":
    start();
  break;
  case "clean":case "c":
    clean();
  break;
}
